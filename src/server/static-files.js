const fs = require("node:fs");
const path = require("node:path");
const { getContentType } = require("./content-types");

function decodeRequestPath(rawUrl) {
  const pathname = String(rawUrl || "/").split("?")[0] || "/";
  return decodeURIComponent(pathname === "/" ? "/index.html" : pathname);
}

function resolveStaticPath(root, rawUrl) {
  const absoluteRoot = path.resolve(root);
  const decodedPath = decodeRequestPath(rawUrl);
  const pathParts = decodedPath.split(/[\\/]+/);
  if (pathParts.includes("..")) {
    throw new Error("Requested path is outside app root");
  }
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
