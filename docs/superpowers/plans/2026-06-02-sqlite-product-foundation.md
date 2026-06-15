# SQLite Product Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the Brasa apps from demo-only JSON persistence toward a safer SQLite-backed local product foundation while preserving current demos.

**Architecture:** Add a root Node project, shared backend modules under `src/server`, and SQLite-backed state snapshots. Keep each existing app folder and `/api/state` compatibility while replacing duplicated server internals.

**Tech Stack:** Node.js CommonJS, Node built-in SQLite, Node built-in test runner, existing vanilla HTML/CSS/JS apps.

---

## Files

- Create: `package.json`
- Create: `src/server/content-types.js`
- Create: `src/server/static-files.js`
- Create: `src/server/json-body.js`
- Create: `src/server/database.js`
- Create: `src/server/state-store.js`
- Create: `src/server/app-server.js`
- Create: `src/server/escape.js`
- Create: `src/validation/public-reservation.js`
- Create: `scripts/init-db.js`
- Create: `scripts/seed-demo-state.js`
- Create: `test/server-static-files.test.js`
- Create: `test/server-json-body.test.js`
- Create: `test/state-store.test.js`
- Create: `test/escape.test.js`
- Create: `test/public-reservation.test.js`
- Modify: `server.js`
- Modify: `BrasaReservas - Reservas Hosteleria/server.js`
- Modify: `BrasaComandas - Comandas Hosteleria/server.js`
- Modify: `BrasaConnect - Proveedores Hosteleria/server.js`
- Modify: `app.js`
- Modify: `BrasaReservas - Reservas Hosteleria/app.js`
- Modify: `BrasaComandas - Comandas Hosteleria/app.js`
- Modify: `BrasaConnect - Proveedores Hosteleria/app.js`
- Modify: `BrasaReservas - Reservas Hosteleria/reserva-publica.js`
- Modify: `README.md`

---

### Task 1: Root Node Project And Test Harness

**Files:**
- Create: `package.json`

- [ ] **Step 1: Add package metadata**

Create `package.json`:

```json
{
  "name": "brasa-product-foundation",
  "version": "0.1.0",
  "private": true,
  "description": "Local product foundation for the Brasa hospitality app suite.",
  "scripts": {
    "test": "node --no-warnings --test",
    "db:init": "node scripts/init-db.js",
    "db:seed": "node scripts/seed-demo-state.js",
    "start:flow": "node server.js",
    "start:reservas": "node \"BrasaReservas - Reservas Hosteleria/server.js\"",
    "start:comandas": "node \"BrasaComandas - Comandas Hosteleria/server.js\"",
    "start:connect": "node \"BrasaConnect - Proveedores Hosteleria/server.js\""
  },
  "dependencies": {},
  "devDependencies": {}
}
```

- [ ] **Step 2: Verify package scripts**

Run:

```powershell
npm test
```

Expected: Node test runner completes. It may report zero tests before test files exist.

- [ ] **Step 3: Verify Node SQLite availability**

Run:

```powershell
node --no-warnings -e "const { DatabaseSync } = require('node:sqlite'); console.log(typeof DatabaseSync)"
```

Expected: `function`.

---

### Task 2: Shared Static Server Safety

**Files:**
- Create: `src/server/content-types.js`
- Create: `src/server/static-files.js`
- Create: `test/server-static-files.test.js`

- [ ] **Step 1: Write tests for safe static paths**

Create `test/server-static-files.test.js`:

```js
const assert = require("node:assert");
const test = require("node:test");
const path = require("node:path");
const { resolveStaticPath } = require("../src/server/static-files");

test("resolveStaticPath serves index for root", () => {
  const root = path.join("C:", "demo", "app");
  const result = resolveStaticPath(root, "/");
  assert.equal(result, path.join(root, "index.html"));
});

test("resolveStaticPath strips query strings", () => {
  const root = path.join("C:", "demo", "app");
  const result = resolveStaticPath(root, "/styles.css?v=1");
  assert.equal(result, path.join(root, "styles.css"));
});

test("resolveStaticPath rejects traversal outside root", () => {
  const root = path.join("C:", "demo", "app");
  assert.throws(() => resolveStaticPath(root, "/../../Windows/win.ini"), /outside app root/);
});

test("resolveStaticPath rejects encoded traversal outside root", () => {
  const root = path.join("C:", "demo", "app");
  assert.throws(() => resolveStaticPath(root, "/%2e%2e/%2e%2e/Windows/win.ini"), /outside app root/);
});
```

