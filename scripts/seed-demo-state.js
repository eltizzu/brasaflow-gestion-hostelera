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
