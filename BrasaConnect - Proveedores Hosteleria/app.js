const defaultState = {
  ui: {
    currentView: "business",
    currentSection: "dashboard",
    activeSupplierId: "sup-1",
    activeOrderId: "ord-1",
    activeCategory: "Todos",
  },
  business: {
    id: "biz-1",
    name: "La Terraza Central",
    city: "Madrid",
    type: "Restaurante",
    categories: ["Bebidas", "Pescado", "Verduras", "Limpieza"],
  },
  supplierAccount: {
    id: "sup-1",
    name: "Distribuciones Sur",
    category: "Bebidas y aceites",
    city: "Madrid",
  },
  suppliers: [
    {
      id: "sup-1",
      name: "Distribuciones Sur",
      category: "Bebidas y aceites",
      city: "Madrid",
      zone: "Madrid centro y sur",
      deliveryDays: "Lunes, miercoles y viernes",
      minimumOrder: "120 EUR",
      connected: true,
      rating: "Habitual",
      description: "Proveedor habitual de aceite, bebidas base y productos de almacen.",
    },
    {
      id: "sup-2",
      name: "Mar Atlantico",
      category: "Pescado y marisco",
      city: "Madrid",
      zone: "Comunidad de Madrid",
      deliveryDays: "Martes a sabado",
      minimumOrder: "180 EUR",
      connected: true,
      rating: "Conectado",
      description: "Pescado fresco, marisco y producto de lonja para cocina.",
    },
    {
      id: "sup-3",
      name: "Huerta Viva",
      category: "Verduras y fruta",
      city: "Madrid",
      zone: "Madrid y alrededores",
      deliveryDays: "Diario",
      minimumOrder: "90 EUR",
      connected: false,
      rating: "Nuevo",
      description: "Verdura de temporada, fruta y producto local para restaurantes.",
    },
    {
      id: "sup-4",
      name: "Limpieza ProHostel",
      category: "Limpieza",
      city: "Madrid",
      zone: "Madrid capital",
      deliveryDays: "Lunes y jueves",
      minimumOrder: "75 EUR",
      connected: false,
      rating: "Disponible",
      description: "Quimicos, papel, guantes y productos de limpieza profesional.",
    },
  ],
  catalog: [
    { id: "cat-1", supplierId: "sup-1", name: "Aceite oliva suave", category: "Aceites", format: "Garrafa 5 L", price: 31.5, available: true },
    { id: "cat-2", supplierId: "sup-1", name: "Tonica premium", category: "Bebidas", format: "Caja 24 botellas", price: 22.8, available: true },
    { id: "cat-3", supplierId: "sup-1", name: "Agua con gas", category: "Bebidas", format: "Caja 24 unidades", price: 14.2, available: true },
    { id: "cat-4", supplierId: "sup-2", name: "Lubina fresca", category: "Pescado", format: "Kg", price: 13.9, available: true },
    { id: "cat-5", supplierId: "sup-2", name: "Gamba blanca", category: "Marisco", format: "Kg", price: 24.5, available: false },
    { id: "cat-6", supplierId: "sup-3", name: "Tomate ensalada", category: "Verduras", format: "Caja 8 kg", price: 18.4, available: true },
    { id: "cat-7", supplierId: "sup-4", name: "Desengrasante cocina", category: "Limpieza", format: "Caja 4 x 5 L", price: 39.9, available: true },
  ],
  orders: [
    {
      id: "ord-1",
      supplierId: "sup-1",
      businessId: "biz-1",
      status: "Confirmado",
      createdAt: "2026-05-18",
      deliveryDate: "2026-05-20",
      total: 148.8,
      items: [
        { productId: "cat-1", name: "Aceite oliva suave", quantity: 4, format: "Garrafa 5 L", price: 31.5 },
        { productId: "cat-2", name: "Tonica premium", quantity: 1, format: "Caja 24 botellas", price: 22.8 },
      ],
      note: "Prioridad para servicio del viernes.",
      deliveryNoteId: "dn-1",
      incident: "",
      history: [
        { label: "Pedido creado", date: "2026-05-18", detail: "La Terraza Central envio el pedido desde catalogo." },
        { label: "Confirmado", date: "2026-05-18", detail: "Distribuciones Sur confirmo cantidades y entrega." },
      ],
    },
    {
      id: "ord-2",
      supplierId: "sup-2",
      businessId: "biz-1",
      status: "En reparto",
      createdAt: "2026-05-17",
      deliveryDate: "2026-05-19",
      total: 139,
      items: [
        { productId: "cat-4", name: "Lubina fresca", quantity: 10, format: "Kg", price: 13.9 },
      ],
      note: "Entregar antes de las 11:00.",
      deliveryNoteId: "",
      incident: "",
      history: [
        { label: "Pedido creado", date: "2026-05-17", detail: "Pedido enviado a Mar Atlantico." },
        { label: "En reparto", date: "2026-05-19", detail: "El proveedor marco salida de reparto." },
      ],
    },
    {
      id: "ord-3",
      supplierId: "sup-1",
      businessId: "biz-1",
      status: "Recibido con incidencia",
      createdAt: "2026-05-10",
      deliveryDate: "2026-05-11",
      total: 91.2,
      items: [
        { productId: "cat-2", name: "Tonica premium", quantity: 4, format: "Caja 24 botellas", price: 22.8 },
      ],
      note: "Pedido repetido de fin de semana.",
      deliveryNoteId: "dn-2",
      incident: "Llegaron 3 cajas en vez de 4. Pendiente abono o reposicion.",
      history: [
        { label: "Pedido creado", date: "2026-05-10", detail: "Pedido repetido desde historial." },
        { label: "Recibido con incidencia", date: "2026-05-11", detail: "El negocio marco diferencia en recepcion." },
      ],
    },
  ],
  deliveryNotes: [
    {
      id: "dn-1",
      orderId: "ord-1",
      supplierId: "sup-1",
      number: "ALB-2026-1842",
      date: "2026-05-18",
      status: "Pendiente de recepcion",
      summary: "Aceite y tonica. Pendiente confirmar recepcion.",
    },
    {
      id: "dn-2",
      orderId: "ord-3",
      supplierId: "sup-1",
      number: "ALB-2026-1760",
      date: "2026-05-11",
      status: "Con incidencia",
      summary: "Diferencia de una caja de tonica.",
    },
  ],
  connections: [
    { supplierId: "sup-1", status: "Proveedor habitual", lastOrder: "2026-05-18" },
    { supplierId: "sup-2", status: "Conectado", lastOrder: "2026-05-17" },
  ],
};

