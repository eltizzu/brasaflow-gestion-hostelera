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
    let rejected = false;

    req.on("data", (chunk) => {
      totalBytes += chunk.length;
      if (totalBytes > limitBytes) {
        rejected = true;
        reject(createBodyError("payload_too_large", "El estado enviado es demasiado grande."));
        req.destroy();
        return;
      }
      body += chunk;
    });

    req.on("end", () => {
      if (rejected) return;
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(createBodyError("invalid_json", "El estado enviado no es valido."));
      }
    });

    req.on("error", () => {
      if (!rejected) {
        reject(createBodyError("request_error", "No se pudo leer la solicitud."));
      }
    });
  });
}

module.exports = { readJsonBody };
