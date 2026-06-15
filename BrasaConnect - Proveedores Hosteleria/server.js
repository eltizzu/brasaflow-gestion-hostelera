const path = require("node:path");
const { createAppServer } = require("../src/server/app-server");

createAppServer({
  appId: "brasaconnect",
  appName: "BrasaConnect",
  root: __dirname,
  dbPath: path.join(__dirname, "..", "data", "brasa-product.sqlite"),
  port: 4280,
  stateWriteToken: "brasa-local-demo-write",
});
