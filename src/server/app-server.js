const http = require("node:http");
const crypto = require("node:crypto");
const path = require("node:path");
const { createDatabase } = require("./database");
const { readJsonBody } = require("./json-body");
const { sendStaticFile } = require("./static-files");
const { createStateStore } = require("./state-store");
const { validatePublicReservation } = require("../validation/public-reservation");
const { validateEmail, sanitizeText, validateStatePayload } = require("../validation/input");

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function hasStateWriteAccess(req, token) {
  if (!token) return true;
  return req.headers["x-brasa-state-token"] === token;
}

function parseCookies(req) {
  return String(req.headers.cookie || "")
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce((cookies, part) => {
      const separatorIndex = part.indexOf("=");
      if (separatorIndex === -1) return cookies;
      const key = part.slice(0, separatorIndex);
      const value = part.slice(separatorIndex + 1);
      cookies[key] = decodeURIComponent(value);
      return cookies;
    }, {});
}

function safeUser(user) {
  if (!user) return null;
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    view: user.view,
    employeeId: user.employeeId,
  };
}

function findAuthUser(users, email, password) {
  return users.find((user) => (
    String(user.email || "").toLowerCase() === email
    && String(user.password || "") === password
  ));
}

function createSessionStore() {
  const sessions = new Map();

  function create(user) {
    const token = crypto.randomBytes(24).toString("hex");
    sessions.set(token, safeUser(user));
    return token;
  }

  function get(token) {
    return token ? sessions.get(token) || null : null;
  }

  function destroy(token) {
    if (token) sessions.delete(token);
  }

  return { create, get, destroy };
}

function sendSessionCookie(res, token) {
  res.setHeader("Set-Cookie", `brasa_session=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/`);
}

function clearSessionCookie(res) {
  res.setHeader("Set-Cookie", "brasa_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0");
}

function createOrFindClient(state, name, phone) {
  state.clients = Array.isArray(state.clients) ? state.clients : [];
  const existing = state.clients.find((client) => String(client.name || "").toLowerCase() === name.toLowerCase());
  if (existing) {
    existing.phone = phone || existing.phone || "";
    return existing;
  }

  const client = {
    id: `cli-${Date.now()}`,
    name,
    phone,
    visits: 0,
    tags: ["Web"],
    notes: "Cliente creado desde link publico.",
    history: [],
  };
  state.clients.unshift(client);
  return client;
}

function addPublicReservation(state, input) {
  const clientName = String(input.clientName || "").trim();
  const phone = String(input.phone || "").trim();
  const service = String(input.service || "Comida").trim() || "Comida";
  const note = String(input.note || "Sin comentario").trim() || "Sin comentario";
  const client = createOrFindClient(state, clientName, phone);
  const reservation = {
    id: `res-${Date.now()}`,
    clientId: client.id,
    date: String(input.date || "").trim(),
    time: String(input.time || "").trim(),
    service,
    people: Number(input.people || 1),
    tableId: "",
    status: "Pendiente",
    note: `Reserva web: ${note}`,
  };

  state.reservations = Array.isArray(state.reservations) ? state.reservations : [];
  state.reservations.unshift(reservation);
  state.ui = { ...(state.ui || {}), activeService: service, currentSection: "reservations" };
  return reservation;
}