- [ ] **Step 2: Run test and verify it fails**

Run:

```powershell
npm test -- test/server-static-files.test.js
```

Expected: FAIL because `src/server/static-files.js` does not exist.

- [ ] **Step 3: Add content type map**

Create `src/server/content-types.js`:

```js
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function getContentType(ext) {
  return contentTypes[String(ext || "").toLowerCase()] || "application/octet-stream";
}

module.exports = { getContentType };
```

- [ ] **Step 4: Add safe static resolver**

Create `src/server/static-files.js`:

```js
const fs = require("node:fs");
const path = require("node:path");
const { getContentType } = require("./content-types");

function decodeRequestPath(rawUrl) {
  const pathname = new URL(rawUrl || "/", "http://127.0.0.1").pathname;
  return decodeURIComponent(pathname === "/" ? "/index.html" : pathname);
}

function resolveStaticPath(root, rawUrl) {
  const absoluteRoot = path.resolve(root);
  const decodedPath = decodeRequestPath(rawUrl);
  const relativePath = decodedPath.replace(/^[/\\]+/, "");
  const filePath = path.resolve(absoluteRoot, relativePath);

  if (filePath !== absoluteRoot && !filePath.startsWith(`${absoluteRoot}${path.sep}`)) {
    throw new Error("Requested path is outside app root");
  }

  return filePath;
}

function sendStaticFile(root, req, res) {
  let filePath;
  try {
    filePath = resolveStaticPath(root, req.url);
  } catch {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("No autorizado");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("No encontrado");
      return;
    }

    res.writeHead(200, { "Content-Type": getContentType(path.extname(filePath)) });
    res.end(data);
  });
}

module.exports = { resolveStaticPath, sendStaticFile };
```

- [ ] **Step 5: Run tests**

Run:

```powershell
npm test -- test/server-static-files.test.js
```

Expected: PASS.

---

### Task 3: JSON Body Limits

**Files:**
- Create: `src/server/json-body.js`
- Create: `test/server-json-body.test.js`

- [ ] **Step 1: Write tests for JSON parsing**

Create `test/server-json-body.test.js`:

```js
const assert = require("node:assert");
const { Readable } = require("node:stream");
const test = require("node:test");
const { readJsonBody } = require("../src/server/json-body");

function requestFromChunks(chunks) {
  const req = Readable.from(chunks);
  req.method = "PUT";
  return req;
}

test("readJsonBody parses valid JSON", async () => {
  const payload = await readJsonBody(requestFromChunks(['{"ok":true}']), { limitBytes: 100 });
  assert.deepEqual(payload, { ok: true });
});

test("readJsonBody rejects invalid JSON", async () => {
  await assert.rejects(
    () => readJsonBody(requestFromChunks(["{bad"]), { limitBytes: 100 }),
    /invalid_json/
  );
});

test("readJsonBody rejects oversized payload", async () => {
  await assert.rejects(
    () => readJsonBody(requestFromChunks(['{"value":"too-large"}']), { limitBytes: 5 }),
    /payload_too_large/
  );
});
```

- [ ] **Step 2: Run test and verify it fails**

Run:

```powershell
npm test -- test/server-json-body.test.js
```

Expected: FAIL because `src/server/json-body.js` does not exist.

- [ ] **Step 3: Add JSON body reader**

Create `src/server/json-body.js`:

```js
function createBodyError(code, message) {
  const error = new Error(code);
  error.code = code;
  error.messageText = message;
  return error;
}

function readJsonBody(req, options = {}) {
  const limitBytes = options.limitBytes || 512 * 1024;

  return new Promise((resolve, reject) => {
    let body = "";
    let totalBytes = 0;

    req.on("data", (chunk) => {
      totalBytes += chunk.length;
      if (totalBytes > limitBytes) {
        reject(createBodyError("payload_too_large", "El estado enviado es demasiado grande."));
        req.destroy();
        return;
      }
      body += chunk;
    });

    req.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(createBodyError("invalid_json", "El estado enviado no es valido."));
      }
    });

    req.on("error", () => {
      reject(createBodyError("request_error", "No se pudo leer la solicitud."));
    });
  });
}

module.exports = { readJsonBody };
```

- [ ] **Step 4: Run tests**

Run:

