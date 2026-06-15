const fs = require("node:fs");
const path = require("node:path");
const { DatabaseSync } = require("node:sqlite");

function applySchema(db) {
  db.exec(`
    pragma journal_mode = WAL;

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
  if (dbPath !== ":memory:") {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  }
  const db = new DatabaseSync(dbPath);
  applySchema(db);
  return db;
}

module.exports = { createDatabase, applySchema };
