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
  db.close();
});

test("state store creates history when replacing state", () => {
  const db = createDatabase(":memory:");
  const store = createStateStore(db);

  store.saveState("brasaflow", { version: 1 });
  store.saveState("brasaflow", { version: 2 });

  const history = db.prepare("select app_id, payload from state_history where app_id = ?").all("brasaflow");
  assert.equal(history.length, 1);
  assert.deepEqual(JSON.parse(history[0].payload), { version: 1 });
  db.close();
});

test("state store returns empty object when app has no state", () => {
  const db = createDatabase(":memory:");
  const store = createStateStore(db);

  assert.deepEqual(store.loadState("unknown"), {});
  db.close();
});