```powershell
npm test -- test/server-json-body.test.js
```

Expected: PASS.

---

### Task 4: SQLite State Store

**Files:**
- Create: `src/server/database.js`
- Create: `src/server/state-store.js`
- Create: `scripts/init-db.js`
- Create: `scripts/seed-demo-state.js`
- Create: `test/state-store.test.js`

- [ ] **Step 1: Write state store tests**

Create `test/state-store.test.js`:

```js
const assert = require("node:assert");
const test = require("node:test");
const { createDatabase } = require("../src/server/database");
const { createStateStore } = require("../src/server/state-store");

test("state store saves and loads per app", () => {
  const db = createDatabase(":memory:");
  const store = createStateStore(db);

  store.saveState("brasaflow", { business: { name: "Demo Flow" } });
  store.saveState("brasareservas", { business: { name: "Demo Reservas" } });

  assert.deepEqual(store.loadState("brasaflow"), { business: { name: "Demo Flow" } });
  assert.deepEqual(store.loadState("brasareservas"), { business: { name: "Demo Reservas" } });
});

test("state store creates history when replacing state", () => {
  const db = createDatabase(":memory:");
  const store = createStateStore(db);

  store.saveState("brasaflow", { version: 1 });
  store.saveState("brasaflow", { version: 2 });

  const history = db.prepare("select app_id, payload from state_history where app_id = ?").all("brasaflow");
  assert.equal(history.length, 1);
  assert.deepEqual(JSON.parse(history[0].payload), { version: 1 });
});

test("state store returns empty object when app has no state", () => {
  const db = createDatabase(":memory:");
  const store = createStateStore(db);

  assert.deepEqual(store.loadState("unknown"), {});
});
```

- [ ] **Step 2: Run test and verify it fails**

Run:

```powershell
npm test -- test/state-store.test.js
```

Expected: FAIL because database modules do not exist.

- [ ] **Step 3: Add database schema**

Create `src/server/database.js`:

```js
const path = require("node:path");
const { DatabaseSync } = require("node:sqlite");

function applySchema(db) {
  db.pragma("journal_mode = WAL");
  db.exec(`
    create table if not exists apps (
      id text primary key,
      name text not null,
      created_at text not null default (datetime('now'))
    );

    create table if not exists state_snapshots (
      app_id text primary key references apps(id),
      payload text not null,
      version integer not null default 1,
      checksum text not null,
      created_at text not null default (datetime('now')),
      updated_at text not null default (datetime('now'))
    );

    create table if not exists state_history (
      id integer primary key autoincrement,
      app_id text not null references apps(id),
      payload text not null,
      version integer not null,
      checksum text not null,
      archived_at text not null default (datetime('now'))
    );

    create table if not exists demo_seeds (
      id integer primary key autoincrement,
      app_id text not null references apps(id),
      seed_name text not null,
      payload text not null,
      created_at text not null default (datetime('now')),
      unique(app_id, seed_name)
    );

    create table if not exists users (
      id text primary key,
      email text not null unique,
      display_name text not null,
      role text not null,
      password_hash text not null,
      app_access text not null,
      created_at text not null default (datetime('now'))
    );

    create table if not exists sessions (
      token text primary key,
      user_id text not null references users(id),
      created_at text not null default (datetime('now')),
      expires_at text not null
    );
  `);
}

function createDatabase(filePath) {
  const dbPath = filePath === ":memory:" ? filePath : path.resolve(filePath);
  const db = new DatabaseSync(dbPath);
  applySchema(db);
  return db;
}

module.exports = { createDatabase, applySchema };
```

- [ ] **Step 4: Add state store**

Create `src/server/state-store.js`:

```js
const crypto = require("node:crypto");

function checksum(payload) {
  return crypto.createHash("sha256").update(payload).digest("hex");
}

function createStateStore(db) {
  const ensureApp = db.prepare(`
    insert into apps (id, name)
    values (?, ?)
    on conflict(id) do nothing
  `);

  const loadSnapshot = db.prepare("select payload from state_snapshots where app_id = ?");
  const loadFullSnapshot = db.prepare("select payload, version, checksum from state_snapshots where app_id = ?");
  const insertHistory = db.prepare(`
    insert into state_history (app_id, payload, version, checksum)
    values (@app_id, @payload, @version, @checksum)
  `);
  const upsertSnapshot = db.prepare(`
    insert into state_snapshots (app_id, payload, version, checksum)
    values (@app_id, @payload, @version, @checksum)
    on conflict(app_id) do update set
      payload = excluded.payload,
      version = excluded.version,
      checksum = excluded.checksum,
      updated_at = datetime('now')
  `);

  const saveTransaction = db.transaction((appId, payload) => {
    ensureApp.run(appId, appId);
    const serialized = JSON.stringify(payload || {});
    const current = loadFullSnapshot.get(appId);
    const nextVersion = current ? current.version + 1 : 1;

    if (current) {
      insertHistory.run({
        app_id: appId,
        payload: current.payload,
        version: current.version,
        checksum: current.checksum,
      });
    }

    upsertSnapshot.run({
      app_id: appId,
      payload: serialized,
      version: nextVersion,
      checksum: checksum(serialized),
    });
  });

  function loadState(appId) {
    const row = loadSnapshot.get(appId);
    return row ? JSON.parse(row.payload) : {};
  }

  function saveState(appId, payload) {
    saveTransaction(appId, payload || {});
  }

  return { loadState, saveState };
}

module.exports = { createStateStore };
```

- [ ] **Step 5: Add database init script**

Create `scripts/init-db.js`:

```js
const path = require("node:path");
const { createDatabase } = require("../src/server/database");

const dbPath = path.join(__dirname, "..", "data", "brasa-product.sqlite");
const db = createDatabase(dbPath);
db.close();
console.log(`Base de datos lista: ${dbPath}`);
```

- [ ] **Step 6: Add seed script**

Create `scripts/seed-demo-state.js`:

```js
const fs = require("node:fs");
const path = require("node:path");
const { createDatabase } = require("../src/server/database");
const { createStateStore } = require("../src/server/state-store");

const root = path.join(__dirname, "..");
const db = createDatabase(path.join(root, "data", "brasa-product.sqlite"));
const store = createStateStore(db);

const apps = [
  { id: "brasaflow", file: path.join(root, "data", "app-state.json") },
  { id: "brasareservas", file: path.join(root, "BrasaReservas - Reservas Hosteleria", "data", "app-state.json") },
  { id: "brasacomandas", file: path.join(root, "BrasaComandas - Comandas Hosteleria", "data", "app-state.json") },
  { id: "brasaconnect", file: path.join(root, "BrasaConnect - Proveedores Hosteleria", "data", "app-state.json") },
];

for (const app of apps) {
  const payload = fs.existsSync(app.file) ? JSON.parse(fs.readFileSync(app.file, "utf8") || "{}") : {};
  store.saveState(app.id, payload);
  console.log(`Seed cargado: ${app.id}`);
}

db.close();
```

- [ ] **Step 7: Run tests**

Run:

```powershell
npm test -- test/state-store.test.js
```

Expected: PASS.

---

### Task 5: Shared App Server And App Migration

**Files:**
- Create: `src/server/app-server.js`
- Modify: `server.js`
- Modify: `BrasaReservas - Reservas Hosteleria/server.js`
- Modify: `BrasaComandas - Comandas Hosteleria/server.js`
- Modify: `BrasaConnect - Proveedores Hosteleria/server.js`

- [ ] **Step 1: Add shared app server**

Create `src/server/app-server.js`:

```js
const http = require("node:http");
const path = require("node:path");
const { createDatabase } = require("./database");
const { readJsonBody } = require("./json-body");
const { sendStaticFile } = require("./static-files");
const { createStateStore } = require("./state-store");

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function createAppServer(options) {
  const appId = options.appId;
  const appName = options.appName;
  const root = options.root;
  const dbPath = options.dbPath || path.join(__dirname, "..", "..", "data", "brasa-product.sqlite");
  const port = options.port;
  const host = options.host || "127.0.0.1";
  const db = createDatabase(dbPath);
  const stateStore = createStateStore(db);

  const server = http.createServer(async (req, res) => {
    if (req.url === "/api/state" && req.method === "GET") {
      try {
        sendJson(res, 200, stateStore.loadState(appId));
      } catch {
        sendJson(res, 500, { error: "state_read_failed", message: "No se pudo leer el estado." });
      }
      return;
    }

    if (req.url === "/api/state" && req.method === "PUT") {
      try {
        const payload = await readJsonBody(req, { limitBytes: 1024 * 1024 });
        stateStore.saveState(appId, payload);
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

    sendStaticFile(root, req, res);
  });

  server.listen(port, host, () => {
    console.log(`${appName} disponible en http://${host}:${port}`);
  });

  return server;
}