function createAppServer(options) {
  const appId = options.appId;
  const appName = options.appName;
  const root = options.root;
  const dbPath = options.dbPath || path.join(__dirname, "..", "..", "data", "brasa-product.sqlite");
  const port = options.port;
  const host = options.host || "127.0.0.1";
  const stateWriteToken = options.stateWriteToken || "";
  const authUsers = options.authUsers || [];
  const sessionStore = createSessionStore();
  const db = createDatabase(dbPath);
  const stateStore = createStateStore(db);

  const server = http.createServer(async (req, res) => {
    const currentSessionUser = sessionStore.get(parseCookies(req).brasa_session);

    if (req.url === "/api/session" && req.method === "POST" && appId === "brasaflow") {
      try {
        const payload = await readJsonBody(req, { limitBytes: 16 * 1024 });
        const emailValidation = validateEmail(payload.email, { required: true });
        const passwordValidation = sanitizeText(payload.password, { required: true, maxLength: 200 });
        const inputErrors = {};
        if (!emailValidation.valid) inputErrors.email = emailValidation.error;
        if (!passwordValidation.valid) inputErrors.password = passwordValidation.error;
        if (Object.keys(inputErrors).length) {
          sendJson(res, 400, {
            error: "invalid_session_input",
            message: "Revisa email y contrasena.",
            errors: inputErrors,
          });
          return;
        }

        const email = emailValidation.value.toLowerCase();
        const password = passwordValidation.value;
        const user = findAuthUser(authUsers, email, password);
        if (!user) {
          sendJson(res, 401, {
            error: "invalid_credentials",
            message: "Credenciales incorrectas.",
          });
          return;
        }

        const token = sessionStore.create(user);
        sendSessionCookie(res, token);
        sendJson(res, 200, { user: safeUser(user) });
      } catch (error) {
        sendJson(res, 400, {
          error: error.code || "session_failed",
          message: error.messageText || "No se pudo iniciar sesion.",
        });
      }
      return;
    }

    if (req.url === "/api/session" && req.method === "GET" && appId === "brasaflow") {
      sendJson(res, 200, { user: currentSessionUser });
      return;
    }

    if (req.url === "/api/session" && req.method === "DELETE" && appId === "brasaflow") {
      sessionStore.destroy(parseCookies(req).brasa_session);
      clearSessionCookie(res);
      sendJson(res, 200, { ok: true });
      return;
    }

    if (req.url === "/api/state" && req.method === "GET") {
      try {
        sendJson(res, 200, stateStore.loadState(appId));
      } catch {
        sendJson(res, 500, { error: "state_read_failed", message: "No se pudo leer el estado." });
      }
      return;
    }

    if (req.url === "/api/state" && req.method === "PUT") {
      const canWriteState = appId === "brasaflow"
        ? ["admin", "manager"].includes(currentSessionUser?.view)
        : hasStateWriteAccess(req, stateWriteToken);

      if (!canWriteState) {
        sendJson(res, 403, {
          error: "forbidden_state_write",
          message: "No autorizado para guardar el estado.",
        });
        return;
      }

      try {
        const payload = await readJsonBody(req, { limitBytes: 1024 * 1024 });
        const validation = validateStatePayload(payload);
        if (!validation.valid) {
          sendJson(res, 400, {
            error: "invalid_state_payload",
            message: "El estado contiene campos no validos.",
            errors: validation.errors,
          });
          return;
        }
        stateStore.saveState(appId, validation.value);
        sendJson(res, 200, { ok: true });
      } catch (error) {
        const status = error.code === "payload_too_large" ? 413 : 400;
        sendJson(res, status, {
          error: error.code || "state_write_failed",
          message: error.messageText || "No se pudo guardar el estado.",
        });
      }
      return;
    }

    if (req.url === "/api/public/reservations" && req.method === "POST" && appId === "brasareservas") {
      try {
        const payload = await readJsonBody(req, { limitBytes: 32 * 1024 });
        const validation = validatePublicReservation(payload);
        if (!validation.valid) {
          sendJson(res, 400, {
            error: "invalid_public_reservation",
            message: "No se pudo crear la reserva.",
            errors: validation.errors,
          });
          return;
        }

        const state = stateStore.loadState(appId);
        const reservation = addPublicReservation(state, validation.value);
        stateStore.saveState(appId, state);
        sendJson(res, 201, { ok: true, reservationId: reservation.id });
      } catch (error) {
        const status = error.code === "payload_too_large" ? 413 : 400;
        sendJson(res, status, {
          error: error.code || "public_reservation_failed",
          message: error.messageText || "No se pudo crear la reserva.",
        });
      }
      return;
    }

    sendStaticFile(root, req, res);
  });

  server.listen(port, host, () => {
    console.log(`${appName} disponible en http://${host}:${port}`);
  });

  return server;
}

module.exports = { createAppServer };