let appState = structuredClone(defaultState);
let saveTimer = null;
const STORAGE_KEY = "brasaconnect-demo-state";
const STATE_WRITE_TOKEN = "brasa-local-demo-write";

const viewCopy = {
  business: {
    kicker: "Perfil restaurante",
    title: "Encuentra proveedores y repite pedidos sin perder historial",
    description: "El restaurante ve perfiles, catalogos, pedidos anteriores, albaranes e incidencias en un mismo lugar.",
    entity: "La Terraza Central",
  },
  supplier: {
    kicker: "Perfil proveedor",
    title: "Recibe pedidos mas ordenados de tus clientes",
    description: "El proveedor mantiene su catalogo, recibe pedidos, actualiza estados y registra albaranes.",
    entity: "Distribuciones Sur",
  },
  network: {
    kicker: "Marketplace de hosteleria",
    title: "Una red para descubrir y conectar proveedores",
    description: "El marketplace permite buscar proveedores, ver perfiles, revisar catalogos y solicitar conexion.",
    entity: "Red BrasaConnect",
  },
};

const visibleSectionsByView = {
  business: ["dashboard", "suppliers", "catalog", "orders", "delivery-notes", "network", "settings"],
  supplier: ["dashboard", "catalog", "orders", "delivery-notes", "settings"],
  network: ["dashboard", "suppliers", "network"],
};

const sectionLabelsByView = {
  business: {
    dashboard: "Inicio",
    suppliers: "Proveedores habituales",
    catalog: "Catalogos",
    orders: "Pedidos",
    "delivery-notes": "Albaranes",
    network: "Explorar marketplace",
    settings: "Perfil restaurante",
  },
  supplier: {
    dashboard: "Inicio",
    catalog: "Mi catalogo",
    orders: "Pedidos recibidos",
    "delivery-notes": "Albaranes enviados",
    settings: "Perfil proveedor",
  },
  network: {
    dashboard: "Inicio",
    suppliers: "Proveedores disponibles",
    network: "Explorar red",
  },
};