module.exports = { createAppServer };
```

- [ ] **Step 2: Replace root server**

Replace `server.js` with:

```js
const { createAppServer } = require("./src/server/app-server");

createAppServer({
  appId: "brasaflow",
  appName: "BrasaFlow",
  root: __dirname,
  port: 4173,
});
```

- [ ] **Step 3: Replace BrasaReservas server**

Replace `BrasaReservas - Reservas Hosteleria/server.js` with:

```js
const path = require("node:path");
const { createAppServer } = require("../src/server/app-server");

createAppServer({
  appId: "brasareservas",
  appName: "BrasaReservas",
  root: __dirname,
  dbPath: path.join(__dirname, "..", "data", "brasa-product.sqlite"),
  port: 4290,
});
```

- [ ] **Step 4: Replace BrasaComandas server**

Replace `BrasaComandas - Comandas Hosteleria/server.js` with:

```js
const path = require("node:path");
const { createAppServer } = require("../src/server/app-server");

createAppServer({
  appId: "brasacomandas",
  appName: "BrasaComandas",
  root: __dirname,
  dbPath: path.join(__dirname, "..", "data", "brasa-product.sqlite"),
  port: 4300,
});
```

- [ ] **Step 5: Replace BrasaConnect server**

Replace `BrasaConnect - Proveedores Hosteleria/server.js` with:

```js
const path = require("node:path");
const { createAppServer } = require("../src/server/app-server");

createAppServer({
  appId: "brasaconnect",
  appName: "BrasaConnect",
  root: __dirname,
  dbPath: path.join(__dirname, "..", "data", "brasa-product.sqlite"),
  port: 4280,
});
```

- [ ] **Step 6: Verify syntax**

Run:

```powershell
node --check server.js
node --check "BrasaReservas - Reservas Hosteleria/server.js"
node --check "BrasaComandas - Comandas Hosteleria/server.js"
node --check "BrasaConnect - Proveedores Hosteleria/server.js"
```

Expected: no syntax errors.

---

### Task 6: Shared Escape And Public Reservation Validation

**Files:**
- Create: `src/server/escape.js`
- Create: `src/validation/public-reservation.js`
- Create: `test/escape.test.js`
- Create: `test/public-reservation.test.js`
- Modify: `BrasaReservas - Reservas Hosteleria/reserva-publica.js`

- [ ] **Step 1: Write escape tests**

Create `test/escape.test.js`:

```js
const assert = require("node:assert");
const test = require("node:test");
const { escapeHtml, escapeAttribute } = require("../src/server/escape");

test("escapeHtml escapes text node characters", () => {
  assert.equal(escapeHtml("<b>&</b>"), "&lt;b&gt;&amp;&lt;/b&gt;");
});

test("escapeAttribute escapes quotes", () => {
  assert.equal(escapeAttribute(`bad\" onclick='x'`), "bad&quot; onclick=&#39;x&#39;");
});
```

- [ ] **Step 2: Write public reservation tests**

Create `test/public-reservation.test.js`:

```js
const assert = require("node:assert");
const test = require("node:test");
const { validatePublicReservation } = require("../src/validation/public-reservation");

test("valid reservation passes", () => {
  const result = validatePublicReservation({
    clientName: "Marta",
    phone: "600111222",
    date: "2026-06-02",
    time: "21:30",
    people: 2,
    service: "Cena",
    note: "Terraza",
  });
  assert.equal(result.valid, true);
});

test("missing name fails", () => {
  const result = validatePublicReservation({ clientName: "", phone: "600111222", date: "2026-06-02", time: "21:30", people: 2 });
  assert.equal(result.valid, false);
  assert.equal(result.errors.clientName, "Indica tu nombre.");
});

test("invalid people count fails", () => {
  const result = validatePublicReservation({ clientName: "Marta", phone: "600111222", date: "2026-06-02", time: "21:30", people: 30 });
  assert.equal(result.valid, false);
  assert.equal(result.errors.people, "El numero de personas debe estar entre 1 y 20.");
});
```

- [ ] **Step 3: Add escape helper**

Create `src/server/escape.js`:

```js
function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value)
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

