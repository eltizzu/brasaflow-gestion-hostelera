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
    values (?, ?, ?, ?)
  `);
  const upsertSnapshot = db.prepare(`
    insert into state_snapshots (app_id, payload, version, checksum)
    values (?, ?, ?, ?)
    on conflict(app_id) do update set
      payload = excluded.payload,
      version = excluded.version,
      checksum = excluded.checksum,
      updated_at = datetime('now')
  `);

  function loadState(appId) {
    const row = loadSnapshot.get(appId);
    return row ? JSON.parse(row.payload) : {};
  }

  function saveState(appId, payload) {
    const serialized = JSON.stringify(payload || {});
    const current = loadFullSnapshot.get(appId);
    const nextVersion = current ? current.version + 1 : 1;
    const nextChecksum = checksum(serialized);

    db.exec("begin immediate transaction");
    try {
      ensureApp.run(appId, appId);
      if (current) {
        insertHistory.run(appId, current.payload, current.version, current.checksum);
      }
      upsertSnapshot.run(appId, serialized, nextVersion, nextChecksum);
      db.exec("commit");
    } catch (error) {
      db.exec("rollback");
      throw error;
    }
  }

  return { loadState, saveState };
}

module.exports = { createStateStore };