function money(value) {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function getSupplier(id) {
  return appState.suppliers.find((supplier) => supplier.id === id);
}

function getActiveSupplier() {
  return getSupplier(appState.ui.activeSupplierId) || appState.suppliers[0];
}

function getActiveOrder() {
  return appState.orders.find((order) => order.id === appState.ui.activeOrderId) || appState.orders[0];
}

function orderTotal(order) {
  return order.items.reduce((sum, item) => sum + (Number(item.price) * Number(item.quantity)), 0);
}

function statusClass(status) {
  if (["Confirmado", "Entregado", "Recibido conforme", "Proveedor habitual", "Conectado"].includes(status)) return "ok";
  if (["Enviado al proveedor", "En preparacion", "En reparto", "Pendiente", "Pendiente de recepcion", "Ajustado por proveedor"].includes(status)) return "warn";
  if (["Recibido con incidencia", "Con incidencia", "Cancelado"].includes(status)) return "danger";
  return "";
}

function renderOptions(items, selectedValue) {
  return items
    .map((item) => `<option value="${escapeAttribute(item.value)}" ${item.value === selectedValue ? "selected" : ""}>${escapeHtml(item.label)}</option>`)
    .join("");
}

async function loadState() {
  try {
    const response = await fetch("/api/state");
    const savedState = await response.json();
    if (savedState && Object.keys(savedState).length) {
      appState = mergeState(structuredClone(defaultState), savedState);
      return;
    }
  } catch (error) {
    try {
      const localState = window.localStorage.getItem(STORAGE_KEY);
      if (localState) {
        appState = mergeState(structuredClone(defaultState), JSON.parse(localState));
        return;
      }
    } catch (localError) {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }

  appState = structuredClone(defaultState);
}

function mergeState(base, saved) {
  return {
    ...base,
    ...saved,
    ui: { ...base.ui, ...(saved.ui || {}) },
    business: { ...base.business, ...(saved.business || {}) },
    supplierAccount: { ...base.supplierAccount, ...(saved.supplierAccount || {}) },
  };
}

function scheduleSave() {
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(async () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (localError) {
      // If browser storage is blocked, the demo still works during the session.
    }

    try {
      await fetch("/api/state", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Brasa-State-Token": STATE_WRITE_TOKEN,
        },
        body: JSON.stringify(appState),
      });
    } catch (error) {
      // Static public demos save locally in the visitor browser.
    }
  }, 250);
}

function renderHero() {
  const copy = viewCopy[appState.ui.currentView];
  document.getElementById("hero-kicker").textContent = copy.kicker;
  document.getElementById("hero-title").textContent = copy.title;
  document.getElementById("hero-description").textContent = copy.description;
  document.getElementById("hero-entity").textContent = copy.entity;
}

function renderNavigation() {
  const visibleSections = new Set(visibleSectionsByView[appState.ui.currentView]);
  const labels = sectionLabelsByView[appState.ui.currentView];
  if (!visibleSections.has(appState.ui.currentSection)) {
    appState.ui.currentSection = "dashboard";
  }

  document.querySelectorAll(".nav-link").forEach((button) => {
    const visible = visibleSections.has(button.dataset.section);
    button.textContent = labels[button.dataset.section] || button.textContent.trim();
    button.hidden = !visible;
    button.classList.toggle("active", button.dataset.section === appState.ui.currentSection);
  });

  document.querySelectorAll(".section-view").forEach((section) => {
    section.classList.toggle("active", section.id === `${appState.ui.currentSection}-section`);
  });

  const mobileSelector = document.getElementById("mobile-section-selector");
  const visibleOptions = Array.from(document.querySelectorAll(".nav-link"))
    .filter((button) => visibleSections.has(button.dataset.section))
    .map((button) => ({ value: button.dataset.section, label: button.textContent.trim() }));
  mobileSelector.innerHTML = renderOptions(visibleOptions, appState.ui.currentSection);
}

