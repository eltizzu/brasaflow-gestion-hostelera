const assert = require("node:assert");
const { Readable } = require("node:stream");
const test = require("node:test");
const { readJsonBody } = require("../src/server/json-body");

function requestFromChunks(chunks) {
  const req = Readable.from(chunks);
  req.method = "PUT";
  return req;
}

test("readJsonBody parses valid JSON", async () => {
  const payload = await readJsonBody(requestFromChunks(['{"ok":true}']), { limitBytes: 100 });
  assert.deepEqual(payload, { ok: true });
});

test("readJsonBody rejects invalid JSON", async () => {
  await assert.rejects(
    () => readJsonBody(requestFromChunks(["{bad"]), { limitBytes: 100 }),
    /invalid_json/
  );
});

test("readJsonBody rejects oversized payload", async () => {
  await assert.rejects(
    () => readJsonBody(requestFromChunks(['{"value":"too-large"}']), { limitBytes: 5 }),
    /payload_too_large/
  );
});
