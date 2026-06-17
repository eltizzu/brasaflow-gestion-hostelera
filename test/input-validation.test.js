const assert = require("node:assert");
const test = require("node:test");
const {
  sanitizeText,
  validateEmail,
  validateNumber,
  validateStatePayload,
} = require("../src/validation/input");

test("sanitizeText trims harmless text and rejects html", () => {
  assert.equal(sanitizeText("  Mesa tranquila  ", { field: "note" }).value, "Mesa tranquila");

  const result = sanitizeText("<script>alert(1)</script>", { field: "note" });
  assert.equal(result.valid, false);
  assert.equal(result.error, "No incluyas HTML ni scripts.");
});

test("sanitizeText rejects text over the configured max length", () => {
  const result = sanitizeText("a".repeat(11), { field: "note", maxLength: 10 });

  assert.equal(result.valid, false);
  assert.equal(result.error, "Maximo 10 caracteres.");
});

test("validateEmail requires a basic email format and rejects html", () => {
  assert.equal(validateEmail("persona@example.com", { field: "email" }).valid, true);
  assert.equal(validateEmail("persona-example.com", { field: "email" }).valid, false);
  assert.equal(validateEmail("<b>x@example.com</b>", { field: "email" }).valid, false);
});

test("validateNumber requires numeric finite values inside range", () => {
  assert.equal(validateNumber("3.5", { field: "value", min: 0, max: 10 }).value, 3.5);
  assert.equal(validateNumber("abc", { field: "value" }).valid, false);
  assert.equal(validateNumber("11", { field: "value", max: 10 }).valid, false);
});

test("validateStatePayload rejects nested html before saving state", () => {
  const result = validateStatePayload({
    business: { name: "La Terraza" },
    clients: [{ name: "<img src=x onerror=alert(1)>", visits: 1 }],
  });

  assert.equal(result.valid, false);
  assert.equal(result.errors["clients.0.name"], "No incluyas HTML ni scripts.");
});

test("validateStatePayload returns a sanitized copy for safe nested strings", () => {
  const result = validateStatePayload({
    business: { name: "  La Terraza  " },
    notes: ["\u0000Sin incidencias  "],
  });

  assert.equal(result.valid, true);
  assert.deepEqual(result.value, {
    business: { name: "La Terraza" },
    notes: ["Sin incidencias"],
  });
});