function renderDashboard() {
  const connectedCount = appState.suppliers.filter((supplier) => supplier.connected).length;
  const openOrders = appState.orders.filter((order) => !["Recibido conforme", "Recibido con incidencia", "Cancelado"].includes(order.status));
  const notesWithIssues = appState.deliveryNotes.filter((note) => note.status === "Con incidencia").length;
  const catalogCount = appState.catalog.filter((item) => item.available).length;
  const modeText = appState.ui.currentView === "supplier"
    ? "Perfil de proveedor: catalogo, pedidos recibidos, estados y albaranes."
    : appState.ui.currentView === "network"
      ? "Marketplace: busqueda, perfiles y solicitud de conexion."
      : "Perfil restaurante: proveedores conectados, catalogos, pedidos e historial.";

  document.getElementById("dashboard-section").innerHTML = `
    <div class="section-header">
      <div>
        <h3>Inicio</h3>
        <p>${modeText}</p>
      </div>
      <div class="action-row">
        <button class="action-btn primary" data-section-target="orders">Ver pedidos</button>
        <button class="action-btn secondary" data-section-target="network">Explorar red</button>
      </div>
    </div>
    <div class="connect-explainer">
      <article>
        <strong>Que es</strong>
        <span>Una red privada de proveedores para hosteleria. Funciona como marketplace, pero orientado a pedidos reales, historial y albaranes.</span>
      </article>
      <article>
        <strong>Como se prueba</strong>
        <span>Restaurante muestra la compra. Proveedor muestra quien vende. Marketplace muestra la busqueda y conexion entre ambos.</span>
      </article>
      <article>
        <strong>Para que sirve</strong>
        <span>Es la base de la conexion futura con BrasaFlow: pedidos internos pueden terminar en pedidos conectados a proveedores reales.</span>
      </article>
    </div>
    <div class="metrics-grid">
      <article class="metric-card">
        <span class="pill ok">Conectados</span>
        <strong>${connectedCount}</strong>
        <small class="muted">Proveedores habituales o conectados</small>
      </article>
      <article class="metric-card">
        <span class="pill warn">Activos</span>
        <strong>${openOrders.length}</strong>
        <small class="muted">Pedidos todavia en curso</small>
      </article>
      <article class="metric-card">
        <span class="pill ${notesWithIssues ? "danger" : "ok"}">Albaranes</span>
        <strong>${notesWithIssues}</strong>
        <small class="muted">Incidencias pendientes</small>
      </article>
      <article class="metric-card">
        <span class="pill ok">Catalogo</span>
        <strong>${catalogCount}</strong>
        <small class="muted">Productos disponibles</small>
      </article>
    </div>
    ${renderDemoPath()}
    <div class="cards-grid" style="margin-top: 16px;">
      ${renderFlowCard("Restaurante", "Busca proveedor, arma pedido y confirma recepcion.")}
      ${renderFlowCard("Proveedor", "Recibe pedido, confirma estado y sube albaran.")}
      ${renderFlowCard("Historial", "Cada pedido queda guardado con estado, nota e incidencia.")}
    </div>
    <div class="integration-strip">
      <article>
        <span class="pill ok">Con BrasaFlow</span>
        <strong>Inventario y pedidos internos pueden abrir pedidos conectados.</strong>
      </article>
      <article>
        <span class="pill">Con recetas</span>
        <strong>Los albaranes y precios pueden alimentar costes por plato mas adelante.</strong>
      </article>
    </div>
  `;
}

function renderDemoPath() {
  return `
    <div class="demo-path">
      <article>
        <span>1</span>
        <strong>Descubrir</strong>
        <small>El restaurante encuentra proveedor.</small>
      </article>
      <article>
        <span>2</span>
        <strong>Pedir</strong>
        <small>Pedido desde catalogo o historial.</small>
      </article>
      <article>
        <span>3</span>
        <strong>Confirmar</strong>
        <small>Proveedor cambia estado.</small>
      </article>
      <article>
        <span>4</span>
        <strong>Recibir</strong>
        <small>Albaran e incidencia.</small>
      </article>
    </div>
  `;
}

function renderFlowCard(title, text) {
  return `
    <article class="card">
      <span class="pill ok">${escapeHtml(title)}</span>
      <p>${escapeHtml(text)}</p>
    </article>
  `;
}

function renderSuppliers() {
  const suppliers = appState.ui.currentView === "network"
    ? appState.suppliers
    : appState.suppliers.filter((supplier) => supplier.connected);
  document.getElementById("suppliers-section").innerHTML = `
    <div class="section-header">
      <div>
        <h3>${appState.ui.currentView === "network" ? "Explorar proveedores" : "Mis proveedores"}</h3>
        <p>${appState.ui.currentView === "network" ? "Perfiles disponibles para descubrir, comparar y solicitar conexion." : "Proveedores ya conectados con el restaurante."}</p>
      </div>
      <button class="action-btn primary" data-section-target="network">Buscar nuevos</button>
    </div>
    <div class="market-grid">
      ${suppliers.map(renderSupplierCard).join("")}
    </div>
  `;
}

