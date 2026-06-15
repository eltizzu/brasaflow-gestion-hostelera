const assert = require("node:assert");
const test = require("node:test");
const { createAppServer } = require("../src/server/app-server");

const demoUsers = [
  { id: "user-admin", name: "Admin Demo", email: "admin@test.local", password: "1234", view: "admin", employeeId: "emp-1" },
  { id: "user-employee", name: "Empleado Demo", email: "employee@test.local", password: "1234", view: "employee", employeeId: "emp-2" },
];

function listenUrl(server) {
  const address = server.address();
  return `http://127.0.0.1:${address.port}`;
}

async function waitForListening(server) {
  if (server.listening) return;
  await new Promise((resolve) => server.once("listening", resolve));
}

async function closeServer(server) {
  await new Promise((resolve) => server.close(resolve));
}

test("state PUT rejects writes without the configured local write token", async () => {
  const server = createAppServer({
    appId: "brasaflow",
    appName: "BrasaFlow test",
    root: __dirname,
    dbPath: ":memory:",
    port: 0,
    stateWriteToken: "secret-token",
  });

  try {
    await waitForListening(server);
    const response = await fetch(`${listenUrl(server)}/api/state`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ business: { name: "Unsafe write" } }),
    });

    assert.equal(response.status, 403);
    assert.deepEqual(await response.json(), {
      error: "forbidden_state_write",
      message: "No autorizado para guardar el estado.",
    });
  } finally {
    await closeServer(server);
  }
});

test("state PUT accepts writes with the configured local write token", async () => {
  const server = createAppServer({
    appId: "brasaconnect",
    appName: "BrasaConnect test",
    root: __dirname,
    dbPath: ":memory:",
    port: 0,
    stateWriteToken: "secret-token",
  });

  try {
    await waitForListening(server);
    const writeResponse = await fetch(`${listenUrl(server)}/api/state`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Brasa-State-Token": "secret-token",
      },
      body: JSON.stringify({ business: { name: "Safe write" } }),
    });
    assert.equal(writeResponse.status, 200);

    const readResponse = await fetch(`${listenUrl(server)}/api/state`);
    assert.equal(readResponse.status, 200);
    assert.deepEqual(await readResponse.json(), { business: { name: "Safe write" } });
  } finally {
    await closeServer(server);
  }
});

test("public reservation endpoint validates and appends a reservation without replacing state", async () => {
  const server = createAppServer({
    appId: "brasareservas",
    appName: "BrasaReservas test",
    root: __dirname,
    dbPath: ":memory:",
    port: 0,
    stateWriteToken: "secret-token",
  });

  try {
    await waitForListening(server);
    await fetch(`${listenUrl(server)}/api/state`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Brasa-State-Token": "secret-token",
      },
      body: JSON.stringify({
        business: { name: "La Terraza Central" },
        reservations: [{ id: "existing", clientId: "cli-existing", status: "Confirmada" }],
        clients: [{ id: "cli-existing", name: "Ana", phone: "600000000", visits: 1 }],
        ui: { currentSection: "dashboard" },
      }),
    });

    const response = await fetch(`${listenUrl(server)}/api/public/reservations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientName: "Marta",
        phone: "600111222",
        date: "2026-06-05",
        time: "21:30",
        people: 2,
        service: "Cena",
        note: "Terraza",
      }),
    });

    assert.equal(response.status, 201);
    const created = await response.json();
    assert.equal(created.ok, true);
    assert.match(created.reservationId, /^res-/);

    const readResponse = await fetch(`${listenUrl(server)}/api/state`);
    const state = await readResponse.json();
    assert.equal(state.business.name, "La Terraza Central");
    assert.equal(state.reservations.length, 2);
    assert.equal(state.reservations[0].status, "Pendiente");
    assert.equal(state.reservations[0].note, "Reserva web: Terraza");
    assert.equal(state.reservations[1].id, "existing");
    assert.equal(state.clients[0].name, "Marta");
    assert.equal(state.ui.currentSection, "reservations");
  } finally {
    await closeServer(server);
  }
});

test("BrasaFlow session endpoint returns safe user data for valid credentials", async () => {
  const server = createAppServer({
    appId: "brasaflow",
    appName: "BrasaFlow test",
    root: __dirname,
    dbPath: ":memory:",
    port: 0,
    authUsers: demoUsers,
  });

  try {
    await waitForListening(server);
    const response = await fetch(`${listenUrl(server)}/api/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "admin@test.local", password: "1234" }),
    });

    assert.equal(response.status, 200);
    assert.match(response.headers.get("set-cookie"), /brasa_session=/);
    const payload = await response.json();
    assert.deepEqual(payload.user, {
      id: "user-admin",
      name: "Admin Demo",
      email: "admin@test.local",
      view: "admin",
      employeeId: "emp-1",
    });
    assert.equal("password" in payload.user, false);
  } finally {
    await closeServer(server);
  }
});

