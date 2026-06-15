const assert = require("node:assert");
const test = require("node:test");
const path = require("node:path");
const { resolveStaticPath } = require("../src/server/static-files");

test("resolveStaticPath serves index for root", () => {
  const root = path.join("C:", "demo", "app");
  const result = resolveStaticPath(root, "/");
  assert.equal(result, path.join(root, "index.html"));
});

test("resolveStaticPath strips query strings", () => {
  const root = path.join("C:", "demo", "app");
  const result = resolveStaticPath(root, "/styles.css?v=1");
  assert.equal(result, path.join(root, "styles.css"));
});

test("resolveStaticPath rejects traversal outside root", () => {
  const root = path.join("C:", "demo", "app");
  assert.throws(() => resolveStaticPath(root, "/../../Windows/win.ini"), /outside app root/);
});

test("resolveStaticPath rejects encoded traversal outside root", () => {
  const root = path.join("C:", "demo", "app");
  assert.throws(() => resolveStaticPath(root, "/%2e%2e/%2e%2e/Windows/win.ini"), /outside app root/);
});
