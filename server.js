const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 4173;
const root = __dirname;
const dataDir = path.join(root, "data");
const stateFile = path.join(dataDir, "app-state.json");

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

function ensureStateFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(stateFile)) {
    fs.writeFileSync(stateFile, "{}", "utf8");
  }
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function readState() {
  ensureStateFile();
  return fs.readFileSync(stateFile, "utf8");
}

function writeState(body) {
  ensureStateFile();
  fs.writeFileSync(stateFile, body, "utf8");
}

const server = http.createServer((req, res) => {
  if (req.url === "/api/state" && req.method === "GET") {
    try {
      const rawState = readState();
      sendJson(res, 200, JSON.parse(rawState || "{}"));
    } catch (error) {
      sendJson(res, 500, { error: "No se pudo leer el estado." });
    }
    return;
  }

  if (req.url === "/api/state" && req.method === "PUT") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        JSON.parse(body || "{}");
        writeState(body || "{}");
        sendJson(res, 200, { ok: true });
      } catch (error) {
        sendJson(res, 400, { error: "Estado invalido." });
      }
    });
    return;
  }

  const requestedPath = req.url === "/" ? "/index.html" : req.url;
  const safePath = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath);

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("No encontrado");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": contentTypes[ext] || "application/octet-stream",
    });
    res.end(data);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`BrasaFlow disponible en http://127.0.0.1:${port}`);
});
