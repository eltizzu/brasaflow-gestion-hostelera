const path = require("node:path");
const { createAppServer } = require("../src/server/app-server");

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Falta configurar la variable de entorno ${name}.`);
  }
  return value;
}

createAppServer({
  appId: "brasaconnect",
  appName: "BrasaConnect",
  root: __dirname,
  dbPath: path.join(__dirname, "..", "data", "brasa-product.sqlite"),
  port: 4280,
  stateWriteToken: requiredEnv("BRASA_STATE_WRITE_TOKEN"),
});