test("BrasaFlow session endpoint rejects invalid credentials", async () => {
  const server = createAppServer({
    appId: "brasaflow",
    appName: "BrasaFlow test",
    root: __dirname,
    dbPath: ":memory:",
    port: 0,
    authUsers: demoUsers,
  });

  try {
    await waitForListening(server);
    const response = await fetch(`${listenUrl(server)}/api/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "admin@test.local", password: "bad" }),
    });

    assert.equal(response.status, 401);
    assert.deepEqual(await response.json(), {
      error: "invalid_credentials",
      message: "Credenciales incorrectas.",
    });
  } finally {
    await closeServer(server);
  }
});

test("BrasaFlow state PUT rejects writes without an admin or manager session", async () => {
  const server = createAppServer({
    appId: "brasaflow",
    appName: "BrasaFlow test",
    root: __dirname,
    dbPath: ":memory:",
    port: 0,
    stateWriteToken: "secret-token",
    authUsers: demoUsers,
  });

  try {
    await waitForListening(server);
    const response = await fetch(`${listenUrl(server)}/api/state`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Brasa-State-Token": "secret-token",
      },
      body: JSON.stringify({ business: { name: "No session write" } }),
    });

    assert.equal(response.status, 403);
    assert.deepEqual(await response.json(), {
      error: "forbidden_state_write",
      message: "No autorizado para guardar el estado.",
    });
  } finally {
    await closeServer(server);
  }
});

test("BrasaFlow state PUT accepts writes with an admin session", async () => {
  const server = createAppServer({
    appId: "brasaflow",
    appName: "BrasaFlow test",
    root: __dirname,
    dbPath: ":memory:",
    port: 0,
    authUsers: demoUsers,
  });

  try {
    await waitForListening(server);
    const loginResponse = await fetch(`${listenUrl(server)}/api/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "admin@test.local", password: "1234" }),
    });
    const cookie = loginResponse.headers.get("set-cookie").split(";")[0];

    const writeResponse = await fetch(`${listenUrl(server)}/api/state`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookie,
      },
      body: JSON.stringify({ business: { name: "Session write" } }),
    });

    assert.equal(writeResponse.status, 200);
    const readResponse = await fetch(`${listenUrl(server)}/api/state`);
    assert.deepEqual(await readResponse.json(), { business: { name: "Session write" } });
  } finally {
    await closeServer(server);
  }
});

test("public reservation endpoint rejects invalid reservation data", async () => {
  const server = createAppServer({
    appId: "brasareservas",
    appName: "BrasaReservas test",
    root: __dirname,
    dbPath: ":memory:",
    port: 0,
  });

  try {
    await waitForListening(server);
    const response = await fetch(`${listenUrl(server)}/api/public/reservations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientName: "", people: 0 }),
    });

    assert.equal(response.status, 400);
    const payload = await response.json();
    assert.equal(payload.error, "invalid_public_reservation");
    assert.equal(payload.errors.clientName, "Indica tu nombre.");
    assert.equal(payload.errors.people, "El numero de personas debe estar entre 1 y 20.");
  } finally {
    await closeServer(server);
  }
});