function renderSupplierCard(supplier) {
  return `
    <article class="supplier-card">
      <div class="card-title">
        <h4>${escapeHtml(supplier.name)}</h4>
        <span class="pill ${supplier.connected ? "ok" : ""}">${supplier.connected ? "Conectado" : "Disponible"}</span>
      </div>
      <p class="muted">${escapeHtml(supplier.description)}</p>
      <div class="status-row">
        <span class="pill">${escapeHtml(supplier.category)}</span>
        <span class="pill">${escapeHtml(supplier.city)}</span>
      </div>
      <small class="muted">Zona: ${escapeHtml(supplier.zone)} · Entrega: ${escapeHtml(supplier.deliveryDays)} · Minimo: ${escapeHtml(supplier.minimumOrder)}</small>
      <div class="action-row">
        <button class="action-btn secondary" data-supplier="${escapeAttribute(supplier.id)}" data-section-target="catalog">Ver catalogo</button>
        ${supplier.connected ? `<button class="action-btn primary" data-supplier="${escapeAttribute(supplier.id)}" data-section-target="orders">Hacer pedido</button>` : `<button class="action-btn primary" data-action="connect-supplier" data-supplier="${escapeAttribute(supplier.id)}">Solicitar conexion</button>`}
      </div>
    </article>
  `;
}

function renderCatalog() {
  const activeSupplier = getActiveSupplier();
  const categories = ["Todos", ...new Set(appState.catalog.map((item) => item.category))];
  const supplierCatalog = appState.catalog.filter((item) => item.supplierId === activeSupplier.id);
  const visibleCatalog = appState.ui.activeCategory === "Todos"
    ? supplierCatalog
    : supplierCatalog.filter((item) => item.category === appState.ui.activeCategory);

  document.getElementById("catalog-section").innerHTML = `
    <div class="section-header">
      <div>
        <h3>Catalogo</h3>
        <p>${escapeHtml(activeSupplier.name)} · ${escapeHtml(activeSupplier.category)}</p>
      </div>
      <label class="field" style="min-width: 240px;">
        <span>Proveedor</span>
        <select id="supplier-selector">${renderOptions(appState.suppliers.map((supplier) => ({ value: supplier.id, label: supplier.name })), activeSupplier.id)}</select>
      </label>
    </div>
    <div class="filter-row">
      ${categories.map((category) => `<button class="chip-btn ${category === appState.ui.activeCategory ? "active" : ""}" data-category="${escapeAttribute(category)}">${escapeHtml(category)}</button>`).join("")}
    </div>
    <div class="cards-grid" style="margin-top: 16px;">
      ${visibleCatalog.length ? visibleCatalog.map(renderCatalogCard).join("") : `<div class="empty-note">No hay productos para este filtro.</div>`}
    </div>
    ${appState.ui.currentView === "supplier" ? renderSupplierCatalogForm(activeSupplier) : ""}
  `;
}

function renderSupplierCatalogForm(activeSupplier) {
  return `
    <form class="inline-form" data-form="catalog-product">
      <label class="field">
        <span>Producto</span>
        <input name="name" required placeholder="Ej: Vermut reserva">
      </label>
      <label class="field">
        <span>Categoria</span>
        <input name="category" required placeholder="Ej: Bebidas">
      </label>
      <label class="field">
        <span>Formato</span>
        <input name="format" required placeholder="Ej: Caja 12 botellas">
      </label>
      <label class="field">
        <span>Precio</span>
        <input name="price" type="number" step="0.01" min="0" required placeholder="0.00">
      </label>
      <div class="field-wide action-row">
        <button class="action-btn primary" type="submit">Agregar al catalogo de ${escapeHtml(activeSupplier.name)}</button>
      </div>
    </form>
  `;
}

function renderCatalogCard(item) {
  const supplier = getSupplier(item.supplierId);
  return `
    <article class="catalog-card">
      <div class="card-title">
        <h4>${escapeHtml(item.name)}</h4>
        <span class="pill ${item.available ? "ok" : "danger"}">${item.available ? "Disponible" : "Sin stock"}</span>
      </div>
      <span class="catalog-price">${money(item.price)}</span>
      <small class="muted">${escapeHtml(item.format)} · ${escapeHtml(item.category)} · ${escapeHtml(supplier.name)}</small>
      <button class="action-btn primary" data-action="quick-order" data-product="${escapeAttribute(item.id)}" ${item.available ? "" : "disabled"}>Crear pedido</button>
    </article>
  `;
}

function renderOrders() {
  const visibleOrders = appState.ui.currentView === "supplier"
    ? appState.orders.filter((order) => order.supplierId === appState.supplierAccount.id)
    : appState.orders;
  const activeOrder = visibleOrders.find((order) => order.id === appState.ui.activeOrderId) || visibleOrders[0];
  if (activeOrder) appState.ui.activeOrderId = activeOrder.id;
  document.getElementById("orders-section").innerHTML = `
    <div class="section-header">
      <div>
        <h3>Pedidos conectados</h3>
        <p>Estados compartidos entre negocio y proveedor, con detalle e historial.</p>
      </div>
      <button class="action-btn primary" data-section-target="catalog">Crear desde catalogo</button>
    </div>
    <div class="order-layout">
      <div class="order-list">
        ${visibleOrders.map(renderOrderCard).join("")}
      </div>
      ${activeOrder ? renderOrderDetail(activeOrder) : `<div class="empty-note">Todavia no hay pedidos para esta vista.</div>`}
    </div>
  `;
}

