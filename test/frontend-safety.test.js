const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

function readProjectFile(relativePath) {
  return fs.readFileSync(path.join(__dirname, "..", relativePath), "utf8");
}

test("BrasaFlow escapes user-controlled values before rendering them into HTML", () => {
  const source = readProjectFile("app.js");
  const unsafeSnippets = [
    "<strong>${chat.author}</strong>",
    "<p>${chat.message}</p>",
    "<td>${item.name}</td>",
    "<span class=\"employee-name\">${employee.name}</span>",
    "<td><small>${shift.note}",
  ];

  for (const snippet of unsafeSnippets) {
    assert.equal(source.includes(snippet), false, `Unsafe interpolation remains: ${snippet}`);
  }

  assert.equal(source.includes("<strong>${escapeHtml(chat.author)}</strong>"), true);
  assert.equal(source.includes("<p>${escapeHtml(chat.message)}</p>"), true);
});

test("BrasaFlow does not keep demo passwords or verify login in the browser", () => {
  const source = readProjectFile("app.js");

  assert.equal(source.includes('password: "1234"'), false);
  assert.equal(source.includes("/ 1234"), false);
  assert.equal(source.includes("item.password === password"), false);
  assert.equal(source.includes('fetch("/api/session"'), true);
});

test("public reservation page no longer writes the complete app state snapshot", () => {
  const source = readProjectFile("BrasaReservas - Reservas Hosteleria/reserva-publica.js");

  assert.equal(source.includes('fetch("/api/state", {'), false);
  assert.equal(source.includes('fetch("/api/public/reservations", {'), true);
});

test("BrasaReservas escapes customer and table data before rendering into HTML", () => {
  const source = readProjectFile("BrasaReservas - Reservas Hosteleria/app.js");
  const unsafeSnippets = [
    '${client ? `${client.name} · ${reservation.time}` : "Sin reserva activa"}',
    '<button class="action-btn secondary" data-client="${reservation.clientId}" data-section-target="clients">Ver cliente</button>',
    '<button class="action-btn secondary" data-action="select-client" data-client="${client.id}">Ver ficha</button>',
    '<option value="${table.id}">${escapeHtml(table.name)}',
  ];

  for (const snippet of unsafeSnippets) {
    assert.equal(source.includes(snippet), false, `Unsafe Reservas interpolation remains: ${snippet}`);
  }

  assert.equal(source.includes("escapeHtml(client.name)"), true);
  assert.equal(source.includes("escapeAttribute(reservation.clientId)"), true);
});

test("BrasaComandas escapes order and table data before rendering into HTML", () => {
  const source = readProjectFile("BrasaComandas - Comandas Hosteleria/app.js");
  const unsafeSnippets = [
    '<article class="table-card ${table.status.toLowerCase()} ${table.id === appState.ui.activeTableId ? "selected" : ""}">',
    '<strong>${table.guests ? `${table.guests} personas` : "Sin clientes"}</strong>',
    '<small>Enviado: ${item.sentAt || "sin enviar"} · ${escapeHtml(order.waiter)}</small>',
    '<button class="chip-btn" data-action="select-table" data-table-id="${table.id}">Ver</button>',
  ];

  for (const snippet of unsafeSnippets) {
    assert.equal(source.includes(snippet), false, `Unsafe Comandas interpolation remains: ${snippet}`);
  }

  assert.equal(source.includes("escapeHtml(table.status).toLowerCase()"), true);
  assert.equal(source.includes("escapeAttribute(table.id)"), true);
  assert.equal(source.includes("escapeHtml(item.sentAt || \"sin enviar\")"), true);
});

test("BrasaConnect escapes supplier, product and order identifiers before rendering into HTML", () => {
  const source = readProjectFile("BrasaConnect - Proveedores Hosteleria/app.js");
  const unsafeSnippets = [
    '<button class="action-btn secondary" data-supplier="${supplier.id}" data-section-target="catalog">Ver catalogo</button>',
    '<button class="action-btn primary" data-action="quick-order" data-product="${item.id}" ${item.available ? "" : "disabled"}>Crear pedido</button>',
    'const itemSummary = order.items.map((item) => `${item.quantity} x ${item.name}`).join(", ");',
    '<button class="action-btn secondary" data-action="select-order" data-order="${order.id}">Ver detalle</button>',
  ];

  for (const snippet of unsafeSnippets) {
    assert.equal(source.includes(snippet), false, `Unsafe Connect interpolation remains: ${snippet}`);
  }

  assert.equal(source.includes("escapeHtml(item.name)"), true);
  assert.equal(source.includes("escapeAttribute(order.id)"), true);
  assert.equal(source.includes("escapeAttribute(supplier.id)"), true);
});
