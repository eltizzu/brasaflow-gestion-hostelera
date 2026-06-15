const assert = require("node:assert");
const test = require("node:test");
const { validatePublicReservation } = require("../src/validation/public-reservation");

test("valid reservation passes", () => {
  const result = validatePublicReservation({
    clientName: "Marta",
    phone: "600111222",
    date: "2026-06-02",
    time: "21:30",
    people: 2,
    service: "Cena",
    note: "Terraza",
  });
  assert.equal(result.valid, true);
});

test("missing name fails", () => {
  const result = validatePublicReservation({
    clientName: "",
    phone: "600111222",
    date: "2026-06-02",
    time: "21:30",
    people: 2,
  });
  assert.equal(result.valid, false);
  assert.equal(result.errors.clientName, "Indica tu nombre.");
});

test("invalid people count fails", () => {
  const result = validatePublicReservation({
    clientName: "Marta",
    phone: "600111222",
    date: "2026-06-02",
    time: "21:30",
    people: 30,
  });
  assert.equal(result.valid, false);
  assert.equal(result.errors.people, "El numero de personas debe estar entre 1 y 20.");
});