function renderOrderCard(order) {
  const supplier = getSupplier(order.supplierId);
  const itemSummary = order.items.map((item) => `${escapeHtml(item.quantity)} x ${escapeHtml(item.name)}`).join(", ");
  const nextStatus = nextOrderStatus(order.status);
  return `
    <article class="order-card">
      <div class="card-title">
        <h4>${escapeHtml(supplier.name)}</h4>
        <span class="pill ${statusClass(order.status)}">${escapeHtml(order.status)}</span>
      </div>
      <p>${escapeHtml(itemSummary)}</p>
      <small class="muted">Pedido ${escapeHtml(order.id)} · Entrega ${escapeHtml(order.deliveryDate || "Sin fecha")} · Total ${money(order.total || orderTotal(order))}</small>
      ${order.note ? `<small class="muted">Nota: ${escapeHtml(order.note)}</small>` : ""}
      ${order.incident ? `<div class="empty-note">${escapeHtml(order.incident)}</div>` : ""}
      <div class="action-row">
        <button class="action-btn secondary" data-action="select-order" data-order="${escapeAttribute(order.id)}">Ver detalle</button>
        ${nextStatus ? `<button class="action-btn primary" data-action="advance-order" data-order="${escapeAttribute(order.id)}">${escapeHtml(nextStatus)}</button>` : ""}
      </div>
    </article>
  `;
}

