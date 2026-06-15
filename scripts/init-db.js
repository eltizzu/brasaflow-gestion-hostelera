const path = require("node:path");
const { createDatabase } = require("../src/server/database");

const dbPath = path.join(__dirname, "..", "data", "brasa-product.sqlite");
const db = createDatabase(dbPath);

db.close();
console.log(`Base de datos lista: ${dbPath}`);