module.exports = { escapeHtml, escapeAttribute };
```

- [ ] **Step 4: Add public reservation validation**

Create `src/validation/public-reservation.js`:

```js
function validatePublicReservation(input) {
  const errors = {};
  const people = Number(input.people || 0);

  if (!String(input.clientName || "").trim()) errors.clientName = "Indica tu nombre.";
  if (!String(input.phone || "").trim()) errors.phone = "Indica un telefono de contacto.";
  if (!String(input.date || "").trim()) errors.date = "Elige una fecha.";
  if (!String(input.time || "").trim()) errors.time = "Elige una hora.";
  if (!Number.isFinite(people) || people < 1 || people > 20) {
    errors.people = "El numero de personas debe estar entre 1 y 20.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

module.exports = { validatePublicReservation };
```

- [ ] **Step 5: Run validation tests**

Run:

```powershell
npm test -- test/escape.test.js test/public-reservation.test.js
```

Expected: PASS.

- [ ] **Step 6: Mirror validation in public booking page**

Modify `BrasaReservas - Reservas Hosteleria/reserva-publica.js` to add browser-local validation equivalent to `validatePublicReservation`. On submit, validate `clientName`, `phone`, `date`, `time`, and `people` before creating a reservation. Show one inline error summary above the submit button instead of saving invalid input.

---

### Task 7: Frontend Safety Pass

**Files:**
- Modify: `app.js`
- Modify: `BrasaReservas - Reservas Hosteleria/app.js`
- Modify: `BrasaComandas - Comandas Hosteleria/app.js`
- Modify: `BrasaConnect - Proveedores Hosteleria/app.js`

- [ ] **Step 1: Update escape helpers**

In each app, make sure:

```js
function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttribute(value) {
  return escapeHtml(value)
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
```

- [ ] **Step 2: Replace attribute escapes**

In generated HTML attributes, use `escapeAttribute(...)` instead of `escapeHtml(...)`. Required targets include:

- `<option value="...">`
- `data-*="..."`
- `value="..."`
- dynamic input hint attributes when they are generated from data

- [ ] **Step 3: Verify syntax**

Run:

```powershell
node --check app.js
node --check "BrasaReservas - Reservas Hosteleria/app.js"
node --check "BrasaReservas - Reservas Hosteleria/reserva-publica.js"
node --check "BrasaComandas - Comandas Hosteleria/app.js"
node --check "BrasaConnect - Proveedores Hosteleria/app.js"
```

Expected: no syntax errors.

---

### Task 8: Documentation And Smoke Verification

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Update README app entry points**

Update `README.md` so it distinguishes:

- Ecosystem landing: `http://127.0.0.1:4173/index.html`
- BrasaFlow app demo: `http://127.0.0.1:4173/demo.html`
- SQLite setup: `npm install`, `npm run db:init`, `npm run db:seed`
- Test command: `npm test`

- [ ] **Step 2: Run full tests**

Run:

```powershell
npm test
```

Expected: PASS.

- [ ] **Step 3: Run database setup**

Run:

```powershell
npm run db:init
npm run db:seed
```

Expected: database is created at `data/brasa-product.sqlite` and all four app ids are seeded.

- [ ] **Step 4: Run syntax check for all JS**

Run:

```powershell
Get-ChildItem -Recurse -File -Filter *.js | Where-Object { $_.FullName -notmatch "\\node_modules\\" } | ForEach-Object { node --check $_.FullName }
```

Expected: no syntax errors.

- [ ] **Step 5: Manual app smoke**

Start each app one at a time:

```powershell
npm run start:flow
npm run start:reservas
npm run start:comandas
npm run start:connect
```

Expected:

- BrasaFlow opens at `http://127.0.0.1:4173/demo.html`.
- BrasaReservas opens at `http://127.0.0.1:4290/index.html`.
- BrasaComandas opens at `http://127.0.0.1:4300/index.html`.
- BrasaConnect opens at `http://127.0.0.1:4280/index.html`.
- Each app loads without console errors.
- A state-changing action persists after reload.

---

## Self-Review

- Spec coverage: the plan covers root project setup, SQLite storage, shared server, safer static serving, request limits, demo seeding, public reservation validation, escaping, documentation, and tests.
- Completeness scan: every task has concrete files, commands, and expected results.
- Type consistency: app ids match the design: `brasaflow`, `brasareservas`, `brasacomandas`, `brasaconnect`.
- Scope check: relational product tables and full authentication remain intentionally outside this first implementation plan.