function renderOrderDetail(order) {
  const supplier = getSupplier(order.supplierId);
  const note = appState.deliveryNotes.find((item) => item.id === order.deliveryNoteId);
  const nextStatus = nextOrderStatus(order.status);
  return `
    <aside class="order-detail">
      <div class="card-title">
        <div>
          <span class="pill ${statusClass(order.status)}">${escapeHtml(order.status)}</span>
          <h4>${escapeHtml(order.id)} · ${escapeHtml(supplier.name)}</h4>
        </div>
      </div>
      <div class="detail-grid">
        <article>
          <span class="muted">Creado</span>
          <strong>${escapeHtml(order.createdAt)}</strong>
        </article>
        <article>
          <span class="muted">Entrega</span>
          <strong>${escapeHtml(order.deliveryDate || "Sin fecha")}</strong>
        </article>
        <article>
          <span class="muted">Total</span>
          <strong>${money(order.total || orderTotal(order))}</strong>
        </article>
      </div>
      <div>
        <h5>Articulos</h5>
        <div class="line-list">
          ${order.items.map((item) => `
            <div>
              <strong>${escapeHtml(item.quantity)} x ${escapeHtml(item.name)}</strong>
              <span>${escapeHtml(item.format)} · ${money(item.price)} unidad</span>
            </div>
          `).join("")}
        </div>
      </div>
      <div>
        <h5>Albaran</h5>
        ${note ? `
          <div class="empty-note">
            <strong>${escapeHtml(note.number)}</strong><br>
            ${escapeHtml(note.summary)}
          </div>
        ` : `<div class="empty-note">Sin albaran asociado todavia.</div>`}
      </div>
      <div>
        <h5>Historial</h5>
        <div class="timeline">
          ${(order.history || []).map((item) => `
            <div class="timeline-item">
              <span>${escapeHtml(item.date)}</span>
              <div><strong>${escapeHtml(item.label)}</strong><br><small>${escapeHtml(item.detail)}</small></div>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="action-row">
        ${nextStatus ? `<button class="action-btn primary" data-action="advance-order" data-order="${escapeAttribute(order.id)}">${escapeHtml(nextStatus)}</button>` : ""}
        <button class="action-btn secondary" data-action="create-delivery-note" data-order="${escapeAttribute(order.id)}">Registrar albaran</button>
        <button class="action-btn secondary" data-action="mark-incident" data-order="${escapeAttribute(order.id)}">Marcar incidencia</button>
      </div>
    </aside>
  `;
}

function nextOrderStatus(status) {
  const flow = {
    "Borrador": "Enviado al proveedor",
    "Enviado al proveedor": "Confirmado",
    "Confirmado": "En preparacion",
    "En preparacion": "En reparto",
    "En reparto": "Entregado",
    "Entregado": "Recibido conforme",
  };
  return flow[status] || "";
}

function pushOrderHistory(order, label, detail) {
  if (!order.history) order.history = [];
  order.history.push({
    label,
    date: new Date().toISOString().slice(0, 10),
    detail,
  });
}

function renderDeliveryNotes() {
  const visibleNotes = appState.ui.currentView === "supplier"
    ? appState.deliveryNotes.filter((note) => note.supplierId === appState.supplierAccount.id)
    : appState.deliveryNotes;
  document.getElementById("delivery-notes-section").innerHTML = `
    <div class="section-header">
      <div>
        <h3>Albaranes</h3>
        <p>Primera version: registro simple asociado a pedidos.</p>
      </div>
      <button class="action-btn primary" data-action="create-delivery-note">Registrar albaran</button>
    </div>
    <div class="cards-grid">
      ${visibleNotes.length ? visibleNotes.map(renderDeliveryNoteCard).join("") : `<div class="empty-note">No hay albaranes para esta vista.</div>`}
    </div>
  `;
}

function renderDeliveryNoteCard(note) {
  const supplier = getSupplier(note.supplierId);
  return `
    <article class="note-card">
      <div class="card-title">
        <h4>${escapeHtml(note.number)}</h4>
        <span class="pill ${statusClass(note.status)}">${escapeHtml(note.status)}</span>
      </div>
      <p>${escapeHtml(note.summary)}</p>
      <small class="muted">${escapeHtml(supplier.name)} · Pedido ${escapeHtml(note.orderId)} · ${escapeHtml(note.date)}</small>
    </article>
  `;
}

function renderNetwork() {
  document.getElementById("network-section").innerHTML = `
    <div class="section-header">
      <div>
        <h3>Explorar marketplace</h3>
        <p>Catalogo abierto de proveedores: se revisa el perfil, se ve que venden y se solicita conexion.</p>
      </div>
    </div>
    <div class="market-grid">
      ${appState.suppliers.map(renderSupplierCard).join("")}
    </div>
  `;
}

function renderSettings() {
  const isSupplier = appState.ui.currentView === "supplier";
  document.getElementById("settings-section").innerHTML = `
    <div class="section-header">
      <div>
        <h3>Perfil</h3>
        <p>${isSupplier ? "Perfil visible del proveedor." : "Perfil del negocio dentro de BrasaConnect."}</p>
      </div>
    </div>
    <div class="cards-grid">
      <article class="card">
        <span class="pill ok">${isSupplier ? "Proveedor" : "Restaurante"}</span>
        <h4>${escapeHtml(isSupplier ? appState.supplierAccount.name : appState.business.name)}</h4>
        <p class="muted">${escapeHtml(isSupplier ? appState.supplierAccount.category : appState.business.type)} · ${escapeHtml(isSupplier ? appState.supplierAccount.city : appState.business.city)}</p>
      </article>
      <article class="card">
        <span class="pill">Integracion futura</span>
        <p>BrasaFlow enviara inventario base y pedidos internos. BrasaConnect devolvera pedidos confirmados, albaranes, precios e incidencias.</p>
      </article>
    </div>
  `;
}

function renderApp() {
  renderHero();
  renderDashboard();
  renderSuppliers();
  renderCatalog();
  renderOrders();
  renderDeliveryNotes();
  renderNetwork();
  renderSettings();
  renderNavigation();
  bindEvents();
  scheduleSave();
}

function bindEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === appState.ui.currentView);
    button.onclick = () => {
      appState.ui.currentView = button.dataset.view;
      appState.ui.currentSection = "dashboard";
      if (button.dataset.view === "supplier") {
        appState.ui.activeSupplierId = appState.supplierAccount.id;
      }
      renderApp();
    };
  });

  document.querySelectorAll(".nav-link").forEach((button) => {
    button.onclick = () => {
      appState.ui.currentSection = button.dataset.section;
      renderApp();
    };
  });

  document.getElementById("mobile-section-selector").onchange = (event) => {
    appState.ui.currentSection = event.target.value;
    renderApp();
  };

  document.querySelectorAll("[data-section-target]").forEach((button) => {
    button.onclick = () => {
      if (button.dataset.supplier) {
        appState.ui.activeSupplierId = button.dataset.supplier;
      }
      appState.ui.currentSection = button.dataset.sectionTarget;
      renderApp();
    };
  });

  const supplierSelector = document.getElementById("supplier-selector");
  if (supplierSelector) {
    supplierSelector.onchange = (event) => {
      appState.ui.activeSupplierId = event.target.value;
      appState.ui.activeCategory = "Todos";
      renderApp();
    };
  }

  document.querySelectorAll("[data-category]").forEach((button) => {
    button.onclick = () => {
      appState.ui.activeCategory = button.dataset.category;
      renderApp();
    };
  });

  document.querySelectorAll("[data-action='connect-supplier']").forEach((button) => {
    button.onclick = () => {
      const supplier = getSupplier(button.dataset.supplier);
      if (!supplier) return;
      supplier.connected = true;
      appState.connections.push({ supplierId: supplier.id, status: "Solicitud enviada", lastOrder: "" });
      renderApp();
    };
  });

  document.querySelectorAll("[data-action='quick-order']").forEach((button) => {
    button.onclick = () => createQuickOrder(button.dataset.product);
  });

  document.querySelectorAll("[data-action='advance-order']").forEach((button) => {
    button.onclick = () => {
      const order = appState.orders.find((item) => item.id === button.dataset.order);
      const next = order ? nextOrderStatus(order.status) : "";
      if (order && next) {
        order.status = next;
        pushOrderHistory(order, next, appState.ui.currentView === "supplier"
          ? "El proveedor actualizo el estado del pedido."
          : "El negocio avanzo el seguimiento del pedido.");
        renderApp();
      }
    };
  });

  document.querySelectorAll("[data-action='select-order']").forEach((button) => {
    button.onclick = () => {
      appState.ui.activeOrderId = button.dataset.order;
      renderApp();
    };
  });

  document.querySelectorAll("[data-action='mark-incident']").forEach((button) => {
    button.onclick = () => {
      const order = appState.orders.find((item) => item.id === button.dataset.order);
      if (!order) return;
      order.status = "Recibido con incidencia";
      order.incident = "Incidencia demo: revisar diferencia entre pedido y entrega.";
      pushOrderHistory(order, "Incidencia registrada", "El negocio marco una diferencia en la recepcion.");
      renderApp();
    };
  });

  document.querySelectorAll("[data-action='create-delivery-note']").forEach((button) => {
    button.onclick = () => createDeliveryNoteDemo(button.dataset.order);
  });

  document.querySelectorAll("form[data-form='catalog-product']").forEach((form) => {
    form.onsubmit = (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const activeSupplier = getActiveSupplier();
      appState.catalog.unshift({
        id: `cat-${Date.now()}`,
        supplierId: activeSupplier.id,
        name: String(data.get("name") || "").trim(),
        category: String(data.get("category") || "").trim(),
        format: String(data.get("format") || "").trim(),
        price: Number(data.get("price") || 0),
        available: true,
      });
      appState.ui.activeCategory = "Todos";
      renderApp();
    };
  });
}

function createQuickOrder(productId) {
  const product = appState.catalog.find((item) => item.id === productId);
  if (!product) return;
  const order = {
    id: `ord-${Date.now()}`,
    supplierId: product.supplierId,
    businessId: appState.business.id,
    status: "Enviado al proveedor",
    createdAt: new Date().toISOString().slice(0, 10),
    deliveryDate: "",
    total: product.price,
    items: [{ productId: product.id, name: product.name, quantity: 1, format: product.format, price: product.price }],
    note: "Pedido creado desde catalogo.",
    deliveryNoteId: "",
    incident: "",
  };
  appState.orders.unshift(order);
  appState.ui.activeOrderId = order.id;
  appState.ui.currentSection = "orders";
  renderApp();
}

function createDeliveryNoteDemo(orderId = "") {
  const order = appState.orders.find((item) => item.id === orderId) || appState.orders.find((item) => !item.deliveryNoteId);
  if (!order) return;
  if (order.deliveryNoteId) {
    appState.ui.activeOrderId = order.id;
    renderApp();
    return;
  }
  const note = {
    id: `dn-${Date.now()}`,
    orderId: order.id,
    supplierId: order.supplierId,
    number: `ALB-${new Date().getFullYear()}-${String(appState.deliveryNotes.length + 1).padStart(4, "0")}`,
    date: new Date().toISOString().slice(0, 10),
    status: "Pendiente de recepcion",
    summary: "Albaran registrado desde el panel del proveedor.",
  };
  order.deliveryNoteId = note.id;
  pushOrderHistory(order, "Albaran registrado", "El proveedor subio o registro el albaran del pedido.");
  appState.deliveryNotes.unshift(note);
  appState.ui.activeOrderId = order.id;
  renderApp();
}

loadState().then(renderApp);
