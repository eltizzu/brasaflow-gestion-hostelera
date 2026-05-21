const defaultState = {
  ui: {
    currentView: "employee",
    currentSection: "dashboard",
    currentEmployeeId: "emp-1",
    activeChatArea: "General",
    activeDocumentType: "Todos",
    currentShiftWeek: "Semana actual",
    shiftPlannerEmployeeId: "emp-1",
    currentUserId: null,
    orderDraft: null,
    activeOrdersArea: null,
    activeAllergenFilter: "Todos",
    recipeSearch: "",
    recipeDraftId: null,
    recipeFormOpen: false,
    lastShiftNotificationKey: "",
  },
  business: {
    name: "La Terraza Central",
    slogan: "Gestion diaria para equipos de hosteleria",
    city: "Madrid",
    logoMark: "LT",
  },
  settings: {
    accrualMode: "Mensual",
    annualVacationDays: 30,
    visibilityMode: "Cada empleado ve solo sus turnos, y encargados ven su area completa.",
    notifications: "Avisos urgentes resaltados y con aviso al movil.",
    chatRetentionDays: 14,
    areas: ["Cocina", "Sala", "General"],
    brandAccent: "#c86f31",
    brandStrong: "#8f3f17",
    worksiteLabel: "Local principal",
    clockInRadiusMeters: 80,
    worksiteLatitude: 36.7213,
    worksiteLongitude: -4.4214,
    clockInGeoMode: "Marcar para revision",
  },
  roles: [
    { id: "role-1", name: "Jefe de cocina", area: "Cocina", permissions: ["turnos_area", "pedido_area", "inventario_area"] },
    { id: "role-2", name: "Ayudante de cocina", area: "Cocina", permissions: ["inventario_area"] },
    { id: "role-3", name: "Camarero", area: "Sala", permissions: ["inventario_area"] },
    { id: "role-4", name: "Jefe de sala", area: "Sala", permissions: ["turnos_area", "pedido_area", "inventario_area"] },
    { id: "role-5", name: "Administrador", area: "General", permissions: ["all"] },
  ],
  users: [
    { id: "user-1", name: "Lucia Moreno", email: "lucia@brasaflow-demo.com", password: "1234", view: "employee", employeeId: "emp-1" },
    { id: "user-2", name: "Paula Serra", email: "paula@brasaflow-demo.com", password: "1234", view: "manager", employeeId: "emp-3" },
    { id: "user-3", name: "Admin BrasaFlow", email: "admin@brasaflow-demo.com", password: "1234", view: "admin", employeeId: "emp-1" },
  ],
  employees: [
    {
      id: "emp-1",
      name: "Lucia Moreno",
      roleId: "role-1",
      area: "Cocina",
      contractStart: "2026-01-10",
      annualVacationDays: 30,
      usedVacationDays: 4,
      status: "Activa",
      weeklyHours: 40,
      email: "lucia@brasaflow-demo.com",
    },
    {
      id: "emp-2",
      name: "Diego Lara",
      roleId: "role-2",
      area: "Cocina",
      contractStart: "2026-03-04",
      annualVacationDays: 30,
      usedVacationDays: 1,
      status: "Activa",
      weeklyHours: 32,
      email: "diego@brasaflow-demo.com",
    },
    {
      id: "emp-3",
      name: "Paula Serra",
      roleId: "role-4",
      area: "Sala",
      contractStart: "2025-11-15",
      annualVacationDays: 30,
      usedVacationDays: 8,
      status: "Activa",
      weeklyHours: 39,
      email: "paula@brasaflow-demo.com",
    },
    {
      id: "emp-4",
      name: "Mario Vidal",
      roleId: "role-3",
      area: "Sala",
      contractStart: "2026-04-02",
      annualVacationDays: 30,
      usedVacationDays: 0,
      status: "Activa",
      weeklyHours: 24,
      email: "mario@brasaflow-demo.com",
    },
  ],
  shifts: [
    { id: "shift-1", week: "Semana actual", day: "Lunes", area: "Cocina", employeeId: "emp-1", time: "10:00 - 17:00", note: "Mise en place y cierre de cocina" },
    { id: "shift-2", week: "Semana actual", day: "Lunes", area: "Cocina", employeeId: "emp-2", time: "11:00 - 16:00", note: "Apoyo servicio comidas" },
    { id: "shift-3", week: "Semana actual", day: "Lunes", area: "Sala", employeeId: "emp-3", time: "12:00 - 18:00", note: "Apertura y briefing equipo" },
    { id: "shift-4", week: "Semana actual", day: "Lunes", area: "Sala", employeeId: "emp-4", time: "13:00 - 18:00", note: "Servicio terraza" },
    { id: "shift-5", week: "Semana actual", day: "Martes", area: "Cocina", employeeId: "emp-1", time: "10:00 - 17:00", note: "Revision de camaras" },
    { id: "shift-6", week: "Semana actual", day: "Martes", area: "Sala", employeeId: "emp-3", time: "12:00 - 19:00", note: "Coordinacion reservas" },
    { id: "shift-7", week: "Semana actual", day: "Miercoles", area: "Cocina", employeeId: "emp-2", time: "11:00 - 18:00", note: "Produccion postres" },
    { id: "shift-8", week: "Semana actual", day: "Jueves", area: "Sala", employeeId: "emp-4", time: "13:00 - 20:00", note: "Refuerzo cena" },
    { id: "shift-9", week: "Semana actual", day: "Viernes", area: "Cocina", employeeId: "emp-1", time: "09:00 - 17:00", note: "Pedido semanal y servicio" },
    { id: "shift-10", week: "Semana actual", day: "Viernes", area: "Sala", employeeId: "emp-3", time: "12:00 - 21:00", note: "Evento privado" },
  ],
  timeOffRequests: [
    { id: "req-1", employeeId: "emp-1", type: "Vacaciones", from: "2026-06-10", to: "2026-06-15", status: "Pendiente" },
    { id: "req-2", employeeId: "emp-3", type: "Vacaciones", from: "2026-07-01", to: "2026-07-07", status: "Aprobada" },
    { id: "req-3", employeeId: "emp-4", type: "Ausencia", from: "2026-05-02", to: "2026-05-02", status: "Pendiente" },
  ],
  chats: [
    {
      id: "chat-1",
      area: "General",
      urgent: true,
      author: "Empresa",
      message: "Cambio de protocolo para cierres del domingo. Confirmacion obligatoria.",
      audience: ["all"],
      createdAt: "2026-04-29T09:15:00",
    },
    {
      id: "chat-2",
      area: "Cocina",
      urgent: false,
      author: "Lucia Moreno",
      message: "Revisar aceite y fondos antes del jueves.",
      audience: ["Cocina", "General"],
      createdAt: "2026-04-29T10:05:00",
    },
    {
      id: "chat-3",
      area: "Sala",
      urgent: false,
      author: "Paula Serra",
      message: "Mantened actualizada la lista de reservas grandes para el fin de semana.",
      audience: ["Sala", "General"],
      createdAt: "2026-04-29T10:30:00",
    },
  ],
  inventory: [
    { id: "inv-1", name: "Aceite oliva", area: "Cocina", unit: "garrafas" },
    { id: "inv-2", name: "Lubina", area: "Cocina", unit: "kg" },
    { id: "inv-3", name: "Tonica", area: "Sala", unit: "botellas" },
    { id: "inv-4", name: "Servilletas premium", area: "Sala", unit: "cajas" },
  ],
  orders: [
    { id: "order-1", area: "Cocina", item: "Aceite oliva", unit: "garrafas", quantity: 4, status: "Borrador", editableBy: ["Jefe de cocina", "Administrador"] },
    { id: "order-2", area: "Cocina", item: "Lubina", unit: "kg", quantity: 10, status: "Pendiente", editableBy: ["Jefe de cocina", "Administrador"] },
    { id: "order-3", area: "Sala", item: "Tonica", unit: "botellas", quantity: 24, status: "Borrador", editableBy: ["Jefe de sala", "Administrador"] },
  ],
  recipes: [
    {
      id: "recipe-1",
      name: "Croquetas de jamon",
      area: "Cocina",
      yieldLabel: "40 unidades",
      allergens: ["Gluten", "Lacteos", "Huevo"],
      ingredients: [
        "Leche · 2 litros",
        "Harina · 250 g",
        "Mantequilla · 250 g",
        "Jamon · 400 g",
      ],
      notes: "Mantener bechamel espesa y enfriar antes de bolear.",
      serviceNotes: "Avisar de gluten y lacteos. Puede llevar trazas segun empanado.",
      author: "Lucia Moreno",
    },
    {
      id: "recipe-2",
      name: "Salsa verde base",
      area: "Cocina",
      yieldLabel: "1 bandeja GN",
      allergens: ["Pescado"],
      ingredients: [
        "Fumet · 1,5 litros",
        "Perejil · 2 manojos",
        "Ajo · 6 dientes",
        "Aceite oliva · 200 ml",
      ],
      notes: "Usar como base para pescados y repasar sal al final.",
      serviceNotes: "Confirmar si el fumet lleva marisco antes de servir a clientes sensibles.",
      author: "Empresa",
    },
  ],
  temperatureEquipment: [
    { id: "temp-eq-1", name: "Camara fria cocina", area: "Cocina", target: "0 a 4 C" },
    { id: "temp-eq-2", name: "Congelador postres", area: "Cocina", target: "-18 C o menos" },
    { id: "temp-eq-3", name: "Heladera bebidas", area: "Sala", target: "2 a 6 C" },
  ],
  temperatureLogs: [
    { id: "temp-log-1", equipmentId: "temp-eq-1", area: "Cocina", value: 3.1, note: "", recordedAt: "2026-05-06T09:10:00", author: "Lucia Moreno" },
    { id: "temp-log-2", equipmentId: "temp-eq-3", area: "Sala", value: 4.2, note: "", recordedAt: "2026-05-06T10:05:00", author: "Paula Serra" },
  ],
  laborDocuments: [
    {
      id: "doc-1",
      employeeId: "emp-1",
      area: "Cocina",
      type: "Nomina",
      title: "Nomina abril 2026",
      period: "Abril 2026",
      summary: "Nomina mensual correspondiente al mes de abril.",
      uploadedAt: "2026-05-02T09:30:00",
      author: "Empresa",
      visibility: "Empleado y empresa",
    },
    {
      id: "doc-2",
      employeeId: "emp-3",
      area: "Sala",
      type: "Contrato",
      title: "Contrato indefinido",
      period: "Alta 2025",
      summary: "Contrato base firmado al incorporarse al local.",
      uploadedAt: "2026-05-01T13:15:00",
      author: "Empresa",
      visibility: "Empleado y empresa",
    },
  ],
  timeLogs: [
    { id: "log-1", employeeId: "emp-1", date: "2026-05-03", clockIn: "09:56", clockOut: "17:04", minutesWorked: 428, locationStatus: "Pendiente geo", source: "Movil" },
    { id: "log-2", employeeId: "emp-1", date: "2026-05-04", clockIn: "10:01", clockOut: "16:58", minutesWorked: 417, locationStatus: "Pendiente geo", source: "Movil" },
    { id: "log-3", employeeId: "emp-3", date: "2026-05-04", clockIn: "11:54", clockOut: "20:11", minutesWorked: 497, locationStatus: "Pendiente geo", source: "Movil" },
    { id: "log-4", employeeId: "emp-4", date: "2026-05-04", clockIn: "12:58", clockOut: "18:09", minutesWorked: 311, locationStatus: "Pendiente geo", source: "Movil" },
  ],
  shiftTemplates: [
    {
      id: "template-1",
      name: "Apertura cocina",
      area: "Cocina",
      slots: [
        { day: "Lunes", start: "09:00", end: "16:00" },
        { day: "Martes", start: "09:00", end: "16:00" },
        { day: "Miercoles", start: "09:00", end: "16:00" },
        { day: "Jueves", start: "09:00", end: "16:00" },
        { day: "Viernes", start: "09:00", end: "17:00" },
      ],
    },
    {
      id: "template-2",
      name: "Servicio sala comidas",
      area: "Sala",
      slots: [
        { day: "Lunes", start: "12:00", end: "18:00" },
        { day: "Martes", start: "12:00", end: "18:00" },
        { day: "Miercoles", start: "12:00", end: "18:00" },
        { day: "Jueves", start: "12:00", end: "18:00" },
        { day: "Viernes", start: "12:00", end: "20:00" },
      ],
    },
  ],
};

const heroCopy = {
  employee: {
    badge: "Vista Empleado",
    title: "Todo lo importante del trabajo en un solo lugar",
    description: "Turnos, vacaciones, avisos, inventario y herramientas del dia a dia desde el movil.",
    mode: "Empleado",
  },
  manager: {
    badge: "Vista Encargado",
    title: "Coordina equipos, inventario base y pedidos por area",
    description: "El encargado visualiza a su equipo, consulta la base de su zona y prepara pedidos rapidos.",
    mode: "Encargado",
  },
  admin: {
    badge: "Vista Empresa",
    title: "Control centralizado de personal y operativa",
    description: "La empresa configura roles, areas, vacaciones y comunicacion para que cada local trabaje a su manera.",
    mode: "Empresa",
  },
};

const ALLERGEN_OPTIONS = [
  "Gluten",
  "Crustaceos",
  "Huevo",
  "Pescado",
  "Cacahuetes",
  "Soja",
  "Lacteos",
  "Frutos de cascara",
  "Apio",
  "Mostaza",
  "Sesamo",
  "Sulfitos",
  "Altramuces",
  "Moluscos",
];

let appState = structuredClone(defaultState);
let saveStateTimer = null;
let lastPersistedSnapshot = "";

function getPersistedState() {
  return {
    ...appState,
    ui: structuredClone(defaultState.ui),
  };
}

function hydrateState(parsed = {}) {
  try {
    const normalizedChats = (parsed.chats ?? defaultState.chats).map((chat) => ({
      ...chat,
      area: chat.area === "Barra" ? "Sala" : chat.area,
      createdAt: normalizeChatTimestamp(chat.createdAt),
    }));
    const normalizedInventory = (parsed.inventory ?? defaultState.inventory).map((item) => ({
      id: item.id,
      name: item.name,
      area: item.area === "Barra" ? "Sala" : item.area,
      unit: item.unit ?? "",
      notes: item.notes ?? "",
    }));
    const normalizedOrders = (parsed.orders ?? defaultState.orders).map((order) => ({
      ...order,
      area: order.area === "Barra" ? "Sala" : order.area,
      unit: order.unit ?? "",
    }));
    const normalizedRecipes = (parsed.recipes ?? defaultState.recipes).map((recipe) => ({
      id: recipe.id ?? uid("recipe"),
      name: recipe.name ?? "Receta sin nombre",
      area: recipe.area === "Barra" ? "Sala" : recipe.area,
      yieldLabel: recipe.yieldLabel ?? "",
      allergens: Array.isArray(recipe.allergens)
        ? recipe.allergens.map((item) => String(item).trim()).filter(Boolean)
        : [],
      ingredients: Array.isArray(recipe.ingredients)
        ? recipe.ingredients.map((item) => String(item).trim()).filter(Boolean)
        : String(recipe.ingredients || "")
          .split(/\r?\n/)
          .map((item) => item.trim())
          .filter(Boolean),
      notes: recipe.notes ?? "",
      serviceNotes: recipe.serviceNotes ?? "",
      author: recipe.author ?? "Empresa",
    }));
    const normalizedRoles = (parsed.roles ?? defaultState.roles).map((role) => ({
      ...role,
      area: role.area === "Barra" ? "Sala" : role.area,
    }));
    const normalizedEmployees = (parsed.employees ?? defaultState.employees).map((employee) => ({
      ...employee,
      area: employee.area === "Barra" ? "Sala" : employee.area,
    }));
    const normalizedTemperatureEquipment = (parsed.temperatureEquipment ?? defaultState.temperatureEquipment).map((item) => ({
      ...item,
      area: item.area === "Barra" ? "Sala" : item.area,
    }));
    const normalizedTemperatureLogs = (parsed.temperatureLogs ?? defaultState.temperatureLogs).map((item) => ({
      ...item,
      area: item.area === "Barra" ? "Sala" : item.area,
    }));
    const normalizedLaborDocuments = (parsed.laborDocuments ?? defaultState.laborDocuments).map((item) => ({
      ...item,
      area: item.area === "Barra" ? "Sala" : item.area,
    }));
    const normalizedSettings = {
      ...defaultState.settings,
      ...(parsed.settings ?? {}),
      areas: (parsed.settings?.areas ?? defaultState.settings.areas)
        .map((area) => area === "Barra" ? "Sala" : area)
        .filter((area, index, list) => list.indexOf(area) === index),
    };
    return {
      ...structuredClone(defaultState),
      ...parsed,
      ui: { ...defaultState.ui, ...(parsed.ui ?? {}) },
      business: { ...defaultState.business, ...(parsed.business ?? {}) },
      settings: normalizedSettings,
      roles: normalizedRoles,
      employees: normalizedEmployees,
      chats: normalizedChats,
      inventory: normalizedInventory,
      orders: normalizedOrders,
      recipes: normalizedRecipes,
      temperatureEquipment: normalizedTemperatureEquipment,
      temperatureLogs: normalizedTemperatureLogs,
      laborDocuments: normalizedLaborDocuments,
      shifts: (parsed.shifts ?? defaultState.shifts).map((shift) => ({
        ...shift,
        area: shift.area === "Barra" ? "Sala" : shift.area,
        week: "Semana actual",
      })),
    };
  } catch {
    return structuredClone(defaultState);
  }
}

async function loadState() {
  try {
    const response = await fetch("/api/state");
    if (!response.ok) {
      return structuredClone(defaultState);
    }
    const payload = await response.json();
    const hasRemoteData = payload && Object.keys(payload).length > 0;
    if (!hasRemoteData) {
      return structuredClone(defaultState);
    }
    return hydrateState(payload);
  } catch {
    return structuredClone(defaultState);
  }
}

async function saveStateNow() {
  const snapshot = JSON.stringify(getPersistedState());
  if (snapshot === lastPersistedSnapshot) {
    return;
  }
  await fetch("/api/state", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: snapshot,
  });
  lastPersistedSnapshot = snapshot;
}

function scheduleSaveState() {
  clearTimeout(saveStateTimer);
  saveStateTimer = setTimeout(() => {
    saveStateNow().catch(() => {});
  }, 200);
}

function uid(prefix) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function getRoleById(roleId) {
  return appState.roles.find((role) => role.id === roleId);
}

function getCurrentUser() {
  return appState.users?.find((user) => user.id === appState.ui.currentUserId) ?? null;
}

function getEmployeeById(employeeId) {
  return appState.employees.find((employee) => employee.id === employeeId);
}

function getCurrentEmployee() {
  return getEmployeeById(appState.ui.currentEmployeeId) ?? appState.employees[0];
}

function getTodayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDateParts(value) {
  const [year, month, day] = String(value).split("-").map(Number);
  return { year, month, day };
}

function parseLocalDate(value) {
  const { year, month, day } = parseDateParts(value);
  return new Date(year, (month || 1) - 1, day || 1);
}

function getWeekStart(date = new Date()) {
  const start = new Date(date);
  const day = start.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  start.setDate(start.getDate() + diff);
  start.setHours(0, 0, 0, 0);
  return start;
}

function formatMinutesAsHours(minutes = 0) {
  const safeMinutes = Math.max(0, Number(minutes) || 0);
  const hours = Math.floor(safeMinutes / 60);
  const rest = safeMinutes % 60;
  return `${hours} h ${String(rest).padStart(2, "0")} min`;
}

function sumWorkedMinutes(logs = []) {
  return logs.reduce((total, log) => total + Number(log.minutesWorked || 0), 0);
}

function isAdminView() {
  return appState.ui.currentView === "admin";
}

function isManagerView() {
  return appState.ui.currentView === "manager";
}

function isEmployeeView() {
  return appState.ui.currentView === "employee";
}

function scopeItemsByEmployeeArea(items = [], employee, getArea) {
  if (isAdminView()) return items;
  if (!employee) return [];
  return items.filter((item) => getArea(item) === employee.area);
}

function getAttendanceLogsForView(employee) {
  if (isAdminView()) return appState.timeLogs;
  if (isManagerView()) {
    return appState.timeLogs.filter((log) => getEmployeeById(log.employeeId)?.area === employee.area);
  }
  return appState.timeLogs.filter((log) => log.employeeId === employee.id);
}

function getOpenTimeLog(employeeId) {
  return appState.timeLogs.find((log) => log.employeeId === employeeId && !log.clockOut) ?? null;
}

function getEmployeeTimeLogs(employeeId) {
  return appState.timeLogs
    .filter((log) => log.employeeId === employeeId)
    .sort((left, right) => `${right.date} ${right.clockIn}`.localeCompare(`${left.date} ${left.clockIn}`));
}

function getAttendanceSummary(employeeId) {
  const logs = getEmployeeTimeLogs(employeeId);
  const now = new Date();
  const todayKey = getTodayKey(now);
  const weekStart = getWeekStart(now);
  const monthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  const todayLogs = logs.filter((log) => log.date === todayKey);
  const weekLogs = logs.filter((log) => parseLocalDate(log.date) >= weekStart);
  const monthLogs = logs.filter((log) => String(log.date).startsWith(monthKey));
  return {
    todayMinutes: sumWorkedMinutes(todayLogs),
    weekMinutes: sumWorkedMinutes(weekLogs),
    monthMinutes: sumWorkedMinutes(monthLogs),
    totalShifts: logs.filter((log) => log.clockIn).length,
    openLog: getOpenTimeLog(employeeId),
    todayLogs,
    recentLogs: logs.slice(0, 8),
  };
}

function canUseSelfClock() {
  const currentUser = getCurrentUser();
  const employee = getCurrentEmployee();
  return Boolean(currentUser?.employeeId && currentUser.employeeId === employee.id && appState.ui.currentView !== "admin");
}

function getCurrentTimeLabel() {
  return new Date().toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function parseOptionalNumber(value, fallback = null) {
  const text = String(value ?? "").trim();
  if (!text) return fallback;
  const parsed = Number(text);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function hasConfiguredWorksiteLocation() {
  return Number.isFinite(parseOptionalNumber(appState.settings.worksiteLatitude))
    && Number.isFinite(parseOptionalNumber(appState.settings.worksiteLongitude));
}

function toRadians(value) {
  return (value * Math.PI) / 180;
}

function getDistanceMeters(fromLat, fromLng, toLat, toLng) {
  const earthRadius = 6371000;
  const dLat = toRadians(toLat - fromLat);
  const dLng = toRadians(toLng - fromLng);
  const lat1 = toRadians(fromLat);
  const lat2 = toRadians(toLat);
  const a = Math.sin(dLat / 2) ** 2
    + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(earthRadius * c);
}

function validateClockLocation(position) {
  if (!hasConfiguredWorksiteLocation()) {
    return {
      allowed: true,
      status: "Local sin configurar",
      distanceMeters: null,
    };
  }

  const worksiteLat = Number(appState.settings.worksiteLatitude);
  const worksiteLng = Number(appState.settings.worksiteLongitude);
  const radius = Number(appState.settings.clockInRadiusMeters || 80);
  const distance = getDistanceMeters(
    position.coords.latitude,
    position.coords.longitude,
    worksiteLat,
    worksiteLng,
  );
  const inside = distance <= radius;
  if (inside) {
    return {
      allowed: true,
      status: `Dentro de zona (${distance} m)`,
      distanceMeters: distance,
    };
  }

  const strict = appState.settings.clockInGeoMode === "Bloquear fuera de zona";
  return {
    allowed: !strict,
    status: strict
      ? `Fuera de zona (${distance} m)`
      : `Fuera de zona - revisar (${distance} m)`,
    distanceMeters: distance,
  };
}

function requestCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) {
      reject(new Error("Geolocalizacion no disponible"));
      return;
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    });
  });
}

function calculateWorkedMinutesForLog(log) {
  if (!log?.clockIn || !log?.clockOut || !log?.date) return 0;
  const start = new Date(`${log.date}T${log.clockIn}:00`);
  const end = new Date(`${log.date}T${log.clockOut}:00`);
  return Math.max(0, Math.round((end - start) / 60000));
}

async function clockInCurrentEmployee() {
  const employee = getCurrentEmployee();
  if (!canUseSelfClock()) return;
  if (getOpenTimeLog(employee.id)) {
    alert("Ya tienes un fichaje abierto.");
    return;
  }

  let locationStatus = "Pendiente geo";
  let distanceMeters = null;
  if ("geolocation" in navigator) {
    try {
      const position = await requestCurrentPosition();
      const validation = validateClockLocation(position);
      if (!validation.allowed) {
        alert(`No puedes fichar desde esta ubicacion. Estas a ${validation.distanceMeters} m del local y el radio permitido es ${appState.settings.clockInRadiusMeters} m.`);
        return;
      }
      locationStatus = validation.status;
      distanceMeters = validation.distanceMeters;
    } catch {
      locationStatus = "Geo no disponible";
    }
  }

  appState.timeLogs.unshift({
    id: uid("log"),
    employeeId: employee.id,
    date: getTodayKey(),
    clockIn: getCurrentTimeLabel(),
    clockOut: "",
    minutesWorked: 0,
    locationStatus,
    distanceMeters,
    source: "Movil",
  });
  renderApp();
}

async function clockOutCurrentEmployee() {
  const employee = getCurrentEmployee();
  if (!canUseSelfClock()) return;
  const openLog = getOpenTimeLog(employee.id);
  if (!openLog) {
    alert("No tienes una entrada abierta para cerrar.");
    return;
  }

  if ("geolocation" in navigator) {
    try {
      const position = await requestCurrentPosition();
      const validation = validateClockLocation(position);
      if (validation.distanceMeters !== null) {
        openLog.distanceMeters = validation.distanceMeters;
      }
      if (!String(openLog.locationStatus || "").includes("Fuera de zona") && validation.status !== "Local sin configurar") {
        openLog.locationStatus = validation.status;
      }
    } catch {
      if (!openLog.locationStatus) {
        openLog.locationStatus = "Geo no disponible";
      }
    }
  }

  openLog.clockOut = getCurrentTimeLabel();
  openLog.minutesWorked = calculateWorkedMinutesForLog(openLog);
  renderApp();
}

function getRoleName(employee) {
  return getRoleById(employee.roleId)?.name ?? "Sin rol";
}

function getAreaOptions() {
  return appState.settings.areas;
}

function getAreaForView(employee) {
  return employee?.area ?? "General";
}

function normalizeChatTimestamp(value) {
  if (!value) return new Date().toISOString();
  if (String(value).includes("T")) return value;
  return String(value).replace(" ", "T");
}

function formatChatTimestamp(value) {
  const date = new Date(normalizeChatTimestamp(value));
  return date.toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function applyBrandTheme() {
  const root = document.documentElement;
  root.style.setProperty("--accent", appState.settings.brandAccent || "#c86f31");
  root.style.setProperty("--accent-strong", appState.settings.brandStrong || "#8f3f17");
}

function getChatCutoffDate() {
  const retention = Number(appState.settings.chatRetentionDays || 14);
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - retention);
  return cutoff;
}

function isChatVisible(chat) {
  return new Date(normalizeChatTimestamp(chat.createdAt)) >= getChatCutoffDate();
}

function monthsBetween(startDate, endDate = new Date()) {
  const start = new Date(startDate);
  let months = (endDate.getFullYear() - start.getFullYear()) * 12;
  months += endDate.getMonth() - start.getMonth();
  if (endDate.getDate() < start.getDate()) months -= 1;
  return Math.max(months + 1, 0);
}

function calculateVacationBalance(employee) {
  const yearlyBag = Number(employee.annualVacationDays || appState.settings.annualVacationDays);
  const accrued = Math.min(yearlyBag, Number(((yearlyBag / 12) * monthsBetween(employee.contractStart)).toFixed(1)));
  const available = Number(Math.max(accrued - Number(employee.usedVacationDays || 0), 0).toFixed(1));
  return { accrued, available, used: Number(employee.usedVacationDays || 0) };
}

function getContractHighlights(employee) {
  return [
    `Alta: ${formatShortDate(parseLocalDate(employee.contractStart))}`,
    `Puesto: ${getRoleName(employee)}`,
    `Area: ${employee.area}`,
    `Jornada semanal: ${employee.weeklyHours} h`,
    `Vacaciones anuales: ${employee.annualVacationDays} dias`,
  ];
}

function rolePermissions(roleId) {
  return getRoleById(roleId)?.permissions ?? [];
}

function hasPermission(roleId, permission) {
  const permissions = rolePermissions(roleId);
  return permissions.includes("all") || permissions.includes(permission);
}

function canEditOrders(employee) {
  return hasPermission(employee.roleId, "pedido_area");
}

function canEditInventory(employee) {
  if (isAdminView()) return true;
  if (!isManagerView()) return false;
  return hasPermission(employee.roleId, "inventario_area");
}

function canManageEmployees() {
  return !isEmployeeView();
}

function canAddTemperatureEquipment(employee, area) {
  if (isEmployeeView()) return false;
  return canAccessArea(employee, area);
}

function canUploadLaborDocument(currentEmployee, employeeId) {
  if (isEmployeeView()) return false;
  return manageableEmployees(currentEmployee).some((item) => item.id === employeeId);
}

function manageableEmployees(employee) {
  if (isAdminView()) return appState.employees;
  if (isManagerView()) {
    return appState.employees.filter((item) => item.area === employee.area);
  }
  return [employee];
}

function manageableRoles(employee) {
  if (isAdminView()) return appState.roles;
  if (isManagerView()) {
    return appState.roles.filter((role) => role.area === employee.area);
  }
  return [];
}

function canManageRequest(employee, request) {
  if (!request) return false;
  if (isAdminView()) return true;
  if (isManagerView()) {
    return getEmployeeById(request.employeeId)?.area === employee.area;
  }
  return request.employeeId === employee.id;
}

function canViewRecipes(employee) {
  return isAdminView() || employee.area === "Cocina";
}

function canViewAllergens(employee) {
  return canViewRecipes(employee);
}

function canEditRecipes(employee) {
  return isAdminView()
    || (employee.area === "Cocina" && hasPermission(employee.roleId, "pedido_area"));
}

function canSeeAllChats() {
  return isAdminView();
}

function visibleChats(employee) {
  const scopedChats = canSeeAllChats()
    ? appState.chats
    : appState.chats.filter((chat) => chat.area === "General" || chat.area === employee.area);

  return scopedChats
    .filter(isChatVisible)
    .sort((left, right) => new Date(normalizeChatTimestamp(left.createdAt)) - new Date(normalizeChatTimestamp(right.createdAt)));
}

function visibleChatAreas(employee) {
  if (canSeeAllChats()) return getAreaOptions();
  const areas = new Set(["General", employee.area]);
  return getAreaOptions().filter((area) => areas.has(area));
}

function getActiveChatArea(employee) {
  const allowedAreas = visibleChatAreas(employee);
  if (!allowedAreas.includes(appState.ui.activeChatArea)) {
    appState.ui.activeChatArea = allowedAreas[0] ?? "General";
  }
  return appState.ui.activeChatArea;
}

function visibleInventory(employee) {
  return scopeItemsByEmployeeArea(appState.inventory, employee, (item) => item.area);
}

function visibleOrders(employee) {
  return scopeItemsByEmployeeArea(appState.orders, employee, (item) => item.area);
}

function visibleTemperatureEquipment(employee) {
  return scopeItemsByEmployeeArea(appState.temperatureEquipment, employee, (item) => item.area);
}

function visibleTemperatureLogs(employee) {
  return scopeItemsByEmployeeArea(appState.temperatureLogs, employee, (item) => item.area);
}

function visibleLaborDocuments(employee) {
  if (isAdminView()) return appState.laborDocuments;
  if (isManagerView()) {
    return appState.laborDocuments.filter((item) => item.area === employee.area);
  }
  return appState.laborDocuments.filter((item) => item.employeeId === employee.id && item.visibility !== "Solo empresa");
}

function visibleRecipes(employee) {
  if (!canViewRecipes(employee)) return [];
  return scopeItemsByEmployeeArea(appState.recipes, employee, (item) => item.area);
}

function canAccessArea(employee, area) {
  if (!employee || !area) return false;
  if (isAdminView()) return true;
  return employee.area === area;
}

function canManageOrderLine(employee, order) {
  if (!employee || !order) return false;
  if (isAdminView()) return true;
  return canEditOrders(employee) && order.area === employee.area;
}

function canManageShiftRecord(employee, shift) {
  if (!employee || !shift) return false;
  if (isAdminView()) return true;
  return shift.area === employee.area;
}

function getRecipeById(recipeId) {
  return appState.recipes.find((item) => item.id === recipeId) ?? null;
}

function recipeMatchesSearch(recipe, query) {
  const haystack = [
    recipe.name,
    recipe.yieldLabel,
    recipe.notes,
    recipe.serviceNotes,
    ...(recipe.ingredients || []),
    ...(recipe.allergens || []),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query.toLowerCase());
}

function getDocumentTypesForView(employee) {
  const types = Array.from(new Set(visibleLaborDocuments(employee).map((item) => item.type)));
  return ["Todos", ...types];
}

function getActiveDocumentType(employee) {
  const types = getDocumentTypesForView(employee);
  if (!types.includes(appState.ui.activeDocumentType)) {
    appState.ui.activeDocumentType = "Todos";
  }
  return appState.ui.activeDocumentType;
}

function latestTemperatureLogForEquipment(equipmentId) {
  return appState.temperatureLogs
    .filter((item) => item.equipmentId === equipmentId)
    .sort((left, right) => new Date(right.recordedAt) - new Date(left.recordedAt))[0] ?? null;
}

function itemsAlreadyInOrder(area) {
  return new Set(
    appState.orders
      .filter((order) => order.area === area && !["Recibido", "Recibido con incidencia"].includes(order.status))
      .map((order) => order.item),
  );
}

function getOrderEntryForItem(area, itemName) {
  return appState.orders.find((order) => order.area === area && order.item === itemName && !["Recibido", "Recibido con incidencia"].includes(order.status)) ?? null;
}

function getOrderDifference(order) {
  if (!order || typeof order.receivedQuantity !== "number") return null;
  return Number((Number(order.quantity || 0) - Number(order.receivedQuantity || 0)).toFixed(2));
}

function inventoryItemsForArea(employee, area) {
  return visibleInventory(employee).filter((item) => item.area === area);
}

function getOrderAreasForView(employee) {
  const areas = Array.from(new Set(
    visibleInventory(employee)
      .map((item) => item.area)
      .filter((area) => area && area !== "General"),
  ));
  return areas.length ? areas : [getAreaForView(employee)];
}

function getActiveOrdersArea(employee) {
  const availableAreas = getOrderAreasForView(employee);
  if (!availableAreas.includes(appState.ui.activeOrdersArea)) {
    appState.ui.activeOrdersArea = availableAreas[0];
  }
  return appState.ui.activeOrdersArea;
}

function prefillOrderFromInventory(itemId) {
  const employee = getCurrentEmployee();
  if (!(canEditOrders(employee) || appState.ui.currentView === "admin")) return;
  const item = visibleInventory(employee).find((entry) => entry.id === itemId);
  if (!item) return;
  let activeLine = appState.orders.find((order) => (
    order.area === item.area
    && order.item === item.name
    && !["Recibido", "Recibido con incidencia"].includes(order.status)
  ));
  if (!activeLine) {
    activeLine = {
      id: uid("order"),
      area: item.area,
      item: item.name,
      unit: item.unit || "",
      quantity: 1,
      note: "",
      status: "Borrador",
      editableBy: [getRoleName(employee), "Administrador"],
    };
    appState.orders.unshift(activeLine);
  }
  appState.ui.activeOrdersArea = item.area;
  appState.ui.orderDraft = {
    area: item.area,
    item: item.name,
    quantity: activeLine.quantity || 1,
  };
  appState.ui.currentSection = "orders";
  renderApp();
}

function visibleShifts(employee) {
  const week = appState.ui.currentShiftWeek || "Semana actual";
  const shiftsForWeek = appState.shifts.filter((shift) => shift.week === week);
  if (appState.ui.currentView === "employee") {
    return shiftsForWeek.filter((shift) => shift.employeeId === employee.id);
  }
  if (appState.ui.currentView === "manager") {
    return shiftsForWeek.filter((shift) => shift.area === employee.area);
  }
  return shiftsForWeek;
}

function manageableShiftEmployees(employee) {
  return manageableEmployees(employee);
}

function employeesForArea(employees, area) {
  return employees.filter((item) => item.area === area);
}

function getShiftWeeks() {
  return ["Semana actual", "Semana 2", "Semana 3", "Semana 4"];
}

function getWeekOffsetDays(week) {
  const weeks = getShiftWeeks();
  const index = weeks.indexOf(week);
  return (index === -1 ? 0 : index) * 7;
}

function getNextShiftWeek(week) {
  const weeks = getShiftWeeks();
  const index = weeks.indexOf(week);
  if (index === -1) return weeks[1] ?? weeks[0];
  return weeks[Math.min(index + 1, weeks.length - 1)];
}

function formatShortDate(value) {
  const date = value instanceof Date ? value : new Date(value);
  return date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
  });
}

function formatLongDateTime(value) {
  const date = value instanceof Date ? value : new Date(value);
  return date.toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function buildPdfDocument(title, subtitle, columns, rows) {
  const headerHtml = columns.map((column) => `<th>${escapeHtml(column)}</th>`).join("");
  const rowsHtml = rows.length
    ? rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(String(cell ?? ""))}</td>`).join("")}</tr>`).join("")
    : `<tr><td colspan="${columns.length}">Sin datos para exportar.</td></tr>`;
  const generatedAt = new Date().toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  const businessLabel = `${appState.business.name} · ${appState.business.city}`;
  const logoMark = escapeHtml(appState.business.logoMark || "BF");

  return `<!doctype html>
  <html lang="es">
    <head>
      <meta charset="utf-8">
      <title>${escapeHtml(title)}</title>
      <style>
        :root {
          --ink: #2f2419;
          --muted: #6f6254;
          --line: #ddcfbf;
          --soft: #f7efe3;
          --panel: #fffaf4;
          --accent: #c86f31;
          --accent-strong: #8f3f17;
        }
        * { box-sizing: border-box; }
        body {
          font-family: Arial, sans-serif;
          color: var(--ink);
          margin: 0;
          padding: 28px;
          background: #fcf8f2;
        }
        .sheet {
          border: 1px solid var(--line);
          border-radius: 22px;
          background: var(--panel);
          padding: 24px;
        }
        .kicker {
          display: inline-block;
          margin-bottom: 8px;
          padding: 6px 10px;
          border-radius: 999px;
          background: #f6dfca;
          color: var(--accent-strong);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 18px;
          margin-bottom: 18px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .logo {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: inline-grid;
          place-items: center;
          background: var(--accent);
          color: white;
          font-weight: 700;
          letter-spacing: 0.08em;
        }
        .brand-copy small,
        .meta-grid small,
        .empty-note {
          color: var(--muted);
        }
        h1 {
          margin: 4px 0 6px;
          font-size: 26px;
        }
        p {
          margin: 0;
          color: var(--muted);
          line-height: 1.45;
        }
        .meta-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(180px, 1fr));
          gap: 10px;
          margin: 16px 0 18px;
          padding: 14px;
          border: 1px solid var(--line);
          border-radius: 16px;
          background: var(--soft);
        }
        .meta-item strong {
          display: block;
          margin-top: 2px;
          color: var(--ink);
        }
        table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid var(--line);
          border-radius: 16px;
          overflow: hidden;
        }
        th, td {
          border-bottom: 1px solid var(--line);
          padding: 11px 12px;
          text-align: left;
          vertical-align: top;
          line-height: 1.45;
          word-break: break-word;
        }
        th {
          background: var(--soft);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        tbody tr:nth-child(even) td {
          background: #fffdf9;
        }
        tr:last-child td {
          border-bottom: 0;
        }
        .footer {
          margin-top: 18px;
          padding-top: 14px;
          border-top: 1px solid var(--line);
          color: var(--muted);
          font-size: 12px;
        }
        @media print {
          body {
            background: white;
            padding: 0;
          }
          .sheet {
            border: 0;
            border-radius: 0;
            box-shadow: none;
            padding: 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="sheet">
        <div class="header">
          <div class="brand">
            <div class="logo">${logoMark}</div>
            <div class="brand-copy">
              <span class="kicker">BrasaFlow</span>
              <small>${escapeHtml(businessLabel)}</small>
              <h1>${escapeHtml(title)}</h1>
              <p>${escapeHtml(subtitle)}</p>
            </div>
          </div>
        </div>
        <div class="meta-grid">
          <div class="meta-item">
            <small>Documento</small>
            <strong>${escapeHtml(title)}</strong>
          </div>
          <div class="meta-item">
            <small>Generado</small>
            <strong>${escapeHtml(generatedAt)}</strong>
          </div>
        </div>
        <table>
          <thead><tr>${headerHtml}</tr></thead>
          <tbody>${rowsHtml}</tbody>
        </table>
        <div class="footer">
          Documento generado desde BrasaFlow para consulta, seguimiento o archivo interno.
        </div>
      </div>
    </body>
  </html>`;
}

function exportReportPdf(reportType) {
  const employee = getCurrentEmployee();
  let title = "";
  let subtitle = `${appState.business.name} · ${appState.business.city}`;
  let columns = [];
  let rows = [];

  if (reportType === "shifts") {
    const shifts = visibleShifts(employee);
    title = appState.ui.currentView === "employee" ? "Mis turnos" : "Turnos";
    subtitle = `${subtitle} · ${appState.ui.currentShiftWeek || "Semana actual"}`;
    columns = ["Dia", "Area", "Empleado", "Horario", "Nota"];
    rows = shifts.map((shift) => [
      shift.day,
      shift.area,
      getEmployeeById(shift.employeeId)?.name ?? "",
      shift.time,
      shift.note || "",
    ]);
  }

  if (reportType === "attendance") {
    const logs = getAttendanceLogsForView(employee)
      .slice()
      .sort((left, right) => new Date(right.recordedAt || `${right.date}T${right.clockIn || "00:00"}:00`) - new Date(left.recordedAt || `${left.date}T${left.clockIn || "00:00"}:00`))
      .slice(0, 30);
    title = appState.ui.currentView === "employee" ? "Mi fichaje" : "Resumen de fichaje";
    columns = appState.ui.currentView === "employee"
      ? ["Fecha", "Entrada", "Salida", "Horas", "Estado"]
      : ["Empleado", "Fecha", "Entrada", "Salida", "Horas", "Estado"];
    rows = logs.map((log) => {
      const base = [
        log.date,
        log.clockIn || "",
        log.clockOut || "",
        log.clockOut ? formatMinutesAsHours(log.minutesWorked) : "Abierto",
        log.clockOut ? (log.locationStatus || "Cerrado") : "En curso",
      ];
      return appState.ui.currentView === "employee"
        ? base
        : [getEmployeeById(log.employeeId)?.name ?? "", ...base];
    });
  }

  if (reportType === "temperatures") {
    const logs = visibleTemperatureLogs(employee)
      .slice()
      .sort((left, right) => new Date(right.recordedAt) - new Date(left.recordedAt))
      .slice(0, 30);
    title = "Registro de temperaturas";
    columns = ["Equipo", "Area", "Temperatura", "Fecha y hora", "Nota", "Autor"];
    rows = logs.map((log) => {
      const equipment = appState.temperatureEquipment.find((item) => item.id === log.equipmentId);
      return [
        equipment?.name ?? "Equipo",
        log.area,
        `${log.value} C`,
        formatLongDateTime(log.recordedAt),
        log.note || "",
        log.author || "",
      ];
    });
  }

  if (!title) return;
  const printWindow = window.open("", "_blank", "width=960,height=720");
  if (!printWindow) {
    alert("Activa las ventanas emergentes para exportar.");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(buildPdfDocument(title, subtitle, columns, rows));
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function exportLaborDocument(docId) {
  const documentItem = appState.laborDocuments.find((item) => item.id === docId);
  if (!documentItem) return;
  const currentEmployee = getCurrentEmployee();
  const allowedDocuments = visibleLaborDocuments(currentEmployee);
  if (!allowedDocuments.some((item) => item.id === docId)) return;
  const employee = getEmployeeById(documentItem.employeeId);
  const html = buildPdfDocument(
    documentItem.title,
    `${appState.business.name} · ${documentItem.type} · ${documentItem.period || "Sin periodo"}`,
    ["Empleado", "Area", "Tipo", "Periodo", "Subido", "Autor", "Visibilidad", "Resumen"],
    [[
      employee?.name ?? "Empleado",
      documentItem.area || employee?.area || "",
      documentItem.type,
      documentItem.period || "",
      formatLongDateTime(documentItem.uploadedAt),
      documentItem.author || "Empresa",
      documentItem.visibility || "Empleado y empresa",
      documentItem.summary || "",
    ]],
  );
  const printWindow = window.open("", "_blank", "width=960,height=720");
  if (!printWindow) {
    alert("Activa las ventanas emergentes para exportar.");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function getTimeSlotOptions() {
  const slots = [];
  for (let hour = 6; hour <= 23; hour += 1) {
    for (const minute of [0, 30]) {
      if (hour === 23 && minute === 30) continue;
      slots.push(`${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`);
    }
  }
  return slots;
}

function getPlannerEmployee(employeePool, fallbackEmployee) {
  const planned = employeePool.find((item) => item.id === appState.ui.shiftPlannerEmployeeId);
  if (planned) return planned;
  const fallback = employeePool.find((item) => item.id === fallbackEmployee.id) ?? employeePool[0] ?? fallbackEmployee;
  appState.ui.shiftPlannerEmployeeId = fallback?.id ?? "";
  return fallback;
}

function getShiftForEmployeeDay(employeeId, week, day) {
  return appState.shifts.find((shift) => shift.employeeId === employeeId && shift.week === week && shift.day === day);
}

function getTemplatesForArea(area) {
  return appState.shiftTemplates.filter((template) => template.area === area);
}

function startOfWeek(baseDate = new Date()) {
  const date = new Date(baseDate);
  const day = date.getDay();
  const offset = day === 0 ? -6 : 1 - day;
  date.setDate(date.getDate() + offset);
  date.setHours(0, 0, 0, 0);
  return date;
}

function getDateForShift(week, day) {
  const labels = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
  const index = labels.indexOf(day);
  if (index === -1) return null;
  const monday = startOfWeek(new Date());
  const target = new Date(monday);
  const weekOffset = getWeekOffsetDays(week);
  target.setDate(monday.getDate() + weekOffset + index);
  return target;
}

function getShiftWeekLabel(week) {
  const from = getDateForShift(week, "Lunes");
  const to = getDateForShift(week, "Domingo");
  if (!from || !to) return week;
  return `${formatShortDate(from)} - ${formatShortDate(to)}`;
}

function getShiftDateLabel(week, day) {
  const date = getDateForShift(week, day);
  if (!date) return day;
  return `${day} ${formatShortDate(date)}`;
}

function getShiftStartDateTime(shift) {
  const date = getDateForShift(shift.week, shift.day);
  const range = parseShiftTimeRange(shift.time);
  if (!date || !range) return null;
  const target = new Date(date);
  target.setHours(Math.floor(range.start / 60), range.start % 60, 0, 0);
  return target;
}

function getNextShiftForEmployee(employeeId) {
  const now = new Date();
  return appState.shifts
    .filter((shift) => shift.employeeId === employeeId)
    .map((shift) => ({ shift, startsAt: getShiftStartDateTime(shift) }))
    .filter((item) => item.startsAt && item.startsAt >= now)
    .sort((left, right) => left.startsAt - right.startsAt)[0] ?? null;
}

function getShiftCountdownLabel(shiftDate) {
  const now = new Date();
  const diffMinutes = Math.max(0, Math.round((shiftDate - now) / 60000));
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;
  if (diffMinutes < 60) return `En ${minutes} min ingresas a tu turno`;
  if (minutes === 0) return `En ${hours} hora${hours === 1 ? "" : "s"} trabajas`;
  return `En ${hours} h ${minutes} min ingresas a tu turno`;
}

function maybeNotifyUpcomingShift(employee) {
  if (!("Notification" in window)) return;
  if (Notification.permission !== "granted") return;
  const nextShift = getNextShiftForEmployee(employee.id);
  if (!nextShift?.startsAt) return;
  const diffMinutes = Math.round((nextShift.startsAt - new Date()) / 60000);
  if (diffMinutes < 0 || diffMinutes > 120) return;
  const notificationKey = `${nextShift.shift.id}-${nextShift.startsAt.toISOString()}`;
  if (appState.ui.lastShiftNotificationKey === notificationKey) return;
  appState.ui.lastShiftNotificationKey = notificationKey;
  new Notification("BrasaFlow", {
    body: `${getShiftCountdownLabel(nextShift.startsAt)} · ${nextShift.shift.time}`,
  });
}

function requestAppliesToShiftDay(request, week, day) {
  const targetDate = getDateForShift(week, day);
  if (!targetDate) return false;
  const from = new Date(request.from);
  const to = new Date(request.to);
  from.setHours(0, 0, 0, 0);
  to.setHours(23, 59, 59, 999);
  return targetDate >= from && targetDate <= to;
}

function getRequestsForEmployeeDay(employeeId, week, day) {
  return appState.timeOffRequests.filter((request) => request.employeeId === employeeId && requestAppliesToShiftDay(request, week, day));
}

function getDayAvailability(employeeId, week, day) {
  const requests = getRequestsForEmployeeDay(employeeId, week, day);
  const approved = requests.find((request) => request.status === "Aprobada");
  if (approved) {
    return { blocked: true, level: "approved", label: approved.type, request: approved };
  }
  const pending = requests.find((request) => request.status === "Pendiente");
  if (pending) {
    return { blocked: false, level: "pending", label: `${pending.type} pendiente`, request: pending };
  }
  return { blocked: false, level: "free", label: "Disponible", request: null };
}

function parseShiftTimeRange(time) {
  const parts = String(time).split("-").map((item) => item.trim());
  if (parts.length !== 2) return null;
  const toMinutes = (value) => {
    const [hours, minutes] = value.split(":").map(Number);
    if (Number.isNaN(hours) || Number.isNaN(minutes)) return null;
    return hours * 60 + minutes;
  };
  const start = toMinutes(parts[0]);
  const end = toMinutes(parts[1]);
  if (start === null || end === null) return null;
  return { start, end };
}

function detectShiftConflicts(shifts) {
  const conflicts = [];
  for (let index = 0; index < shifts.length; index += 1) {
    for (let cursor = index + 1; cursor < shifts.length; cursor += 1) {
      const first = shifts[index];
      const second = shifts[cursor];
      if (first.employeeId !== second.employeeId) continue;
      if (first.day !== second.day || first.week !== second.week) continue;
      const firstRange = parseShiftTimeRange(first.time);
      const secondRange = parseShiftTimeRange(second.time);
      if (!firstRange || !secondRange) continue;
      const overlap = firstRange.start < secondRange.end && secondRange.start < firstRange.end;
      if (overlap) {
        conflicts.push({
          employeeId: first.employeeId,
          day: first.day,
          week: first.week,
          firstId: first.id,
          secondId: second.id,
        });
      }
    }
  }
  return conflicts;
}

function visibleRequests(employee) {
  if (appState.ui.currentView === "employee") {
    return appState.timeOffRequests.filter((request) => request.employeeId === employee.id);
  }
  if (appState.ui.currentView === "manager") {
    return appState.timeOffRequests.filter((request) => getEmployeeById(request.employeeId)?.area === employee.area);
  }
  return appState.timeOffRequests;
}

function countPendingRequests(employee) {
  return visibleRequests(employee).filter((request) => request.status === "Pendiente").length;
}

function statusClass(value) {
  if (["Activa", "Aprobada", "Borrador", "Cerrado", "Recibido"].includes(value)) return "ok";
  if (["Pendiente", "En revision", "Recibido con incidencia"].includes(value)) return "warn";
  return "danger";
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttribute(text) {
  return escapeHtml(text)
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderOptions(items, getValue, getLabel, selectedValue) {
  return items
    .map((item) => {
      const value = getValue(item);
      const selected = value === selectedValue ? "selected" : "";
      return `<option value="${escapeHtml(value)}" ${selected}>${escapeHtml(getLabel(item))}</option>`;
    })
    .join("");
}

function renderApp() {
  const currentUser = getCurrentUser();
  const appShell = document.getElementById("app-shell");
  applyBrandTheme();
  if (!currentUser) {
    appShell.hidden = true;
    renderAuth();
    bindAuthEvents();
    return;
  }
  appShell.hidden = false;
  syncSessionWithUser(currentUser);
  clearAuth();
  renderSidebar();
  renderHero();
  renderDashboard();
  if (currentUser.view !== "admin") {
    maybeNotifyUpcomingShift(getCurrentEmployee());
  }
  renderShifts();
  renderAttendance();
  renderTimeOff();
  renderChat();
  renderInventory();
  renderOrders();
  renderTemperatures();
  renderAllergens();
  renderRecipes();
  renderDocuments();
  renderEmployees();
  renderSettings();
  renderSectionVisibility();
  bindEvents();
  scheduleSaveState();
}

function syncSessionWithUser(user) {
  appState.ui.currentView = user.view;
  if (user.view === "admin") {
    const hasSelectedEmployee = appState.employees.some((item) => item.id === appState.ui.currentEmployeeId);
    if (!hasSelectedEmployee) {
      appState.ui.currentEmployeeId = user.employeeId || appState.employees[0]?.id || null;
    }
    if (!appState.ui.shiftPlannerEmployeeId) {
      appState.ui.shiftPlannerEmployeeId = appState.ui.currentEmployeeId;
    }
    return;
  }
  if (user.employeeId) {
    appState.ui.currentEmployeeId = user.employeeId;
    if (!appState.ui.shiftPlannerEmployeeId || appState.ui.shiftPlannerEmployeeId !== user.employeeId) {
      appState.ui.shiftPlannerEmployeeId = user.employeeId;
    }
  }
}

function renderAuth() {
  const authRoot = document.getElementById("auth-root");
  authRoot.innerHTML = `
    <section class="auth-shell">
      <div class="auth-card panel">
        <span class="brand-kicker">Acceso BrasaFlow</span>
        <h1>Entrar a tu espacio</h1>
        <p>Ahora cada perfil entra con su cuenta y ve solo el panel que le corresponde.</p>
        <form id="login-form" class="auth-form">
          <label class="field">
            <span>Email</span>
            <input name="email" type="email" placeholder="tu@correo.com" required>
          </label>
          <label class="field">
            <span>Clave</span>
            <input name="password" type="password" placeholder="••••" required>
          </label>
          <button class="action-btn primary" type="submit">Entrar</button>
        </form>
        <div class="auth-demo">
          <h2>Cuentas demo</h2>
          <ul class="mini-list">
            <li>Empleado: lucia@brasaflow-demo.com / 1234</li>
            <li>Encargado: paula@brasaflow-demo.com / 1234</li>
            <li>Empresa: admin@brasaflow-demo.com / 1234</li>
          </ul>
        </div>
      </div>
    </section>
  `;
}

function clearAuth() {
  const authRoot = document.getElementById("auth-root");
  authRoot.innerHTML = "";
}

function renderHero() {
  const copy = heroCopy[appState.ui.currentView];
  document.getElementById("hero-badge").textContent = copy.badge;
  document.getElementById("hero-title").textContent = copy.title;
  document.getElementById("hero-description").textContent = copy.description;
  document.getElementById("hero-mode").textContent = copy.mode;
  document.querySelector(".hero-stat strong").textContent = appState.business.name;
  document.querySelector(".hero-stat .stat-label").textContent = appState.business.logoMark
    ? `Marca ${appState.business.logoMark.toUpperCase()}`
    : "Negocio";
}

function renderDashboard() {
  const employee = getCurrentEmployee();
  const vacation = calculateVacationBalance(employee);
  const shifts = visibleShifts(employee);
  const orderLinesOpen = visibleOrders(employee).filter((item) => !["Recibido", "Recibido con incidencia"].includes(item.status)).length;
  const urgentChats = visibleChats(employee).filter((chat) => chat.urgent).length;
  const nextShift = getNextShiftForEmployee(employee.id);
  const attendance = getAttendanceSummary(employee.id);
  const contractHighlights = getContractHighlights(employee);
  const dashboardEl = document.getElementById("dashboard-section");

  dashboardEl.innerHTML = `
    <div class="section-header">
      <div>
        <h3>Resumen del dia</h3>
        <p>${employee.name} entra como ${getRoleName(employee)} y ve solo lo que le corresponde.</p>
      </div>
      <div class="action-row">
        <button class="action-btn primary" data-section-target="shifts">Ver turnos</button>
        <button class="action-btn secondary" data-section-target="attendance">Abrir fichaje</button>
      </div>
    </div>
    ${nextShift ? `
      <div class="next-shift-banner">
        <strong>${getShiftCountdownLabel(nextShift.startsAt)}</strong>
        <span>${getShiftDateLabel(nextShift.shift.week, nextShift.shift.day)} · ${nextShift.shift.time}</span>
        ${("Notification" in window) && Notification.permission !== "granted" ? `<div class="action-row"><button class="badge-btn" data-action="enable-notifications">Activar avisos</button></div>` : ""}
      </div>
    ` : ""}
    <div class="cards-grid">
      <article class="stat-card">
        <span class="status-pill ok">Turnos visibles</span>
        <strong>${shifts.length}</strong>
        <small class="muted">${appState.ui.currentView === "employee" ? "Solo los tuyos" : appState.ui.currentView === "manager" ? "Solo tu area" : "Todo el negocio"}</small>
      </article>
      <article class="stat-card">
        <span class="status-pill warn">Vacaciones disponibles</span>
        <strong>${vacation.available} dias</strong>
        <small class="muted">${vacation.accrued} acumulados · ${vacation.used} usados</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ${urgentChats ? "danger" : "ok"}">Avisos urgentes</span>
        <strong>${urgentChats}</strong>
        <small class="muted">Mensajes con prioridad alta y aviso al movil</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ${orderLinesOpen ? "warn" : "ok"}">Pedidos abiertos</span>
        <strong>${orderLinesOpen}</strong>
        <small class="muted">Lineas aun activas o esperando recepcion</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ${attendance.openLog ? "warn" : "ok"}">Fichaje</span>
        <strong>${attendance.openLog ? `Dentro desde ${attendance.openLog.clockIn}` : formatMinutesAsHours(attendance.weekMinutes)}</strong>
        <small class="muted">${attendance.openLog ? "Tu jornada sigue abierta" : "Horas registradas esta semana"}</small>
      </article>
    </div>
    <div class="two-column" style="margin-top: 18px;">
      <article class="list-card">
        <h4>${appState.ui.currentView === "admin" ? "Persona revisada" : "Perfil actual"}</h4>
        <div class="pill-row" style="margin-top: 10px;">
          ${contractHighlights.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}
        </div>
      </article>
      <article class="list-card">
        <h4>${appState.ui.currentView === "admin" ? "Saldo de la persona revisada" : "Saldo disponible hoy"}</h4>
        <div class="metric-ring" style="--progress: ${(vacation.available / Math.max(employee.annualVacationDays, 1)) * 360}deg;">
          <strong>${vacation.available}</strong>
        </div>
        <p class="muted" style="text-align: center;">${appState.ui.currentView === "admin" ? "Dias disponibles en la ficha que estas revisando." : "Dias listos para pedir hoy."}</p>
      </article>
    </div>
  `;
}

function renderTimeOff() {
  const employee = getCurrentEmployee();
  const balance = calculateVacationBalance(employee);
  const requests = visibleRequests(employee);
  const canApprove = appState.ui.currentView !== "employee";
  const isEmployeeView = appState.ui.currentView === "employee";
  const requestableEmployees = manageableEmployees(employee);
  const pendingCount = requests.filter((request) => request.status === "Pendiente").length;
  const approvedCount = requests.filter((request) => request.status === "Aprobada").length;
  const rejectedCount = requests.filter((request) => request.status === "Rechazada").length;

  document.getElementById("time-off-section").innerHTML = `
    <div class="section-header">
      <div>
        <h3>Vacaciones y ausencias</h3>
        <p>${isEmployeeView ? "Aca ves tu saldo y haces solicitudes sin vueltas." : "Aca revisas saldo, solicitudes y aprobaciones de forma rapida."}</p>
      </div>
      <div class="action-row">
        <button class="action-btn primary" data-open-form="timeoff-form">Nueva solicitud</button>
      </div>
    </div>
    <div class="cards-grid">
      <article class="stat-card">
        <span class="status-pill ok">Disponibles</span>
        <strong>${balance.available} dias</strong>
        <small class="muted">${balance.used} usados · ${balance.accrued} acumulados</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ${pendingCount ? "warn" : "ok"}">Pendientes</span>
        <strong>${pendingCount}</strong>
        <small class="muted">Solicitudes esperando revision</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ok">Aprobadas</span>
        <strong>${approvedCount}</strong>
        <small class="muted">Ya confirmadas en esta vista</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ${rejectedCount ? "warn" : "ok"}">${rejectedCount ? "Rechazadas" : "Regla actual"}</span>
        <strong>${rejectedCount ? rejectedCount : `${appState.settings.annualVacationDays} dias`}</strong>
        <small class="muted">${rejectedCount ? "Solicitudes cerradas sin aprobar" : `Acumulacion ${appState.settings.accrualMode.toLowerCase()}`}</small>
      </article>
    </div>
    <div class="inline-form" id="timeoff-form" hidden>
      <h4>Crear solicitud</h4>
      <form data-form="timeoff" class="form-grid">
        <label class="field">
          <span>Empleado</span>
          <select name="employeeId">${renderOptions(requestableEmployees, (item) => item.id, (item) => item.name, employee.id)}</select>
        </label>
        <label class="field">
          <span>Tipo</span>
          <select name="type">
            <option>Vacaciones</option>
            <option>Ausencia</option>
            <option>Permiso</option>
          </select>
        </label>
        <label class="field">
          <span>Desde</span>
          <input type="date" name="from" required>
        </label>
        <label class="field">
          <span>Hasta</span>
          <input type="date" name="to" required>
        </label>
        <div class="form-actions">
          <button class="action-btn primary" type="submit">Guardar solicitud</button>
        </div>
      </form>
    </div>
    ${requests.length ? `<h4 class="subsection-title" style="margin-top: 18px;">Solicitudes</h4>` : ""}
    <div class="table-wrap" style="margin-top: 12px;">
      <table>
        <thead>
          <tr>
            ${isEmployeeView ? "" : "<th>Empleado</th>"}
            <th>Tipo</th>
            <th>Desde</th>
            <th>Hasta</th>
            <th>Estado</th>
            ${canApprove ? "<th>Accion</th>" : ""}
          </tr>
        </thead>
        <tbody>
          ${requests.map((request) => `
            <tr>
              ${isEmployeeView ? "" : `<td>${getEmployeeById(request.employeeId)?.name ?? "-"}</td>`}
              <td>${request.type}</td>
              <td>${request.from}</td>
              <td>${request.to}</td>
              <td><span class="status-pill ${statusClass(request.status)}">${request.status}</span></td>
              ${canApprove ? `
                <td>
                  ${request.status === "Pendiente" ? `
                    <div class="pill-row">
                      <button class="mini-action" data-action="approve-request" data-id="${request.id}">Aprobar</button>
                      <button class="mini-action alt" data-action="reject-request" data-id="${request.id}">Rechazar</button>
                    </div>
                  ` : "<small class='muted'>Sin cambios</small>"}
                </td>` : ""}
            </tr>
          `).join("") || `<tr><td colspan="${canApprove ? (isEmployeeView ? 5 : 6) : (isEmployeeView ? 4 : 5)}"><div class="empty-note">Todavia no hay solicitudes cargadas en esta vista.</div></td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

function renderChat() {
  const employee = getCurrentEmployee();
  const chats = visibleChats(employee);
  const activeArea = getActiveChatArea(employee);
  const chatAreas = visibleChatAreas(employee);
  const channelMessages = chats.filter((chat) => chat.area === activeArea);
  const retentionDays = Number(appState.settings.chatRetentionDays || 14);
  const urgentCount = chats.filter((chat) => chat.urgent).length;

  document.getElementById("chat-section").innerHTML = `
    <div class="section-header">
      <div>
        <h3>Chats y avisos</h3>
        <p>${canSeeAllChats() ? "Todos los canales en un solo lugar, con mensajes recientes y avisos claros." : "General y tu area, sin ruido innecesario."}</p>
      </div>
      <div class="action-row">
        <span class="badge-btn">Visibles ${retentionDays} dias</span>
      </div>
    </div>
    <div class="cards-grid">
      <article class="stat-card">
        <span class="status-pill ok">Canal activo</span>
        <strong>${activeArea}</strong>
        <small class="muted">${channelMessages.length} mensajes visibles</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ${urgentCount ? "danger" : "ok"}">Urgentes</span>
        <strong>${urgentCount}</strong>
        <small class="muted">${urgentCount ? "Avisos que conviene revisar primero" : "No hay avisos urgentes ahora mismo"}</small>
      </article>
    </div>
    <div class="chat-tabs">
      ${chatAreas.map((area) => `
        <button class="chat-tab ${area === activeArea ? "active" : ""}" data-chat-area="${area}">
          ${area}
        </button>
      `).join("")}
    </div>
    <div class="chat-room">
      <div class="chat-room-header">
        <div>
          <h4>Canal ${activeArea}</h4>
          <p>Solo mensajes recientes y faciles de seguir.</p>
        </div>
      </div>
      <div class="chat-thread">
        ${channelMessages.length ? channelMessages.map((chat) => `
          <article class="chat-message ${chat.urgent ? "urgent" : ""} ${chat.author === employee.name ? "own" : ""}">
            <div class="chat-meta">
              <strong>${chat.author}</strong>
              <span>${formatChatTimestamp(chat.createdAt)}</span>
            </div>
            <p>${chat.message}</p>
            ${chat.urgent ? `<span class="priority-pill high">Urgente</span>` : ""}
          </article>
        `).join("") : `
          <div class="empty-note">Todavia no hay mensajes recientes en este canal.</div>
        `}
      </div>
      <form data-form="chat" class="chat-composer">
        <input type="hidden" name="area" value="${activeArea}">
        <label class="chat-composer-box">
          <textarea name="message" rows="2" required placeholder="Escribe un mensaje en ${activeArea}..."></textarea>
        </label>
        <div class="chat-composer-actions">
          <label class="check-row chat-urgent-toggle">
            <input type="checkbox" name="urgent">
            <span>Urgente</span>
          </label>
          <small class="muted">Usalo solo si el equipo necesita verlo ya.</small>
          <button class="action-btn primary" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  `;
}

function renderAttendance() {
  const employee = getCurrentEmployee();
  const currentUser = getCurrentUser();
  const sectionEl = document.getElementById("attendance-section");
  const visibleLogs = getAttendanceLogsForView(employee);
  const summary = getAttendanceSummary(employee.id);
  const contractHighlights = getContractHighlights(employee);
  const canSelfClock = canUseSelfClock();
  const teamToday = visibleLogs.filter((log) => log.date === getTodayKey());
  const recentLogs = (appState.ui.currentView === "employee"
    ? summary.recentLogs
    : visibleLogs
      .slice()
      .sort((left, right) => `${right.date} ${right.clockIn}`.localeCompare(`${left.date} ${left.clockIn}`))
      .slice(0, 10));

  sectionEl.innerHTML = `
    <div class="section-header">
      <div>
        <h3>${appState.ui.currentView === "employee" ? "Mi fichaje" : appState.ui.currentView === "manager" ? `Fichaje de ${employee.area}` : "Control de fichaje"}</h3>
        <p>${appState.ui.currentView === "employee"
          ? "Entrada, salida y horas en una sola vista."
          : "Horas, jornadas abiertas e incidencias en una vista clara."}</p>
      </div>
      <div class="action-row">
        <button class="action-btn secondary" data-action="export-report" data-report="attendance">Exportar PDF</button>
        ${canSelfClock
          ? (summary.openLog
            ? `<button class="action-btn primary" data-action="clock-out">Fichar salida</button>`
            : `<button class="action-btn primary" data-action="clock-in">Fichar entrada</button>`)
          : ""}
      </div>
    </div>
    <div class="cards-grid">
      <article class="stat-card">
        <span class="status-pill ${summary.openLog ? "warn" : "ok"}">Estado de hoy</span>
        <strong>${summary.openLog ? `Dentro desde ${summary.openLog.clockIn}` : "Sin jornada abierta"}</strong>
        <small class="muted">${canSelfClock ? "Accion rapida desde el movil" : "Solo consulta en este perfil"}</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ok">Horas esta semana</span>
        <strong>${formatMinutesAsHours(summary.weekMinutes)}</strong>
        <small class="muted">${summary.totalShifts} jornadas registradas</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ok">Horas este mes</span>
        <strong>${formatMinutesAsHours(summary.monthMinutes)}</strong>
        <small class="muted">Resumen util para empresa y empleado</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ${teamToday.length ? "warn" : "ok"}">Fichajes hoy</span>
        <strong>${teamToday.length}</strong>
        <small class="muted">${appState.ui.currentView === "employee" ? "Tus movimientos de hoy" : "Movimientos visibles en esta vista"}</small>
      </article>
    </div>
    <div class="two-column" style="margin-top: 18px;">
      <article class="list-card">
        <h4>${appState.ui.currentView === "employee" ? "Tus ultimos fichajes" : "Ultimos fichajes visibles"}</h4>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                ${appState.ui.currentView === "employee" ? "" : "<th>Empleado</th>"}
                <th>Fecha</th>
                <th>Entrada</th>
                <th>Salida</th>
                <th>Horas</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              ${recentLogs.map((log) => {
                const logEmployee = getEmployeeById(log.employeeId);
                const worked = log.clockOut ? formatMinutesAsHours(log.minutesWorked) : `<small class="muted">Abierto</small>`;
                return `
                  <tr>
                    ${appState.ui.currentView === "employee" ? "" : `<td>${logEmployee?.name ?? "Equipo"}</td>`}
                    <td>${formatShortDate(log.date)}</td>
                    <td>${log.clockIn}</td>
                    <td>${log.clockOut || `<small class="muted">Pendiente</small>`}</td>
                    <td>${worked}</td>
                    <td><span class="status-pill ${log.clockOut ? "ok" : "warn"}">${log.clockOut ? (log.locationStatus || "Cerrado") : "En curso"}</span></td>
                  </tr>
                `;
              }).join("") || `<tr><td colspan="${appState.ui.currentView === "employee" ? 5 : 6}"><div class="empty-note">Todavia no hay fichajes cargados.</div></td></tr>`}
            </tbody>
          </table>
        </div>
      </article>
      <article class="list-card">
        <h4>Referencia del fichaje</h4>
        <ul class="rule-list">
          <li>${hasConfiguredWorksiteLocation()
            ? `${appState.settings.worksiteLabel} configurado con radio de ${appState.settings.clockInRadiusMeters} m.`
            : "Todavia no hay un local configurado para validar ubicacion."}</li>
          <li>Modo actual: ${appState.settings.clockInGeoMode}.</li>
          <li>${appState.ui.currentView === "employee"
            ? "Te ayuda a entender horas y jornadas registradas."
            : "Deja visible el control horario por persona."}</li>
        </ul>
        ${currentUser?.view === "admin" ? `
          <div class="info-note" style="margin-top: 16px;">
            <strong>Para empresa</strong>
            <span>Podes usar el selector lateral para cambiar de empleado y revisar su ficha, sus turnos, sus vacaciones y ahora tambien su fichaje.</span>
          </div>
        ` : ""}
      </article>
    </div>
    <article class="list-card" style="margin-top: 18px;">
      <h4>Condiciones clave del contrato</h4>
      <div class="pill-row" style="margin-top: 10px;">
        ${contractHighlights.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderInventory() {
  const employee = getCurrentEmployee();
  const inventory = visibleInventory(employee);
  const editable = canEditInventory(employee);
  const sectionScope = appState.ui.currentView === "admin" ? "Todo el negocio" : employee.area;
  const groupedAreas = getOrderAreasForView(employee);
  const areaOptions = appState.ui.currentView === "admin"
    ? getAreaOptions().filter((area) => area !== "General")
    : [getAreaForView(employee)];

  document.getElementById("inventory-section").innerHTML = `
    <div class="section-header">
      <div>
        <h3>Lista base de productos</h3>
        <p>Referencia simple por zona. Aca ves que productos deberia tener cada area y, si hace falta, pulsas Pedir.</p>
      </div>
      <div class="action-row">
        ${editable ? `<button class="action-btn primary" data-open-form="inventory-form">Agregar producto</button>` : ""}
      </div>
    </div>
    <div class="cards-grid">
      <article class="stat-card">
        <span class="status-pill ok">Vista actual</span>
        <strong>${sectionScope}</strong>
        <small class="muted">${inventory.length} productos visibles</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ok">Zonas activas</span>
        <strong>${groupedAreas.length}</strong>
        <small class="muted">Cada una con su propia lista base</small>
      </article>
    </div>
    <div class="inline-form" id="inventory-form" hidden ${editable ? "" : "disabled"}>
      <h4>Agregar producto</h4>
      <form data-form="inventory" class="form-grid">
        <label class="field">
          <span>Producto</span>
          <input name="name" required placeholder="Ejemplo: Harina 00">
        </label>
        <label class="field">
          <span>Area</span>
          <select name="area">${renderOptions(areaOptions, (item) => item, (item) => item, getAreaForView(employee))}</select>
        </label>
        <label class="field">
          <span>Como se suele pedir</span>
          <input name="unit" placeholder="Opcional: kg, litros, cajas, botellas">
        </label>
        <div class="form-actions">
          <button class="action-btn primary" type="submit">Guardar producto</button>
        </div>
      </form>
    </div>
    <div class="stack" style="margin-top: 18px;">
      ${groupedAreas.map((area) => {
        const areaItems = inventory.filter((item) => item.area === area);
        return `
          <article class="list-card">
            <div class="section-header compact-header">
              <div>
                <h4>${area}</h4>
                <p>${areaItems.length} productos base</p>
              </div>
              <div class="action-row">
                <button class="badge-btn" data-action="open-area-orders" data-area="${area}">Revisar pedidos</button>
              </div>
            </div>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Formato</th>
                    <th>Estado</th>
                    <th>Accion</th>
                  </tr>
                </thead>
                <tbody>
                  ${areaItems.map((item) => {
                    const orderEntry = getOrderEntryForItem(item.area, item.name);
                    const orderStatus = orderEntry
                      ? orderEntry.status === "Cerrado"
                        ? "Esperando recepcion"
                        : "En pedido"
                      : "Sin pedir";
                    const orderStatusClass = orderEntry
                      ? orderEntry.status === "Cerrado"
                        ? "warn"
                        : "ok"
                      : "ok";
                    return `
                      <tr>
                        <td>${item.name}</td>
                        <td>${item.unit || `<small class="muted">Sin detalle</small>`}</td>
                        <td><span class="status-pill ${orderStatusClass}">${orderStatus}</span></td>
                        <td>
                          ${(canEditOrders(employee) || appState.ui.currentView === "admin")
                            ? `<button class="badge-btn" data-action="send-to-order" data-id="${item.id}">${itemsAlreadyInOrder(item.area).has(item.name) ? "Editar pedido" : "Pedir"}</button>`
                            : `<small class="muted">Solo consulta</small>`}
                        </td>
                      </tr>
                    `;
                  }).join("") || `<tr><td colspan="4"><div class="empty-note">Todavia no hay productos cargados en ${area}.</div></td></tr>`}
                </tbody>
              </table>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderOrders() {
  const employee = getCurrentEmployee();
  const orders = visibleOrders(employee);
  const editable = canEditOrders(employee) || appState.ui.currentView === "admin";
  const draft = appState.ui.orderDraft ?? {};
  const availableAreas = getOrderAreasForView(employee);
  const selectedArea = getActiveOrdersArea(employee);
  const areaInventory = inventoryItemsForArea(employee, selectedArea);
  const areaOrders = orders.filter((order) => order.area === selectedArea);
  const activeOrders = areaOrders.filter((order) => !["Recibido", "Recibido con incidencia"].includes(order.status));
  const editableOrders = activeOrders.filter((order) => order.status !== "Cerrado");
  const receivableOrders = activeOrders.filter((order) => order.status === "Cerrado");
  const historyOrders = areaOrders.filter((order) => ["Recibido", "Recibido con incidencia"].includes(order.status));
  const completedLines = historyOrders.length;
  const closedLines = receivableOrders.length;
  const editableLines = editableOrders.length;
  const focusedItem = draft.area === selectedArea ? draft.item : "";

  document.getElementById("orders-section").innerHTML = `
    <div class="section-header">
      <div>
        <h3>Seguimiento de pedidos</h3>
        <p>${editable ? "Desde Inventario marcas un producto con Pedir. Aca completas cantidad, revisas el estado y registras lo que llego." : "Tu rol puede revisar el estado de los pedidos de esta zona."}</p>
      </div>
      <div class="action-row">
        ${availableAreas.map((area) => `<button class="badge-btn ${area === selectedArea ? "active-filter" : ""}" data-action="set-orders-area" data-area="${area}">${area}</button>`).join("")}
      </div>
    </div>
    <div class="cards-grid">
      <article class="stat-card">
        <span class="status-pill ok">Zona activa</span>
        <strong>${selectedArea}</strong>
        <small class="muted">${areaInventory.length} productos base disponibles</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ${editableLines ? "warn" : "ok"}">Pedido en curso</span>
        <strong>${editableLines}</strong>
        <small class="muted">Lineas que aun estas armando o revisando</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ${closedLines ? "warn" : "ok"}">Pendientes de recibir</span>
        <strong>${closedLines}</strong>
        <small class="muted">Lineas ya cerradas y esperando entrega</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ${completedLines ? "ok" : "warn"}">Historial resuelto</span>
        <strong>${completedLines}</strong>
        <small class="muted">Lineas ya recibidas</small>
      </article>
    </div>
    <div class="inline-form">
      <h4>Pedido actual de ${selectedArea}</h4>
      <p class="muted" style="margin-top: -6px;">${focusedItem ? `Llegaste desde Inventario con ${escapeHtml(focusedItem)}. Ajusta cantidad o nota y guarda.` : "Aca aparecen solo los productos que ya marcaste con Pedir."}</p>
      <form data-form="order-bulk" class="stack">
        <input type="hidden" name="area" value="${selectedArea}">
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Unidad</th>
                <th>Cantidad a pedir</th>
                <th>Nota</th>
                <th>Estado</th>
                ${editable ? "<th>Accion</th>" : ""}
              </tr>
            </thead>
            <tbody>
              ${editableOrders.map((orderLine) => {
                const focused = focusedItem === orderLine.item;
                const currentStatus = orderLine.status || "Borrador";
                return `
                  <tr class="${focused ? "order-focus-row" : ""}">
                    <td>${orderLine.item}</td>
                    <td>${orderLine.unit || `<small class="muted">Sin detalle</small>`}</td>
                    <td>
                      ${editable
                        ? `<input type="number" min="0" step="0.1" name="qty-${orderLine.id}" placeholder="0" value="${focused ? (draft.quantity || orderLine.quantity || 1) : (orderLine.quantity ?? "")}">`
                        : (orderLine.quantity ?? `<small class="muted">-</small>`)}
                    </td>
                    <td>
                      ${editable
                        ? `<input name="note-${orderLine.id}" placeholder="Opcional" value="${escapeAttribute(orderLine.note || "")}">`
                        : (orderLine.note ? escapeHtml(orderLine.note) : `<small class="muted">Sin nota</small>`)}
                    </td>
                    <td>
                      ${editable
                        ? `<select name="status-${orderLine.id}">
                            <option value="Borrador" ${currentStatus === "Borrador" ? "selected" : ""}>Borrador</option>
                            <option value="Pendiente" ${currentStatus === "Pendiente" ? "selected" : ""}>Pendiente</option>
                            <option value="Cerrado" ${currentStatus === "Cerrado" ? "selected" : ""}>Cerrado</option>
                          </select>`
                        : `<span class="status-pill ${statusClass(currentStatus)}">${currentStatus}</span>`}
                    </td>
                    ${editable ? `<td><button class="mini-action alt" type="button" data-action="delete-order-line" data-id="${orderLine.id}">Quitar</button></td>` : ""}
                  </tr>
                `;
              }).join("") || `<tr><td colspan="${editable ? 6 : 5}"><div class="empty-note">Todavia no hay lineas en curso para ${selectedArea}. Ve a Inventario y pulsa Pedir en el producto que haga falta.</div></td></tr>`}
            </tbody>
          </table>
        </div>
        ${editable ? `
          <div class="form-actions">
            <button class="action-btn primary" type="submit" ${editableOrders.length ? "" : "disabled"}>Guardar pedido actual</button>
          </div>
        ` : ""}
      </form>
    </div>
    <div class="inline-form" style="margin-top: 18px;">
      <h4>Recepcion del pedido</h4>
      <p class="muted" style="margin-top: -6px;">Aca aparecen solo las lineas ya cerradas y listas para recibir.</p>
      <form data-form="order-reception" class="stack">
        <input type="hidden" name="area" value="${selectedArea}">
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Pedido</th>
                <th>Recibido</th>
                <th>Diferencia</th>
                <th>Observacion</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              ${receivableOrders.map((order) => {
                const difference = getOrderDifference(order);
                const differenceLabel = difference === null
                  ? `<small class="muted">Pendiente</small>`
                  : difference > 0
                    ? `Faltan ${difference} ${order.unit || ""}`.trim()
                    : difference < 0
                      ? `Sobran ${Math.abs(difference)} ${order.unit || ""}`.trim()
                      : `Coincide`;
                return `
                  <tr>
                    <td>${order.item}</td>
                    <td>${order.quantity} ${order.unit || ""}</td>
                    <td>
                      ${editable
                        ? `<input type="number" min="0" step="0.1" name="received-${order.id}" placeholder="0" value="${order.receivedQuantity ?? ""}">`
                        : (typeof order.receivedQuantity === "number" ? `${order.receivedQuantity}` : `<small class="muted">-</small>`)}
                    </td>
                    <td>${differenceLabel}</td>
                    <td>
                      ${editable
                        ? `<input name="received-note-${order.id}" placeholder="Falto algo, vino mal..." value="${escapeAttribute(order.receivedNote || "")}">`
                        : (order.receivedNote ? escapeHtml(order.receivedNote) : `<small class="muted">Sin nota</small>`)}
                    </td>
                    <td><span class="status-pill ${statusClass(order.status)}">${order.status}</span></td>
                  </tr>
                `;
              }).join("") || `<tr><td colspan="6"><div class="empty-note">Todavia no hay lineas listas para recibir en ${selectedArea}.</div></td></tr>`}
            </tbody>
          </table>
        </div>
        ${editable ? `
          <div class="form-actions">
            <button class="action-btn secondary" type="submit" ${receivableOrders.length ? "" : "disabled"}>Guardar recepcion</button>
          </div>
        ` : ""}
      </form>
    </div>
    <div class="inline-form" style="margin-top: 18px;">
      <h4>Historial reciente</h4>
      <p class="muted" style="margin-top: -6px;">Aca quedan visibles las lineas ya resueltas para tener referencia.</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Pedido</th>
              <th>Recibido</th>
              <th>Fecha</th>
              <th>Observacion</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            ${historyOrders.map((order) => `
              <tr>
                <td>${order.item}</td>
                <td>${order.quantity} ${order.unit || ""}</td>
                <td>${typeof order.receivedQuantity === "number" ? `${order.receivedQuantity} ${order.unit || ""}` : `<small class="muted">Sin dato</small>`}</td>
                <td>${order.receivedDate ? escapeHtml(order.receivedDate) : `<small class="muted">Sin fecha</small>`}</td>
                <td>${order.receivedNote ? escapeHtml(order.receivedNote) : `<small class="muted">Sin nota</small>`}</td>
                <td><span class="status-pill ${statusClass(order.status)}">${order.status}</span></td>
              </tr>
            `).join("") || `<tr><td colspan="6"><div class="empty-note">Todavia no hay historial resuelto en ${selectedArea}.</div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderEmployees() {
  const currentEmployee = getCurrentEmployee();
  const visibleEmployeeList = manageableEmployees(currentEmployee);
  const visibleRoleList = manageableRoles(currentEmployee);
  const roleOptions = visibleRoleList;
  const roleAreaOptions = appState.ui.currentView === "admin" ? getAreaOptions() : [currentEmployee.area];
  const activeEmployees = visibleEmployeeList.filter((employee) => employee.status === "Activa").length;
  const areasCovered = new Set(visibleEmployeeList.map((employee) => employee.area)).size;
  const sectionEl = document.getElementById("employees-section");
  if (!canManageEmployees()) {
    sectionEl.innerHTML = `
      <div class="section-header">
        <div>
          <h3>Gestion de empleados</h3>
          <p>Esta vista se reserva a encargado y empresa.</p>
        </div>
      </div>
      <div class="empty-note">El empleado solo ve su parte. El alta, baja y configuracion de puestos queda en perfiles de gestion.</div>
    `;
    return;
  }

  sectionEl.innerHTML = `
    <div class="section-header">
      <div>
        <h3>Empleados, puestos y permisos</h3>
        <p>${appState.ui.currentView === "admin"
          ? "Desde aca empresa organiza el equipo completo, los puestos y los permisos base."
          : "Desde aca revisas y organizas solo la gente y los puestos de tu zona."}</p>
      </div>
      <div class="action-row">
        <button class="action-btn primary" data-open-form="employee-form">Alta de empleado</button>
        <button class="action-btn secondary" data-open-form="role-form">Nuevo puesto</button>
      </div>
    </div>
    <div class="cards-grid compact-grid">
      <article class="stat-card compact-stat">
        <span class="status-pill ok">Personas visibles</span>
        <strong>${visibleEmployeeList.length}</strong>
        <small class="muted">${appState.ui.currentView === "admin" ? "Equipo completo" : `Solo ${currentEmployee.area}`}</small>
      </article>
      <article class="stat-card compact-stat">
        <span class="status-pill ok">Activas</span>
        <strong>${activeEmployees}</strong>
        <small class="muted">Listas para planificar</small>
      </article>
      <article class="stat-card compact-stat">
        <span class="status-pill ok">Puestos visibles</span>
        <strong>${visibleRoleList.length}</strong>
        <small class="muted">${areasCovered} ${areasCovered === 1 ? "zona visible" : "zonas visibles"}</small>
      </article>
    </div>
    <div class="info-note">
      <strong>Como se usa</strong>
      <span>Primero se crean los puestos. Despues se da de alta cada persona eligiendo su rol, fecha de alta y horas semanales.</span>
    </div>
    <div class="two-column">
      <article class="list-card">
        <h4>Equipo actual</h4>
        <div class="employee-grid">
          ${visibleEmployeeList.map((employee) => `
            <article class="employee-card">
              <span class="employee-name">${employee.name}</span>
              <p>${getRoleName(employee)} · ${employee.area}</p>
              <div class="pill-row">
                <span class="status-pill ${statusClass(employee.status)}">${employee.status}</span>
                <span class="tag">${employee.weeklyHours}h semanales</span>
              </div>
            </article>
          `).join("")}
        </div>
      </article>
      <article class="list-card">
        <h4>Puestos configurados</h4>
        <div class="stack">
          ${visibleRoleList.map((role) => `
            <div class="list-card compact-card">
              <h4>${role.name}</h4>
              <p>${role.area}</p>
              <small class="muted">Permisos: ${role.permissions.join(", ")}</small>
            </div>
          `).join("")}
        </div>
      </article>
    </div>
    <div class="inline-form" id="employee-form" hidden>
      <h4>Dar de alta empleado</h4>
      <form data-form="employee" class="form-grid">
        <label class="field">
          <span>Nombre</span>
          <input name="name" required>
        </label>
        <label class="field">
          <span>Email</span>
          <input name="email" type="email">
        </label>
        <label class="field">
          <span>Rol</span>
          <select name="roleId" ${roleOptions.length ? "" : "disabled"}>${renderOptions(roleOptions, (item) => item.id, (item) => `${item.name} · ${item.area}`, roleOptions[0]?.id)}</select>
        </label>
        <label class="field">
          <span>Fecha de alta</span>
          <input type="date" name="contractStart" required>
        </label>
        <label class="field">
          <span>Horas semanales</span>
          <input type="number" min="1" name="weeklyHours" required>
        </label>
        <label class="field">
          <span>Dias anuales de vacaciones</span>
          <input type="number" min="0" name="annualVacationDays" value="${appState.settings.annualVacationDays}">
        </label>
        <div class="form-actions">
          <button class="action-btn primary" type="submit" ${roleOptions.length ? "" : "disabled"}>Guardar empleado</button>
        </div>
      </form>
    </div>
    <div class="inline-form" id="role-form" hidden>
      <h4>Crear puesto editable</h4>
      <form data-form="role" class="form-grid">
        <label class="field">
          <span>Nombre del puesto</span>
          <input name="name" required placeholder="Ejemplo: Responsable de sala">
        </label>
        <label class="field">
          <span>Area</span>
          <select name="area">${renderOptions(roleAreaOptions, (item) => item, (item) => item, roleAreaOptions[0] ?? "General")}</select>
        </label>
        <div class="check-stack field-wide">
          <label class="check-row"><input type="checkbox" name="permissions" value="turnos_area"><span>Ver turnos del area</span></label>
          <label class="check-row"><input type="checkbox" name="permissions" value="pedido_area"><span>Editar pedidos del area</span></label>
          <label class="check-row"><input type="checkbox" name="permissions" value="inventario_area" checked><span>Gestionar inventario del area</span></label>
        </div>
        <div class="form-actions">
          <button class="action-btn primary" type="submit">Guardar puesto</button>
        </div>
      </form>
    </div>
  `;
}

function renderTemperatures() {
  const employee = getCurrentEmployee();
  const sectionEl = document.getElementById("temperatures-section");
  const visibleEquipment = visibleTemperatureEquipment(employee);
  const visibleLogs = visibleTemperatureLogs(employee)
    .slice()
    .sort((left, right) => new Date(right.recordedAt) - new Date(left.recordedAt));
  const canManageEquipment = appState.ui.currentView !== "employee";
  const areaOptions = appState.ui.currentView === "admin"
    ? getAreaOptions().filter((area) => area !== "General")
    : [getAreaForView(employee)];
  const todayCount = visibleLogs.filter((log) => log.recordedAt.startsWith(getTodayKey())).length;
  const withoutLogsCount = visibleEquipment.filter((item) => !latestTemperatureLogForEquipment(item.id)).length;

  sectionEl.innerHTML = `
    <div class="section-header">
      <div>
        <h3>Control de temperaturas</h3>
        <p>Registro simple por equipo, facil de cargar y facil de revisar.</p>
      </div>
      <div class="action-row">
        ${canManageEquipment ? `<button class="action-btn secondary" data-open-form="temperature-equipment-form">Agregar equipo</button>` : ""}
        <button class="action-btn secondary" data-action="export-report" data-report="temperatures">Exportar PDF</button>
        <button class="action-btn primary" data-open-form="temperature-log-form">Cargar temperatura</button>
      </div>
    </div>
    <div class="cards-grid">
      <article class="stat-card">
        <span class="status-pill ok">Equipos visibles</span>
        <strong>${visibleEquipment.length}</strong>
        <small class="muted">${appState.ui.currentView === "admin" ? "Todos los equipos cargados" : `Solo ${employee.area}`}</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ok">Registros de hoy</span>
        <strong>${todayCount}</strong>
        <small class="muted">Temperaturas anotadas en esta vista</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ${withoutLogsCount ? "warn" : "ok"}">Sin registro</span>
        <strong>${withoutLogsCount}</strong>
        <small class="muted">Equipos que aun no tienen temperatura cargada</small>
      </article>
    </div>
    <div class="inline-form" id="temperature-equipment-form" hidden ${canManageEquipment ? "" : "disabled"}>
      <h4>Agregar equipo</h4>
      <form data-form="temperature-equipment" class="form-grid">
        <label class="field">
          <span>Equipo</span>
          <input name="name" required placeholder="Ej: Heladera postres">
        </label>
        <label class="field">
          <span>Area</span>
          <select name="area">${renderOptions(areaOptions, (item) => item, (item) => item, getAreaForView(employee))}</select>
        </label>
        <label class="field field-wide">
          <span>Rango esperado</span>
          <input name="target" placeholder="Opcional: 0 a 4 C">
        </label>
        <div class="form-actions">
          <button class="action-btn primary" type="submit">Guardar equipo</button>
        </div>
      </form>
    </div>
    <div class="inline-form" id="temperature-log-form" hidden>
      <h4>Cargar temperatura</h4>
      <form data-form="temperature-log" class="form-grid">
        <label class="field">
          <span>Equipo</span>
          <select name="equipmentId">${renderOptions(visibleEquipment, (item) => item.id, (item) => `${item.name} · ${item.area}`, visibleEquipment[0]?.id)}</select>
        </label>
        <label class="field">
          <span>Temperatura</span>
          <input type="number" step="0.1" name="value" required placeholder="Ej: 3.5">
        </label>
        <label class="field field-wide">
          <span>Observacion</span>
          <input name="note" placeholder="Opcional: puerta abierta, revision, etc.">
        </label>
        <div class="form-actions">
          <button class="action-btn primary" type="submit" ${visibleEquipment.length ? "" : "disabled"}>Guardar temperatura</button>
        </div>
      </form>
    </div>
    <div class="stack" style="margin-top: 18px;">
      <article class="list-card">
        <h4>Equipos cargados</h4>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Equipo</th>
                <th>Area</th>
                <th>Ultimo registro</th>
                <th>Rango</th>
              </tr>
            </thead>
            <tbody>
              ${visibleEquipment.map((item) => {
                const latest = latestTemperatureLogForEquipment(item.id);
                return `
                  <tr>
                    <td>${item.name}</td>
                    <td>${item.area}</td>
                    <td>${latest ? `${latest.value} C · ${formatChatTimestamp(latest.recordedAt)}` : `<small class="muted">Sin registros</small>`}</td>
                    <td>${item.target || `<small class="muted">Sin rango cargado</small>`}</td>
                  </tr>
                `;
              }).join("") || `<tr><td colspan="4"><div class="empty-note">Todavia no hay equipos cargados.</div></td></tr>`}
            </tbody>
          </table>
        </div>
      </article>
      <article class="list-card">
        <h4>Ultimos registros</h4>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Equipo</th>
                <th>Temp.</th>
                <th>Hora</th>
                <th>Autor</th>
                <th>Nota</th>
              </tr>
            </thead>
            <tbody>
              ${visibleLogs.slice(0, 8).map((log) => {
                const equipment = appState.temperatureEquipment.find((item) => item.id === log.equipmentId);
                return `
                  <tr>
                    <td>${equipment?.name ?? "Equipo"}</td>
                    <td>${log.value} C</td>
                    <td>${formatChatTimestamp(log.recordedAt)}</td>
                    <td>${log.author ? escapeHtml(log.author) : `<small class="muted">Sin dato</small>`}</td>
                    <td>${log.note ? escapeHtml(log.note) : `<small class="muted">Sin nota</small>`}</td>
                  </tr>
                `;
              }).join("") || `<tr><td colspan="5"><div class="empty-note">Todavia no hay temperaturas registradas.</div></td></tr>`}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  `;
}

function renderAllergens() {
  const employee = getCurrentEmployee();
  const sectionEl = document.getElementById("allergens-section");
  if (!canViewAllergens(employee)) {
    sectionEl.innerHTML = `
      <div class="section-header">
        <div>
          <h3>Alergenos</h3>
          <p>Esta base interna queda reservada a cocina y empresa.</p>
        </div>
      </div>
      <div class="empty-note">La carga y revision de alergenos se mantiene dentro de cocina. La consulta rapida para sala encaja mejor en la futura app de comandas.</div>
    `;
    return;
  }

  const editable = canEditRecipes(employee);
  const allRecipes = visibleRecipes(employee);
  const loadedAllergens = Array.from(new Set(
    allRecipes.flatMap((recipe) => Array.isArray(recipe.allergens) ? recipe.allergens : []),
  ));
  const allergenOptions = ["Todos", ...loadedAllergens];
  if (!allergenOptions.includes(appState.ui.activeAllergenFilter)) {
    appState.ui.activeAllergenFilter = "Todos";
  }
  const activeFilter = appState.ui.activeAllergenFilter;
  const activeSearch = String(appState.ui.recipeSearch || "").trim();
  const recipesByFilter = activeFilter === "Todos"
    ? allRecipes
    : allRecipes.filter((recipe) => (recipe.allergens ?? []).includes(activeFilter));
  const recipes = activeSearch
    ? recipesByFilter.filter((recipe) => recipeMatchesSearch(recipe, activeSearch))
    : recipesByFilter;
  const recipesWithAllergens = allRecipes.filter((recipe) => Array.isArray(recipe.allergens) && recipe.allergens.length).length;

  sectionEl.innerHTML = `
    <div class="section-header">
      <div>
        <h3>Alergenos</h3>
        <p>Base interna para dejar claros los alergenos de cada receta sin tener que revisar toda la ficha tecnica.</p>
      </div>
      <div class="action-row">
        ${allergenOptions.map((item) => `<button class="badge-btn ${item === activeFilter ? "active-filter" : ""}" data-action="set-allergen-filter" data-allergen="${escapeAttribute(item)}">${escapeHtml(item)}</button>`).join("")}
        ${canViewRecipes(employee) ? `<button class="action-btn secondary" data-section-target="recipes">Ir a recetas</button>` : ""}
      </div>
    </div>
    <div class="cards-grid">
      <article class="stat-card">
        <span class="status-pill ok">Recetas visibles</span>
        <strong>${recipes.length}</strong>
        <small class="muted">${appState.ui.currentView === "admin" ? "Base completa de cocina" : "Base interna de cocina"}</small>
      </article>
      <article class="stat-card">
        <span class="status-pill warn">Con alergenos cargados</span>
        <strong>${recipesWithAllergens}</strong>
        <small class="muted">${loadedAllergens.length} alergenos distintos marcados</small>
      </article>
    </div>
    <div class="info-note">
      <strong>Como se mantiene</strong>
      <span>Los alergenos se cargan desde recetas. Si cocina corrige una ficha, esta vista se actualiza sola.</span>
    </div>
    <label class="field" style="margin-top: 18px;">
      <span>Buscar plato o detalle</span>
      <input data-recipe-search type="search" placeholder="Ej: croquetas, gluten, salsa verde" value="${escapeAttribute(activeSearch)}">
    </label>
    <div class="allergen-quick-grid" style="margin-top: 18px;">
      ${recipes.map((recipe) => `
        <article class="list-card allergen-quick-card">
          <div class="section-header compact-header">
            <div>
              <h4>${escapeHtml(recipe.name)}</h4>
              <p>${recipe.yieldLabel ? `Rinde ${escapeHtml(recipe.yieldLabel)}` : "Sin rendimiento cargado"}</p>
            </div>
            ${editable ? `
              <div class="action-row">
                <button class="badge-btn" data-action="edit-recipe" data-id="${recipe.id}">Editar</button>
              </div>
            ` : ""}
          </div>
          <div class="pill-row allergen-pill-row" style="margin-top: 10px;">
            ${(recipe.allergens?.length
              ? recipe.allergens.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")
              : `<span class="tag warn-tag">Sin alergenos marcados</span>`)}
          </div>
          <div class="info-note allergen-service-box" style="margin-top: 14px;">
            <strong>Nota interna</strong>
            <span>${recipe.serviceNotes ? escapeHtml(recipe.serviceNotes) : "Todavia no hay una nota corta asociada a esta receta."}</span>
          </div>
          <small class="muted allergen-footnote">${recipe.allergens?.length ? "Ficha interna lista." : "Conviene completar esta ficha antes de darla por cerrada."}</small>
        </article>
      `).join("") || `<div class="empty-note">Todavia no hay recetas cargadas para mostrar alergenos.</div>`}
    </div>
  `;
}

function renderRecipes() {
  const employee = getCurrentEmployee();
  const sectionEl = document.getElementById("recipes-section");
  const allRecipes = visibleRecipes(employee);
  const editable = canEditRecipes(employee);
  const editingRecipe = getRecipeById(appState.ui.recipeDraftId);
  const showRecipeForm = Boolean(editingRecipe || appState.ui.recipeFormOpen);
  const activeSearch = String(appState.ui.recipeSearch || "").trim();
  const recipes = activeSearch
    ? allRecipes.filter((recipe) => recipeMatchesSearch(recipe, activeSearch))
    : allRecipes;
  const withAllergens = allRecipes.filter((recipe) => recipe.allergens?.length).length;
  const withServiceNotes = allRecipes.filter((recipe) => recipe.serviceNotes).length;

  if (!canViewRecipes(employee)) {
    sectionEl.innerHTML = `
      <div class="section-header">
        <div>
          <h3>Recetas</h3>
          <p>Esta seccion queda reservada al equipo de cocina y a empresa.</p>
        </div>
      </div>
      <div class="empty-note">Desde sala no hace falta ver el detalle de recetas. Si luego queres, podemos dejar una vista resumida solo con alergenos o pases de servicio.</div>
    `;
    return;
  }

  sectionEl.innerHTML = `
    <div class="section-header">
      <div>
        <h3>Recetas base</h3>
        <p>Base interna de cocina para ordenar ingredientes, rendimiento y notas de apoyo sin volverlo complicado.</p>
      </div>
      <div class="action-row">
        ${editable ? `<button class="action-btn primary" data-action="new-recipe">Agregar receta</button>` : ""}
      </div>
    </div>
    <div class="cards-grid compact-grid">
      <article class="stat-card compact-stat">
        <span class="status-pill ok">Recetas visibles</span>
        <strong>${recipes.length}</strong>
        <small class="muted">${appState.ui.currentView === "admin" ? "Base completa de cocina" : "Base del area de cocina"}</small>
      </article>
      <article class="stat-card compact-stat">
        <span class="status-pill warn">Con alergenos</span>
        <strong>${withAllergens}</strong>
        <small class="muted">Fichas con base de alergenos</small>
      </article>
      <article class="stat-card compact-stat">
        <span class="status-pill ok">Notas para sala</span>
        <strong>${withServiceNotes}</strong>
        <small class="muted">Recetas con aclaracion corta</small>
      </article>
    </div>
    <div class="info-note">
      <strong>Vista actual: ${appState.ui.currentView === "admin" ? "Cocina completa" : employee.area}</strong>
      <span>Primero se carga la receta base. Despues, si hace falta, se completa su nota corta y sus alergenos asociados.</span>
    </div>
    <label class="field" style="margin-top: 18px;">
      <span>Buscar receta</span>
      <input data-recipe-search type="search" placeholder="Ej: croquetas, alioli, pescado" value="${escapeAttribute(activeSearch)}">
    </label>
    <div class="inline-form" id="recipe-form" ${editable && !showRecipeForm ? "hidden" : ""} ${editable ? "" : "disabled"}>
      <h4>${editingRecipe ? "Editar receta" : "Nueva receta"}</h4>
      <p class="muted recipe-form-copy">${editingRecipe ? "Ajusta solo lo necesario. Los cambios actualizan tambien la consulta de alergenos." : "Carga una receta clara, con ingredientes por linea y una nota corta para que sala responda rapido si hace falta."}</p>
      <form data-form="recipe" class="form-grid">
        <input type="hidden" name="recipeId" value="${escapeAttribute(editingRecipe?.id || "")}">
        <label class="field">
          <span>Nombre</span>
          <input name="name" required placeholder="Ejemplo: Alioli de ajo asado" value="${escapeAttribute(editingRecipe?.name || "")}">
        </label>
        <label class="field">
          <span>Rinde</span>
          <input name="yieldLabel" placeholder="Opcional: 2 litros, 30 raciones, 1 GN" value="${escapeAttribute(editingRecipe?.yieldLabel || "")}">
        </label>
        <label class="field field-wide">
          <span>Ingredientes</span>
          <textarea name="ingredients" rows="5" required placeholder="Una linea por ingrediente&#10;Aceite oliva · 1 litro&#10;Ajo · 200 g">${escapeHtml((editingRecipe?.ingredients || []).join("\n"))}</textarea>
        </label>
        <div class="check-stack field-wide">
          <span>Alergenos</span>
          ${ALLERGEN_OPTIONS.map((item) => `
            <label class="check-row">
              <input type="checkbox" name="allergens" value="${escapeAttribute(item)}" ${(editingRecipe?.allergens || []).includes(item) ? "checked" : ""}>
              <span>${escapeHtml(item)}</span>
            </label>
          `).join("")}
        </div>
        <label class="field field-wide">
          <span>Notas</span>
          <textarea name="notes" rows="3" placeholder="Opcional: puntos clave, emplatado, conservacion">${escapeHtml(editingRecipe?.notes || "")}</textarea>
        </label>
        <label class="field field-wide">
          <span>Nota corta para sala</span>
          <textarea name="serviceNotes" rows="3" placeholder="Opcional: aviso rapido sobre alergenos o servicio">${escapeHtml(editingRecipe?.serviceNotes || "")}</textarea>
        </label>
        <div class="form-actions">
          <button class="action-btn primary" type="submit">${editingRecipe ? "Guardar cambios" : "Guardar receta"}</button>
          ${editingRecipe ? `<button class="action-btn secondary" type="button" data-action="cancel-recipe-edit">Cancelar</button>` : ""}
        </div>
      </form>
    </div>
    <div class="stack" style="margin-top: 18px;">
      ${recipes.map((recipe) => `
        <article class="list-card">
          <div class="section-header compact-header">
            <div>
              <h4>${escapeHtml(recipe.name)}</h4>
              <p>${recipe.yieldLabel ? `Rinde ${escapeHtml(recipe.yieldLabel)}` : "Sin rendimiento cargado"} · ${escapeHtml(recipe.author || "Empresa")}</p>
            </div>
            ${editable ? `
              <div class="action-row">
                <button class="badge-btn" data-action="edit-recipe" data-id="${recipe.id}">Editar</button>
                <button class="badge-btn" data-action="delete-recipe" data-id="${recipe.id}">Eliminar</button>
                <button class="badge-btn" data-action="show-recipe-allergens" data-id="${recipe.id}">Ver alergenos</button>
              </div>
            ` : ""}
          </div>
          <div class="two-column" style="margin-top: 12px;">
            <div class="recipe-detail-block">
              <h4 style="margin-bottom: 10px;">Ingredientes</h4>
              <ul class="rule-list">
                ${recipe.ingredients.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            </div>
            <div class="recipe-detail-block">
              <h4 style="margin-bottom: 10px;">Alergenos y notas</h4>
              <div class="pill-row" style="margin-bottom: 10px;">
                ${(recipe.allergens?.length
                  ? recipe.allergens.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")
                  : `<span class="tag">Sin marcar</span>`)}
              </div>
              <div class="info-note recipe-service-note" style="margin-top: 12px;">
                <strong>Que debe saber sala</strong>
                <span>${recipe.serviceNotes ? escapeHtml(recipe.serviceNotes) : "Sin nota corta para sala."}</span>
              </div>
              <p class="muted" style="margin-top: 12px;">${recipe.notes ? escapeHtml(recipe.notes) : "Sin notas internas por ahora."}</p>
            </div>
          </div>
        </article>
      `).join("") || `<div class="empty-note">Todavia no hay recetas cargadas.</div>`}
    </div>
  `;
}

function renderDocuments() {
  const employee = getCurrentEmployee();
  const sectionEl = document.getElementById("documents-section");
  const activeType = getActiveDocumentType(employee);
  const docs = visibleLaborDocuments(employee)
    .filter((item) => activeType === "Todos" || item.type === activeType)
    .slice()
    .sort((left, right) => new Date(right.uploadedAt) - new Date(left.uploadedAt));
  const canUpload = appState.ui.currentView !== "employee";
  const uploadEmployeePool = appState.ui.currentView === "admin"
    ? appState.employees
    : appState.employees.filter((item) => item.area === employee.area);
  const myDocsCount = appState.laborDocuments.filter((item) => item.employeeId === employee.id).length;
  const documentTypes = getDocumentTypesForView(employee);
  const privateDocsCount = docs.filter((item) => item.visibility === "Solo empresa").length;

  sectionEl.innerHTML = `
    <div class="section-header">
      <div>
        <h3>Documentos laborales</h3>
        <p>${canUpload
          ? "Desde aca se cargan y ordenan nominas, contratos y anexos."
          : "Aca ves solo los documentos que te corresponden."}</p>
      </div>
      <div class="action-row">
        ${documentTypes.map((type) => `<button class="badge-btn ${type === activeType ? "active-filter" : ""}" data-action="set-document-type" data-type="${type}">${type}</button>`).join("")}
        ${canUpload ? `<button class="action-btn primary" data-open-form="document-form">Cargar documento</button>` : ""}
      </div>
    </div>
    <div class="cards-grid">
      <article class="stat-card">
        <span class="status-pill ok">Documentos visibles</span>
        <strong>${docs.length}</strong>
        <small class="muted">${appState.ui.currentView === "employee" ? "Solo los tuyos" : "Segun tu area o empresa"}</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ok">Perfil actual</span>
        <strong>${myDocsCount}</strong>
        <small class="muted">${appState.ui.currentView === "admin" ? "Documentos asociados a la persona revisada" : "Documentos asociados a esta persona"}</small>
      </article>
      <article class="stat-card">
        <span class="status-pill ${privateDocsCount ? "warn" : "ok"}">Solo empresa</span>
        <strong>${privateDocsCount}</strong>
        <small class="muted">Documentos internos visibles solo para gestion</small>
      </article>
    </div>
    <div class="inline-form" id="document-form" hidden ${canUpload ? "" : "disabled"}>
      <h4>Cargar documento</h4>
      <form data-form="labor-document" class="form-grid">
        <label class="field">
          <span>Tipo</span>
          <select name="type">
            <option>Nomina</option>
            <option>Contrato</option>
            <option>Anexo</option>
            <option>Aviso</option>
            <option>Otro</option>
          </select>
        </label>
        <label class="field">
          <span>Empleado</span>
          <select name="employeeId">${renderOptions(uploadEmployeePool, (item) => item.id, (item) => `${item.name} · ${item.area}`, uploadEmployeePool[0]?.id)}</select>
        </label>
        <label class="field field-wide">
          <span>Titulo</span>
          <input name="title" required placeholder="Ej: Nomina mayo 2026">
        </label>
        <label class="field">
          <span>Periodo</span>
          <input name="period" placeholder="Ej: Mayo 2026">
        </label>
        <label class="field">
          <span>Visibilidad</span>
          <select name="visibility">
            <option>Empleado y empresa</option>
            <option>Solo empresa</option>
          </select>
        </label>
        <label class="field field-wide">
          <span>Resumen</span>
          <textarea name="summary" rows="3" placeholder="Breve descripcion del documento"></textarea>
        </label>
        <div class="form-actions">
          <button class="action-btn primary" type="submit">Guardar documento</button>
        </div>
      </form>
    </div>
    ${docs.length ? `<h4 class="subsection-title" style="margin-top: 18px;">Documentos cargados</h4>` : ""}
    <div class="table-wrap" style="margin-top: 18px;">
      <table>
        <thead>
          <tr>
            ${appState.ui.currentView === "employee" ? "" : "<th>Empleado</th>"}
            <th>Tipo</th>
            <th>Titulo</th>
            <th>Periodo</th>
            <th>Subido</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          ${docs.map((item) => {
            const docEmployee = getEmployeeById(item.employeeId);
            return `
              <tr>
                ${appState.ui.currentView === "employee" ? "" : `<td>${docEmployee?.name ?? "Empleado"}</td>`}
                <td>${item.type}</td>
                <td>${item.title}</td>
                <td>${item.period || `<small class="muted">Sin periodo</small>`}</td>
                <td>${formatChatTimestamp(item.uploadedAt)}</td>
                <td><button class="badge-btn" data-action="export-document" data-id="${item.id}">Abrir / exportar</button></td>
              </tr>
            `;
          }).join("") || `<tr><td colspan="${appState.ui.currentView === "employee" ? 5 : 6}"><div class="empty-note">Todavia no hay documentos cargados.</div></td></tr>`}
        </tbody>
      </table>
    </div>
    <div class="stack" style="margin-top: 18px;">
      ${docs.length ? `<h4 class="subsection-title">Recientes</h4>` : ""}
      ${docs.slice(0, 3).map((item) => {
        const docEmployee = getEmployeeById(item.employeeId);
        return `
          <article class="list-card">
            <div class="section-header compact-header">
              <div>
                <h4>${item.title}</h4>
                <p>${item.type} · ${item.period || "Sin periodo"}</p>
              </div>
              <div class="action-row">
                <button class="badge-btn" data-action="export-document" data-id="${item.id}">Abrir / exportar</button>
              </div>
            </div>
            <p class="muted">${item.summary || "Sin resumen"}</p>
            <div class="pill-row" style="margin-top: 10px;">
              ${appState.ui.currentView === "employee" ? "" : `<span class="tag">${docEmployee?.name ?? "Empleado"}</span>`}
              <span class="tag">${item.visibility}</span>
              <span class="tag">${formatChatTimestamp(item.uploadedAt)}</span>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function renderSettings() {
  const employee = getCurrentEmployee();
  const sectionEl = document.getElementById("settings-section");
  if (appState.ui.currentView !== "admin") {
    sectionEl.innerHTML = `
      <div class="section-header">
        <div>
          <h3>Configuracion</h3>
          <p>Esta seccion queda reservada a empresa.</p>
        </div>
      </div>
      <div class="empty-note">La configuracion del negocio, la marca y los ajustes generales solo los gestiona empresa.</div>
    `;
    return;
  }

  sectionEl.innerHTML = `
    <div class="section-header">
      <div>
        <h3>Configuracion del negocio</h3>
        <p>Desde aca empresa ajusta la marca, las reglas generales y la forma en que funciona el local.</p>
      </div>
      <div class="action-row">
        <button class="action-btn primary" data-open-form="settings-form">Personalizar app</button>
      </div>
    </div>
    <div class="cards-grid compact-grid">
      <article class="stat-card compact-stat">
        <span class="status-pill ok">Marca</span>
        <strong>${escapeHtml((appState.business.logoMark || "BF").slice(0, 3).toUpperCase())}</strong>
        <small class="muted">Identidad visible del negocio</small>
      </article>
      <article class="stat-card compact-stat">
        <span class="status-pill ok">Chat visible</span>
        <strong>${appState.settings.chatRetentionDays} dias</strong>
        <small class="muted">Vigencia principal de mensajes</small>
      </article>
      <article class="stat-card compact-stat">
        <span class="status-pill ok">Fichaje</span>
        <strong>${appState.settings.clockInRadiusMeters} m</strong>
        <small class="muted">Radio previsto del local</small>
      </article>
    </div>
    <div class="info-note">
      <strong>Como se usa</strong>
      <span>Esta seccion sirve para dejar el negocio a medida: nombre, colores, reglas base de fichaje, vacaciones y visibilidad interna.</span>
    </div>
    <div class="settings-grid">
      <article class="policy-card brand-preview-card">
        <h4>Marca visible</h4>
        <div class="brand-preview">
          <div class="brand-logo business-logo">${escapeHtml((appState.business.logoMark || "BF").slice(0, 3).toUpperCase())}</div>
          <div class="brand-preview-text">
            <strong>${escapeHtml(appState.business.name)}</strong>
            <span>${escapeHtml(appState.business.city)}</span>
          </div>
        </div>
      </article>
      <article class="policy-card">
        <h4>Negocio</h4>
        <p>${appState.business.name} · ${appState.business.city}</p>
      </article>
      <article class="policy-card">
        <h4>Local principal</h4>
        <p>${appState.settings.worksiteLabel}</p>
      </article>
      <article class="policy-card">
        <h4>Ubicacion del local</h4>
        <p>${Number(appState.settings.worksiteLatitude).toFixed(4)}, ${Number(appState.settings.worksiteLongitude).toFixed(4)}</p>
      </article>
      <article class="policy-card">
        <h4>Vacaciones</h4>
        <p>${appState.settings.annualVacationDays} dias al ano · acumulacion ${appState.settings.accrualMode.toLowerCase()}</p>
      </article>
      <article class="policy-card">
        <h4>Visibilidad de turnos</h4>
        <p>${appState.settings.visibilityMode}</p>
      </article>
      <article class="policy-card">
        <h4>Comunicacion urgente</h4>
        <p>${appState.settings.notifications}</p>
      </article>
      <article class="policy-card">
        <h4>Vigencia del chat</h4>
        <p>Los mensajes se ven durante ${appState.settings.chatRetentionDays} dias en la vista principal.</p>
      </article>
      <article class="policy-card">
        <h4>Fichaje por ubicacion</h4>
        <p>${appState.settings.clockInGeoMode} · radio de ${appState.settings.clockInRadiusMeters} metros.</p>
      </article>
      <article class="policy-card">
        <h4>Color principal</h4>
        <p>${appState.settings.brandAccent}</p>
      </article>
      <article class="policy-card">
        <h4>Modelo actual</h4>
        <p>Base preparada para un local, con camino claro a multi-sede mas adelante.</p>
      </article>
    </div>
    <div class="inline-form" id="settings-form" hidden>
      <h4>Personalizar negocio y experiencia</h4>
      <form data-form="settings" class="form-grid">
        <label class="field">
          <span>Nombre del negocio</span>
          <input name="businessName" value="${escapeHtml(appState.business.name)}">
        </label>
        <label class="field">
          <span>Ciudad</span>
          <input name="city" value="${escapeHtml(appState.business.city)}">
        </label>
        <label class="field field-wide">
          <span>Frase corta</span>
          <input name="slogan" value="${escapeHtml(appState.business.slogan || "")}" placeholder="Ej: Turnos claros y equipo coordinado">
        </label>
        <label class="field">
          <span>Nombre del local principal</span>
          <input name="worksiteLabel" value="${escapeHtml(appState.settings.worksiteLabel || "Local principal")}" placeholder="Ej: Malaga Centro">
        </label>
        <label class="field">
          <span>Radio de fichaje previsto (m)</span>
          <input type="number" min="20" step="5" name="clockInRadiusMeters" value="${appState.settings.clockInRadiusMeters || 80}">
        </label>
        <label class="field">
          <span>Latitud del local</span>
          <input type="number" step="0.0001" name="worksiteLatitude" value="${appState.settings.worksiteLatitude ?? ""}" placeholder="Ej: 36.7213">
        </label>
        <label class="field">
          <span>Longitud del local</span>
          <input type="number" step="0.0001" name="worksiteLongitude" value="${appState.settings.worksiteLongitude ?? ""}" placeholder="Ej: -4.4214">
        </label>
        <label class="field field-wide">
          <span>Que hacer si el empleado esta fuera del radio</span>
          <select name="clockInGeoMode">
            <option ${appState.settings.clockInGeoMode === "Marcar para revision" ? "selected" : ""}>Marcar para revision</option>
            <option ${appState.settings.clockInGeoMode === "Bloquear fuera de zona" ? "selected" : ""}>Bloquear fuera de zona</option>
          </select>
        </label>
        <label class="field">
          <span>Logo corto</span>
          <input name="logoMark" maxlength="3" value="${escapeHtml(appState.business.logoMark || "BF")}" placeholder="Ej: LT">
        </label>
        <label class="field">
          <span>Color principal</span>
          <input type="color" name="brandAccent" value="${escapeHtml(appState.settings.brandAccent || "#c86f31")}">
        </label>
        <label class="field">
          <span>Color fuerte</span>
          <input type="color" name="brandStrong" value="${escapeHtml(appState.settings.brandStrong || "#8f3f17")}">
        </label>
        <label class="field">
          <span>Dias de vacaciones por defecto</span>
          <input type="number" min="0" name="annualVacationDays" value="${appState.settings.annualVacationDays}">
        </label>
        <label class="field">
          <span>Modo de acumulacion</span>
          <select name="accrualMode">
            <option ${appState.settings.accrualMode === "Mensual" ? "selected" : ""}>Mensual</option>
            <option ${appState.settings.accrualMode === "Anual" ? "selected" : ""}>Anual</option>
          </select>
        </label>
        <label class="field field-wide">
          <span>Visibilidad de turnos</span>
          <textarea name="visibilityMode" rows="3">${escapeHtml(appState.settings.visibilityMode)}</textarea>
        </label>
        <label class="field field-wide">
          <span>Politica de avisos urgentes</span>
          <textarea name="notifications" rows="3">${escapeHtml(appState.settings.notifications)}</textarea>
        </label>
        <label class="field">
          <span>Dias visibles en chat</span>
          <input type="number" min="1" name="chatRetentionDays" value="${appState.settings.chatRetentionDays}">
        </label>
        <div class="form-actions">
          <button class="action-btn primary" type="submit">Guardar configuracion</button>
        </div>
      </form>
    </div>
  `;
}

function renderSectionVisibility() {
  const employee = getCurrentEmployee();
  const hiddenSections = new Set();
  if (appState.ui.currentView === "employee") {
    hiddenSections.add("employees");
    hiddenSections.add("settings");
  }
  if (appState.ui.currentView === "manager") {
    hiddenSections.add("settings");
  }
  if (!canViewRecipes(employee)) {
    hiddenSections.add("recipes");
  }
  if (!canViewAllergens(employee)) {
    hiddenSections.add("allergens");
  }

  document.querySelectorAll(".section-view").forEach((section) => {
    const sectionName = section.id.replace("-section", "");
    const hidden = hiddenSections.has(sectionName);
    section.hidden = hidden;
    section.classList.toggle("active", !hidden && section.id === `${appState.ui.currentSection}-section`);
  });
  document.querySelectorAll(".nav-link").forEach((button) => {
    const hidden = hiddenSections.has(button.dataset.section);
    button.hidden = hidden;
    button.classList.toggle("active", !hidden && button.dataset.section === appState.ui.currentSection);
  });

  if (hiddenSections.has(appState.ui.currentSection)) {
    appState.ui.currentSection = "dashboard";
    document.querySelectorAll(".section-view").forEach((section) => {
      const sectionName = section.id.replace("-section", "");
      section.classList.toggle("active", !hiddenSections.has(sectionName) && section.id === "dashboard-section");
    });
    document.querySelectorAll(".nav-link").forEach((button) => {
      button.classList.toggle("active", !hiddenSections.has(button.dataset.section) && button.dataset.section === "dashboard");
    });
  }

  const mobileSectionSelector = document.getElementById("mobile-section-selector");
  if (mobileSectionSelector) {
    const visibleSections = Array.from(document.querySelectorAll(".nav-link"))
      .filter((button) => !hiddenSections.has(button.dataset.section))
      .map((button) => ({
        value: button.dataset.section,
        label: button.textContent.trim(),
      }));
    mobileSectionSelector.innerHTML = renderOptions(
      visibleSections,
      (item) => item.value,
      (item) => item.label,
      appState.ui.currentSection,
    );
    mobileSectionSelector.value = appState.ui.currentSection;
  }
}

function deleteShift(shiftId) {
  const employee = getCurrentEmployee();
  const shift = appState.shifts.find((item) => item.id === shiftId);
  if (!canManageShiftRecord(employee, shift)) return;
  appState.shifts = appState.shifts.filter((item) => item.id !== shiftId);
  renderApp();
}

function openShiftEditor(shiftId) {
  const employee = getCurrentEmployee();
  const shift = appState.shifts.find((item) => item.id === shiftId);
  if (!canManageShiftRecord(employee, shift)) return;
  const formWrap = document.getElementById("shift-form");
  const form = document.querySelector("form[data-form='shift']");
  if (!formWrap || !form) return;
  const currentArea = appState.ui.currentView === "admin" ? shift.area : employee.area;
  formWrap.hidden = false;
  form.elements.shiftId.value = shift.id;
  form.elements.week.value = shift.week;
  form.elements.area.value = currentArea;
  updateShiftEmployeeOptions(currentArea, shift.employeeId);
  form.elements.employeeId.value = shift.employeeId;
  const [startTime = "10:00", endTime = "17:00"] = String(shift.time || "").split("-").map((item) => item.trim());
  form.elements.startTime.value = startTime;
  form.elements.endTime.value = endTime;
  Array.from(form.querySelectorAll("input[name='days']")).forEach((checkbox) => {
    checkbox.checked = checkbox.value === shift.day;
  });
  form.elements.note.value = shift.note || "";
}

function editRecipe(recipeId) {
  const employee = getCurrentEmployee();
  const recipe = getRecipeById(recipeId);
  if (!recipe || !canEditRecipes(employee) || !canAccessArea(employee, recipe.area)) return;
  appState.ui.recipeDraftId = recipeId;
  appState.ui.recipeFormOpen = false;
  appState.ui.currentSection = "recipes";
  renderApp();
}

function deleteRecipe(recipeId) {
  const employee = getCurrentEmployee();
  const recipe = getRecipeById(recipeId);
  if (!recipe || !canEditRecipes(employee) || !canAccessArea(employee, recipe.area)) return;
  appState.recipes = appState.recipes.filter((item) => item.id !== recipeId);
  if (appState.ui.recipeDraftId === recipeId) {
    appState.ui.recipeDraftId = null;
  }
  renderApp();
}

function showRecipeAllergens(recipeId) {
  const employee = getCurrentEmployee();
  const recipe = getRecipeById(recipeId);
  if (!recipe) return;
  const recipeVisible = visibleRecipes(employee).some((item) => item.id === recipeId);
  const allergenVisible = recipe.area === employee.area || appState.ui.currentView === "admin";
  if (!recipeVisible && !allergenVisible) return;
  appState.ui.activeAllergenFilter = "Todos";
  appState.ui.recipeSearch = recipe.name;
  appState.ui.currentSection = "allergens";
  renderApp();
}

function duplicateWeekShifts() {
  const employee = getCurrentEmployee();
  const sourceWeek = appState.ui.currentShiftWeek || "Semana actual";
  const targetWeek = getNextShiftWeek(sourceWeek);
  if (targetWeek === sourceWeek) {
    alert("Ya estas en la ultima semana disponible del mes.");
    return;
  }
  const sourceShifts = appState.shifts.filter((shift) => shift.week === sourceWeek);
  const scopedShifts = appState.ui.currentView === "admin"
    ? sourceShifts
    : sourceShifts.filter((shift) => shift.area === employee.area);
  const existingKeys = new Set(
    appState.shifts
      .filter((shift) => shift.week === targetWeek)
      .map((shift) => `${shift.day}|${shift.area}|${shift.employeeId}|${shift.time}`),
  );

  const clones = scopedShifts
    .filter((shift) => !existingKeys.has(`${shift.day}|${shift.area}|${shift.employeeId}|${shift.time}`))
    .map((shift) => ({
      ...shift,
      id: uid("shift"),
      week: targetWeek,
    }));

  appState.shifts.push(...clones);
  appState.ui.currentShiftWeek = targetWeek;
  renderApp();
}

function updateRequestStatus(requestId, status) {
  const request = appState.timeOffRequests.find((item) => item.id === requestId);
  if (!request) return;
  const employee = getCurrentEmployee();
  if (!canManageRequest(employee, request) || appState.ui.currentView === "employee") return;
  const previousStatus = request.status;
  request.status = status;
  if (request.type === "Vacaciones") {
    const requestEmployee = getEmployeeById(request.employeeId);
    if (requestEmployee) {
      const from = new Date(request.from);
      const to = new Date(request.to);
      const days = Math.max(1, Math.round((to - from) / 86400000) + 1);
      if (previousStatus !== "Aprobada" && status === "Aprobada") {
        requestEmployee.usedVacationDays = Number(requestEmployee.usedVacationDays || 0) + days;
      }
      if (previousStatus === "Aprobada" && status !== "Aprobada") {
        requestEmployee.usedVacationDays = Math.max(0, Number(requestEmployee.usedVacationDays || 0) - days);
      }
    }
  }
  renderApp();
}

function setOrderStatus(orderId, status) {
  const employee = getCurrentEmployee();
  const order = appState.orders.find((item) => item.id === orderId);
  if (!canManageOrderLine(employee, order)) return;
  order.status = status;
  renderApp();
}

function deleteOrderLine(orderId) {
  const employee = getCurrentEmployee();
  const order = appState.orders.find((item) => item.id === orderId);
  if (!canManageOrderLine(employee, order)) return;
  appState.orders = appState.orders.filter((item) => item.id !== orderId);
  renderApp();
}

function updateShiftEmployeeOptions(area, selectedEmployeeId = "") {
  const form = document.querySelector("form[data-form='shift']");
  if (!form) return;
  const employeeSelect = form.querySelector("[data-shift-employee]");
  const employee = getCurrentEmployee();
  const pool = manageableShiftEmployees(employee);
  const filteredEmployees = employeesForArea(pool, area);
  const fallbackId = selectedEmployeeId || filteredEmployees[0]?.id || "";
  employeeSelect.innerHTML = renderOptions(filteredEmployees, (item) => item.id, (item) => item.name, fallbackId);
}

function updateOrderItemOptions(area, selectedItem = "") {
  const form = document.querySelector("form[data-form='order']");
  if (!form) return;
  const employee = getCurrentEmployee();
  const itemSelect = form.querySelector("[data-order-item]");
  const quantityInput = form.elements.quantity;
  const items = inventoryItemsForArea(employee, area);

  if (!itemSelect) return;

  if (!items.length) {
    itemSelect.innerHTML = `<option value="">No hay productos cargados en esta area</option>`;
    itemSelect.disabled = true;
    quantityInput.value = 1;
    return;
  }

  const activeItem = items.find((item) => item.name === selectedItem) ?? items[0];
  itemSelect.disabled = false;
  itemSelect.innerHTML = renderOptions(items, (item) => item.name, (item) => `${item.name} · ${item.unit}`, activeItem.name);
  quantityInput.value = Number(quantityInput.value) > 0 ? quantityInput.value : 1;
}

function renderShifts() {
  const employee = getCurrentEmployee();
  const shifts = visibleShifts(employee);
  const sectionEl = document.getElementById("shifts-section");
  const canManageShifts = appState.ui.currentView !== "employee";
  const employeePool = manageableShiftEmployees(employee);
  const areasForForm = appState.ui.currentView === "admin" ? getAreaOptions().filter((area) => area !== "General") : [employee.area];
  const initialArea = areasForForm[0] ?? employee.area;
  const initialAreaEmployees = employeesForArea(employeePool, initialArea);
  const plannerEmployee = getPlannerEmployee(employeePool, employee);
  const availableTemplates = getTemplatesForArea(plannerEmployee.area);
  const weekOptions = getShiftWeeks();
  const activeWeek = appState.ui.currentShiftWeek || "Semana actual";
  const orderedDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
  const timeSlots = getTimeSlotOptions();
  const targetWeek = getNextShiftWeek(activeWeek);
  const conflicts = detectShiftConflicts(shifts);

  sectionEl.innerHTML = `
    <div class="section-header">
      <div>
        <h3>${appState.ui.currentView === "employee" ? "Mis turnos" : appState.ui.currentView === "manager" ? `Turnos de ${employee.area}` : "Planificacion completa"}</h3>
        <p>Horarios claros por semana, con carga simple y plantillas listas para reutilizar.</p>
      </div>
      <div class="action-row">
        <div class="segmented week-switcher">
          ${weekOptions.map((week) => `<button class="${week === activeWeek ? "active" : ""}" data-shift-week="${week}">${getShiftWeekLabel(week)}</button>`).join("")}
        </div>
        ${canManageShifts ? `<button class="action-btn primary" data-open-form="shift-form">Crear turno</button>` : ""}
        ${canManageShifts ? `<button class="action-btn secondary" data-action="duplicate-week" ${targetWeek === activeWeek ? "disabled" : ""}>Duplicar a ${getShiftWeekLabel(targetWeek)}</button>` : ""}
      </div>
    </div>
    ${canManageShifts ? `
      ${conflicts.length ? `
        <div class="conflict-banner">
          <strong>Conflictos detectados:</strong>
          <span>${conflicts.map((conflict) => `${getEmployeeById(conflict.employeeId)?.name} el ${getShiftDateLabel(conflict.week, conflict.day)}`).join(" · ")}</span>
        </div>
      ` : ""}
      <div class="inline-form">
        <h4>Cargar semana completa</h4>
        <form data-form="shift-plan" class="shift-plan-form">
          <div class="shift-plan-head">
            <label class="field">
              <span>Empleado</span>
              <select name="plannerEmployeeId" data-shift-planner-employee>
                ${renderOptions(employeePool, (item) => item.id, (item) => `${item.name} · ${item.area}`, plannerEmployee?.id)}
              </select>
            </label>
            <label class="field">
              <span>Semana</span>
              <select name="week">${renderOptions(weekOptions, (item) => item, (item) => getShiftWeekLabel(item), activeWeek)}</select>
            </label>
          </div>
          <div class="shift-plan-grid">
            ${orderedDays.map((day) => {
              const existing = getShiftForEmployeeDay(plannerEmployee?.id, activeWeek, day);
              const availability = getDayAvailability(plannerEmployee?.id, activeWeek, day);
              const [startTime = "10:00", endTime = "17:00"] = String(existing?.time ?? "10:00 - 17:00").split("-").map((item) => item.trim());
              return `
                <article class="plan-day-card ${availability.level === "approved" ? "blocked" : availability.level === "pending" ? "warning" : ""}">
                  <div class="plan-day-top">
                    <strong>${getShiftDateLabel(activeWeek, day)}</strong>
                    <label class="check-row">
                      <input type="checkbox" name="plan-enabled-${day}" ${existing ? "checked" : ""} ${availability.blocked ? "disabled" : ""}>
                      <span>Activo</span>
                    </label>
                  </div>
                  <div class="availability-pill ${availability.level}">
                    ${availability.label}
                  </div>
                  <div class="plan-time-row">
                    <select name="plan-start-${day}" ${availability.blocked ? "disabled" : ""}>${renderOptions(timeSlots, (item) => item, (item) => item, startTime)}</select>
                    <span>a</span>
                    <select name="plan-end-${day}" ${availability.blocked ? "disabled" : ""}>${renderOptions(timeSlots, (item) => item, (item) => item, endTime)}</select>
                  </div>
                </article>
              `;
            }).join("")}
          </div>
          <label class="field field-wide">
            <span>Nota general</span>
            <textarea name="planNote" rows="2" placeholder="Ej: refuerzo cenas o descanso escalonado"></textarea>
          </label>
          <div class="form-actions">
            <button class="action-btn primary" type="submit">Guardar semana del empleado</button>
          </div>
        </form>
      </div>
      <div class="two-column" style="margin-top: 18px;">
        <div class="inline-form">
          <h4>Aplicar plantilla</h4>
          <form data-form="shift-template-apply" class="form-grid">
            <label class="field">
              <span>Empleado</span>
              <select name="employeeId">${renderOptions(employeePool, (item) => item.id, (item) => `${item.name} · ${item.area}`, plannerEmployee?.id)}</select>
            </label>
            <label class="field">
              <span>Semana</span>
              <select name="week">${renderOptions(weekOptions, (item) => item, (item) => getShiftWeekLabel(item), activeWeek)}</select>
            </label>
            <label class="field field-wide">
              <span>Plantilla disponible</span>
              <select name="templateId">${renderOptions(availableTemplates, (item) => item.id, (item) => item.name, availableTemplates[0]?.id)}</select>
            </label>
            <label class="field field-wide">
              <span>Nota opcional</span>
              <textarea name="note" rows="2" placeholder="Nota opcional para esta aplicacion"></textarea>
            </label>
            <div class="form-actions">
              <button class="action-btn primary" type="submit">Aplicar plantilla</button>
            </div>
          </form>
        </div>
        <div class="inline-form">
          <h4>Guardar como plantilla</h4>
          <form data-form="shift-template-save" class="form-grid">
            <label class="field">
              <span>Nombre</span>
              <input name="name" required placeholder="Ejemplo: Cierre sala finde">
            </label>
            <label class="field">
              <span>Empleado base</span>
              <select name="employeeId">${renderOptions(employeePool, (item) => item.id, (item) => `${item.name} · ${item.area}`, plannerEmployee?.id)}</select>
            </label>
            <label class="field">
              <span>Semana origen</span>
              <select name="week">${renderOptions(weekOptions, (item) => item, (item) => getShiftWeekLabel(item), activeWeek)}</select>
            </label>
            <div class="form-actions">
              <button class="action-btn secondary" type="submit">Guardar plantilla</button>
            </div>
          </form>
        </div>
      </div>
      <div class="inline-form" id="shift-form" hidden>
        <h4>Crear o editar turno</h4>
        <form data-form="shift" class="form-grid">
          <input type="hidden" name="shiftId" value="">
          <label class="field">
              <span>Semana</span>
              <select name="week">${renderOptions(weekOptions, (item) => item, (item) => getShiftWeekLabel(item), activeWeek)}</select>
          </label>
          <label class="field">
            <span>Area</span>
            <select name="area" data-shift-area>${renderOptions(areasForForm, (item) => item, (item) => item, initialArea)}</select>
          </label>
          <label class="field">
            <span>Empleado</span>
            <select name="employeeId" data-shift-employee>${renderOptions(initialAreaEmployees, (item) => item.id, (item) => item.name, initialAreaEmployees[0]?.id)}</select>
          </label>
          <label class="field">
            <span>Entrada</span>
            <select name="startTime">${renderOptions(timeSlots, (item) => item, (item) => item, "10:00")}</select>
          </label>
          <label class="field">
            <span>Salida</span>
            <select name="endTime">${renderOptions(timeSlots, (item) => item, (item) => item, "17:00")}</select>
          </label>
          <label class="field field-wide">
              <span>Dias</span>
              <div class="day-picker">
                ${orderedDays.map((day, index) => `
                  <label class="day-check">
                    <input type="checkbox" name="days" value="${day}" ${index === 0 ? "checked" : ""}>
                    <span>${getShiftDateLabel(activeWeek, day)}</span>
                  </label>
                `).join("")}
              </div>
          </label>
          <label class="field field-wide">
            <span>Nota</span>
            <textarea name="note" rows="3" placeholder="Indicaciones del turno"></textarea>
          </label>
          <div class="form-actions">
            <button class="action-btn primary" type="submit">Guardar turno</button>
          </div>
        </form>
      </div>
    ` : ""}
    <div class="weekly-board">
      ${orderedDays.map((day) => {
        const dayShifts = shifts.filter((shift) => shift.day === day);
        return `
          <article class="day-column">
            <div class="day-column-header">
              <h4>${getShiftDateLabel(activeWeek, day)}</h4>
              <span>${dayShifts.length} turnos</span>
            </div>
            <div class="day-column-body">
              ${dayShifts.length ? dayShifts.map((shift) => {
                const shiftEmployee = getEmployeeById(shift.employeeId);
                const hasConflict = conflicts.some((conflict) => conflict.firstId === shift.id || conflict.secondId === shift.id);
                const availability = getDayAvailability(shift.employeeId, shift.week, shift.day);
                return `
                  <div class="shift-chip ${hasConflict ? "conflict" : ""} ${availability.level === "pending" ? "warning" : ""}">
                    <strong>${shift.time}</strong>
                    <span>${shiftEmployee?.name ?? "-"}</span>
                    <small>${shift.area}${availability.level === "pending" ? " · Ausencia pendiente" : ""}</small>
                  </div>
                `;
              }).join("") : `<div class="empty-note">Sin turnos</div>`}
            </div>
          </article>
        `;
      }).join("")}
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Area</th>
            <th>Empleado</th>
            <th>Horario</th>
            <th>Nota</th>
            ${canManageShifts ? "<th>Acciones</th>" : ""}
          </tr>
        </thead>
        <tbody>
          ${shifts.map((shift) => `
            <tr>
              <td>${getShiftDateLabel(shift.week, shift.day)}</td>
              <td><span class="tag">${shift.area}</span></td>
              <td>${getEmployeeById(shift.employeeId)?.name ?? "-"}</td>
              <td>${shift.time}</td>
              <td><small>${shift.note}${getDayAvailability(shift.employeeId, shift.week, shift.day).level === "pending" ? " · Ausencia pendiente" : ""}</small></td>
              ${canManageShifts ? `
                <td>
                  <div class="pill-row">
                    <button class="mini-action" data-action="edit-shift" data-id="${shift.id}">Editar</button>
                    <button class="mini-action alt" data-action="delete-shift" data-id="${shift.id}">Borrar</button>
                  </div>
                </td>
              ` : ""}
            </tr>
          `).join("") || `<tr><td colspan="${canManageShifts ? 6 : 5}"><div class="empty-note">Todavia no hay turnos cargados en esta semana.</div></td></tr>`}
        </tbody>
      </table>
    </div>
  `;
}

function renderSidebar() {
  const employee = getCurrentEmployee();
  const currentUser = getCurrentUser();
  const switcherPanel = document.querySelector(".soft-panel");
  const logoEl = document.getElementById("brand-logo");
  const kickerEl = document.getElementById("brand-kicker");
  const roleName = appState.ui.currentView === "admin"
    ? "Empresa"
    : appState.ui.currentView === "manager"
      ? "Encargado"
      : "Empleado";

  if (currentUser?.view === "admin") {
    switcherPanel.hidden = false;
    const employeeOptions = renderOptions(
      appState.employees,
      (item) => item.id,
      (item) => `${item.name} · ${getRoleName(item)}`,
      appState.ui.currentEmployeeId,
    );
    switcherPanel.innerHTML = `
      <div class="section-title">
        <h2>Panel empresa</h2>
        <p>Desde aca controlas el negocio completo sin pantallas de mas.</p>
      </div>
      <div class="info-note mode-explainer">
        <strong>Que podes hacer</strong>
        <span>Crear horarios, revisar vacaciones, dar de alta y baja personal, organizar inventario, preparar pedidos y configurar el negocio.</span>
      </div>
      <label class="field">
        <span>Empleado que estas revisando</span>
        <select id="employee-selector">${employeeOptions}</select>
      </label>
      <div class="info-note">
        <strong>Para que sirve</strong>
        <span>Te deja cambiar rapido de persona para revisar su ficha, sus turnos y sus vacaciones dentro del panel empresa.</span>
      </div>
    `;
  } else {
    switcherPanel.hidden = false;
    switcherPanel.innerHTML = `
      <div class="section-title">
        <h2>Tu espacio</h2>
        <p>Lo importante, sin ruido.</p>
      </div>
      <div class="info-note mode-explainer compact-note">
        <strong>${roleName}</strong>
        <span>${currentUser?.name ?? employee.name}</span>
      </div>
      <div class="info-note compact-note">
        <strong>Acceso rapido</strong>
        <span>${appState.ui.currentView === "manager"
          ? "Turnos, vacaciones, inventario y pedidos de tu zona."
          : "Turnos, vacaciones, fichaje y avisos."}</span>
      </div>
    `;
  }

  if (logoEl) {
    logoEl.innerHTML = `<img src="./assets/logo-brasaflow.svg" alt="BrasaFlow">`;
  }
  if (kickerEl) kickerEl.textContent = appState.business.city || "Hosteleria";
  document.querySelector(".brand-block h1").textContent = "BrasaFlow";
  document.querySelector(".brand-block p").textContent = appState.business.slogan || `${appState.business.name} · ${appState.business.city}`;
  document.querySelector(".highlight-panel").innerHTML = `
    <h2>Sesion activa</h2>
    <ul class="mini-list">
      <li>${currentUser?.name ?? employee.name}</li>
      <li>${currentUser?.email ?? employee.email}</li>
      <li>Perfil: ${roleName}</li>
      <li>${appState.business.name}</li>
    </ul>
    <div class="action-row" style="margin-top: 18px;">
      <button class="action-btn secondary" data-action="reset-demo">Restaurar demo</button>
      <button class="action-btn primary" data-action="logout">Cerrar sesion</button>
    </div>
    <small class="muted" style="display:block; margin-top: 12px;">Usuario activo: ${currentUser?.name ?? employee.name}</small>
  `;
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formType = form.dataset.form;
  const data = new FormData(form);

  if (formType === "role") {
    if (!canManageEmployees()) return;
    const currentEmployee = getCurrentEmployee();
    const area = String(data.get("area") || "").trim();
    if (appState.ui.currentView === "manager" && area !== currentEmployee.area) return;
    const permissions = data.getAll("permissions");
    appState.roles.push({
      id: uid("role"),
      name: data.get("name").trim(),
      area,
      permissions: permissions.length ? permissions : ["inventario_area"],
    });
  }

  if (formType === "employee") {
    if (!canManageEmployees()) return;
    const currentEmployee = getCurrentEmployee();
    const roleId = data.get("roleId");
    const role = getRoleById(roleId);
    if (!role) return;
    if (appState.ui.currentView === "manager" && role.area !== currentEmployee.area) return;
    const employeeId = uid("emp");
    appState.employees.push({
      id: employeeId,
      name: data.get("name").trim(),
      email: data.get("email").trim(),
      roleId,
      area: role?.area ?? "General",
      contractStart: data.get("contractStart"),
      annualVacationDays: Number(data.get("annualVacationDays") || appState.settings.annualVacationDays),
      usedVacationDays: 0,
      status: "Activa",
      weeklyHours: Number(data.get("weeklyHours")),
    });
    appState.ui.currentEmployeeId = employeeId;
  }

  if (formType === "shift") {
    const currentEmployee = getCurrentEmployee();
    const allowedEmployees = manageableShiftEmployees(currentEmployee);
    const shiftId = String(data.get("shiftId") || "").trim();
    const startTime = String(data.get("startTime") || "");
    const endTime = String(data.get("endTime") || "");
    const selectedDays = data.getAll("days");
    const week = String(data.get("week") || appState.ui.currentShiftWeek || "Semana actual");
    const employeeId = String(data.get("employeeId") || "");
    const selectedEmployee = getEmployeeById(employeeId);
    if (!selectedEmployee || !allowedEmployees.some((item) => item.id === employeeId)) return;
    if (!selectedDays.length) {
      alert("Selecciona al menos un dia.");
      return;
    }
    const timeRange = parseShiftTimeRange(`${startTime} - ${endTime}`);
    if (!timeRange || timeRange.end <= timeRange.start) {
      alert("La hora de salida debe ser posterior a la de entrada.");
      return;
    }
    const payload = {
      week,
      area: selectedEmployee.area,
      employeeId,
      time: `${startTime} - ${endTime}`,
      note: data.get("note").trim(),
    };
    const blockedDays = selectedDays.filter((day) => getDayAvailability(employeeId, week, day).blocked);
    if (blockedDays.length) {
      alert(`No se pueden asignar turnos en: ${blockedDays.join(", ")} porque la ausencia esta aprobada.`);
      return;
    }

    if (shiftId) {
      const existingShift = appState.shifts.find((item) => item.id === shiftId);
      if (existingShift && (appState.ui.currentView === "admin" || existingShift.area === currentEmployee.area)) {
        Object.assign(existingShift, payload, { day: selectedDays[0] });
      }
    } else {
      selectedDays.forEach((day) => {
        appState.shifts.push({
          id: uid("shift"),
          ...payload,
          day,
        });
      });
    }
  }

  if (formType === "shift-plan") {
    const currentEmployee = getCurrentEmployee();
    const allowedEmployees = manageableShiftEmployees(currentEmployee);
    const plannerEmployeeId = String(data.get("plannerEmployeeId") || "");
    const week = String(data.get("week") || appState.ui.currentShiftWeek || "Semana actual");
    const selectedEmployee = getEmployeeById(plannerEmployeeId);
    if (!selectedEmployee || !allowedEmployees.some((item) => item.id === plannerEmployeeId)) return;
    const note = String(data.get("planNote") || "").trim();
    const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    const blockedDays = days.filter((day) => data.get(`plan-enabled-${day}`) === "on" && getDayAvailability(plannerEmployeeId, week, day).blocked);
    if (blockedDays.length) {
      alert(`No se puede guardar la semana porque ${selectedEmployee.name} tiene ausencia aprobada en: ${blockedDays.join(", ")}.`);
      return;
    }
    const nextWeekShifts = [];

    days.forEach((day) => {
      if (data.get(`plan-enabled-${day}`) !== "on") return;
      const start = String(data.get(`plan-start-${day}`) || "");
      const end = String(data.get(`plan-end-${day}`) || "");
      const range = parseShiftTimeRange(`${start} - ${end}`);
      if (!range || range.end <= range.start) return;
      nextWeekShifts.push({
        id: uid("shift"),
        week,
        day,
        area: selectedEmployee.area,
        employeeId: plannerEmployeeId,
        time: `${start} - ${end}`,
        note,
      });
    });

    appState.shifts = appState.shifts.filter((shift) => !(shift.employeeId === plannerEmployeeId && shift.week === week));
    appState.shifts.push(...nextWeekShifts);

    appState.ui.shiftPlannerEmployeeId = plannerEmployeeId;
    appState.ui.currentShiftWeek = week;
  }

  if (formType === "shift-template-save") {
    const currentEmployee = getCurrentEmployee();
    const allowedEmployees = manageableShiftEmployees(currentEmployee);
    const employeeId = String(data.get("employeeId") || "");
    const week = String(data.get("week") || appState.ui.currentShiftWeek || "Semana actual");
    const name = String(data.get("name") || "").trim();
    const employee = getEmployeeById(employeeId);
    if (!employee || !name || !allowedEmployees.some((item) => item.id === employeeId)) return;
    const employeeShifts = appState.shifts.filter((shift) => shift.employeeId === employeeId && shift.week === week);
    if (!employeeShifts.length) {
      alert("Ese empleado no tiene turnos en esa semana para guardar como plantilla.");
      return;
    }
    appState.shiftTemplates.unshift({
      id: uid("template"),
      name,
      area: employee.area,
      slots: employeeShifts.map((shift) => {
        const [start = "10:00", end = "17:00"] = String(shift.time).split("-").map((item) => item.trim());
        return { day: shift.day, start, end };
      }),
    });
  }

  if (formType === "shift-template-apply") {
    const currentEmployee = getCurrentEmployee();
    const allowedEmployees = manageableShiftEmployees(currentEmployee);
    const employeeId = String(data.get("employeeId") || "");
    const week = String(data.get("week") || appState.ui.currentShiftWeek || "Semana actual");
    const templateId = String(data.get("templateId") || "");
    const note = String(data.get("note") || "").trim();
    const employee = getEmployeeById(employeeId);
    const template = appState.shiftTemplates.find((item) => item.id === templateId);
    if (!employee || !template || !allowedEmployees.some((item) => item.id === employeeId)) return;
    if (template.area !== employee.area) {
      alert("La plantilla seleccionada no coincide con el area del empleado.");
      return;
    }
    const blockedDays = template.slots
      .map((slot) => slot.day)
      .filter((day) => getDayAvailability(employeeId, week, day).blocked);
    if (blockedDays.length) {
      alert(`No se puede aplicar la plantilla porque hay ausencias aprobadas en: ${blockedDays.join(", ")}.`);
      return;
    }

    const templateDays = new Set(template.slots.map((slot) => slot.day));
    appState.shifts = appState.shifts.filter((shift) => !(shift.employeeId === employeeId && shift.week === week && templateDays.has(shift.day)));
    template.slots.forEach((slot) => {
      appState.shifts.push({
        id: uid("shift"),
        week,
        day: slot.day,
        area: employee.area,
        employeeId,
        time: `${slot.start} - ${slot.end}`,
        note,
      });
    });
    appState.ui.shiftPlannerEmployeeId = employeeId;
    appState.ui.currentShiftWeek = week;
  }

  if (formType === "timeoff") {
    const currentEmployee = getCurrentEmployee();
    const allowedEmployees = manageableEmployees(currentEmployee);
    const employee = getEmployeeById(data.get("employeeId"));
    if (!employee || !allowedEmployees.some((item) => item.id === employee.id)) return;
    const balance = calculateVacationBalance(employee);
    const from = new Date(data.get("from"));
    const to = new Date(data.get("to"));
    const daysRequested = Math.max(1, Math.round((to - from) / 86400000) + 1);
    if (data.get("type") === "Vacaciones" && daysRequested > balance.available) {
      alert(`Ese empleado solo tiene ${balance.available} dias disponibles ahora mismo.`);
      return;
    }
    appState.timeOffRequests.unshift({
      id: uid("req"),
      employeeId: employee.id,
      type: data.get("type"),
      from: data.get("from"),
      to: data.get("to"),
      status: "Pendiente",
    });
  }

  if (formType === "chat") {
    const employee = getCurrentEmployee();
    const area = String(data.get("area") || "").trim();
    const allowedAreas = visibleChatAreas(employee);
    if (!allowedAreas.includes(area)) return;
    appState.chats.unshift({
      id: uid("chat"),
      area,
      urgent: data.get("urgent") === "on",
      author: appState.ui.currentView === "admin" ? "Empresa" : employee.name,
      message: data.get("message").trim(),
      audience: [area, "General"],
      createdAt: new Date().toISOString(),
    });
    appState.ui.activeChatArea = area;
  }

  if (formType === "inventory") {
    const employee = getCurrentEmployee();
    if (!canEditInventory(employee)) return;
    const area = String(data.get("area") || "").trim();
    if (!canAccessArea(employee, area)) return;
    appState.inventory.unshift({
      id: uid("inv"),
      name: data.get("name").trim(),
      area,
      unit: String(data.get("unit") || "").trim(),
    });
  }

  if (formType === "temperature-equipment") {
    const currentEmployee = getCurrentEmployee();
    const area = String(data.get("area") || getAreaForView(currentEmployee));
    if (!canAddTemperatureEquipment(currentEmployee, area)) return;
    appState.temperatureEquipment.unshift({
      id: uid("temp-eq"),
      name: String(data.get("name") || "").trim(),
      area,
      target: String(data.get("target") || "").trim(),
    });
  }

  if (formType === "temperature-log") {
    const employee = getCurrentEmployee();
    const equipmentId = String(data.get("equipmentId") || "");
    const equipment = visibleTemperatureEquipment(employee).find((item) => item.id === equipmentId);
    if (!equipment) {
      alert("Primero elige un equipo.");
      return;
    }
    appState.temperatureLogs.unshift({
      id: uid("temp-log"),
      equipmentId,
      area: equipment.area,
      value: Number(data.get("value")),
      note: String(data.get("note") || "").trim(),
      recordedAt: new Date().toISOString(),
      author: appState.ui.currentView === "admin" ? "Empresa" : employee.name,
    });
  }

  if (formType === "recipe") {
    const employee = getCurrentEmployee();
    if (!canEditRecipes(employee)) return;
    const recipeId = String(data.get("recipeId") || "").trim();
    const ingredients = String(data.get("ingredients") || "")
      .split(/\r?\n/)
      .map((item) => item.trim())
      .filter(Boolean);
    const allergens = data.getAll("allergens").map((item) => String(item).trim()).filter(Boolean);
    if (!ingredients.length) {
      alert("Carga al menos un ingrediente para guardar la receta.");
      return;
    }
    const payload = {
      name: String(data.get("name") || "").trim(),
      area: "Cocina",
      yieldLabel: String(data.get("yieldLabel") || "").trim(),
      allergens,
      ingredients,
      notes: String(data.get("notes") || "").trim(),
      serviceNotes: String(data.get("serviceNotes") || "").trim(),
      author: appState.ui.currentView === "admin" ? "Empresa" : employee.name,
    };
    if (recipeId) {
      const existingRecipe = getRecipeById(recipeId);
      if (existingRecipe && canAccessArea(employee, existingRecipe.area)) {
        Object.assign(existingRecipe, payload);
      }
    } else {
      appState.recipes.unshift({
        id: uid("recipe"),
        ...payload,
      });
    }
    appState.ui.recipeDraftId = null;
    appState.ui.recipeFormOpen = false;
  }

  if (formType === "labor-document") {
    const currentEmployee = getCurrentEmployee();
    const employeeId = String(data.get("employeeId") || "");
    const docEmployee = getEmployeeById(employeeId);
    if (!docEmployee || !canUploadLaborDocument(currentEmployee, employeeId)) return;
    appState.laborDocuments.unshift({
      id: uid("doc"),
      employeeId,
      area: docEmployee?.area ?? "General",
      type: String(data.get("type") || "Otro"),
      title: String(data.get("title") || "").trim(),
      period: String(data.get("period") || "").trim(),
      summary: String(data.get("summary") || "").trim(),
      uploadedAt: new Date().toISOString(),
      author: appState.ui.currentView === "admin" ? "Empresa" : currentEmployee.name,
      visibility: String(data.get("visibility") || "Empleado y empresa"),
    });
  }

  if (formType === "order") {
    const employee = getCurrentEmployee();
    if (!(canEditOrders(employee) || appState.ui.currentView === "admin")) {
      return;
    }
    const area = String(data.get("area") || "").trim();
    if (!canAccessArea(employee, area)) return;
    const item = String(data.get("item") || "").trim();
    const inventoryItem = inventoryItemsForArea(employee, area).find((entry) => entry.name === item);
    if (!inventoryItem) return;
    appState.orders.unshift({
      id: uid("order"),
      area,
      item,
      unit: inventoryItem.unit,
      quantity: Number(data.get("quantity")),
      note: data.get("note").trim(),
      status: "Borrador",
      editableBy: [getRoleName(employee), "Administrador"],
    });
    appState.ui.orderDraft = null;
  }

  if (formType === "order-bulk") {
    const employee = getCurrentEmployee();
    if (!(canEditOrders(employee) || appState.ui.currentView === "admin")) {
      return;
    }
    const area = String(data.get("area") || getActiveOrdersArea(employee));
    if (!canAccessArea(employee, area)) return;
    const areaOrders = appState.orders.filter((order) => (
      order.area === area
      && !["Recibido", "Recibido con incidencia", "Cerrado"].includes(order.status)
    ));
    let touched = 0;
    areaOrders.forEach((order) => {
      if (!canManageOrderLine(employee, order)) return;
      const rawQuantity = String(data.get(`qty-${order.id}`) || "").trim();
      const quantity = Number(rawQuantity || 0);
      const note = String(data.get(`note-${order.id}`) || "").trim();
      const status = String(data.get(`status-${order.id}`) || "Borrador");
      const existingIndex = appState.orders.findIndex((item) => item.id === order.id);
      const hasValue = rawQuantity !== "" && quantity > 0;

      if (!hasValue) {
        if (existingIndex >= 0) {
          appState.orders.splice(existingIndex, 1);
          touched += 1;
        }
        return;
      }

      const payload = {
        area,
        item: order.item,
        unit: order.unit,
        quantity,
        note,
        status,
        editableBy: [getRoleName(employee), "Administrador"],
      };

      if (existingIndex >= 0) {
        appState.orders[existingIndex] = {
          ...appState.orders[existingIndex],
          ...payload,
        };
      } else {
        appState.orders.unshift({
          id: uid("order"),
          ...payload,
        });
      }
      touched += 1;
    });
    appState.ui.orderDraft = null;
    if (!touched) {
      alert("Ajusta al menos una linea para guardar el pedido actual.");
      return;
    }
  }

  if (formType === "order-reception") {
    const employee = getCurrentEmployee();
    if (!(canEditOrders(employee) || appState.ui.currentView === "admin")) {
      return;
    }
    const area = String(data.get("area") || getActiveOrdersArea(employee));
    if (!canAccessArea(employee, area)) return;
    const areaOrders = visibleOrders(employee).filter((order) => (
      order.area === area
      && order.status === "Cerrado"
    ));
    let touched = 0;

    areaOrders.forEach((order) => {
      const rawReceived = String(data.get(`received-${order.id}`) || "").trim();
      const receivedNote = String(data.get(`received-note-${order.id}`) || "").trim();
      const hasReceivedValue = rawReceived !== "";

      if (!hasReceivedValue && !receivedNote) return;

      if (hasReceivedValue) {
        const receivedQuantity = Number(rawReceived || 0);
        order.receivedQuantity = receivedQuantity;
        order.receivedDate = getTodayKey();
        const difference = Number((Number(order.quantity || 0) - receivedQuantity).toFixed(2));
        order.status = difference > 0 || receivedNote
          ? "Recibido con incidencia"
          : "Recibido";
      }

      order.receivedNote = receivedNote;
      touched += 1;
    });

    if (!touched) {
      alert("Carga al menos una recepcion o una observacion para guardar.");
      return;
    }
  }

  if (formType === "settings") {
    if (appState.ui.currentView !== "admin") return;
    appState.business.name = data.get("businessName").trim() || appState.business.name;
    appState.business.city = data.get("city").trim() || appState.business.city;
    appState.business.slogan = data.get("slogan").trim() || appState.business.slogan;
    appState.business.logoMark = String(data.get("logoMark") || appState.business.logoMark || "BF").trim().slice(0, 3).toUpperCase();
    appState.settings.annualVacationDays = Number(data.get("annualVacationDays"));
    appState.settings.accrualMode = data.get("accrualMode");
    appState.settings.visibilityMode = data.get("visibilityMode").trim();
    appState.settings.notifications = data.get("notifications").trim();
    appState.settings.chatRetentionDays = Number(data.get("chatRetentionDays") || 14);
    appState.settings.worksiteLabel = data.get("worksiteLabel").trim() || appState.settings.worksiteLabel;
    appState.settings.clockInRadiusMeters = Number(data.get("clockInRadiusMeters") || appState.settings.clockInRadiusMeters || 80);
    appState.settings.worksiteLatitude = parseOptionalNumber(data.get("worksiteLatitude"), appState.settings.worksiteLatitude);
    appState.settings.worksiteLongitude = parseOptionalNumber(data.get("worksiteLongitude"), appState.settings.worksiteLongitude);
    appState.settings.clockInGeoMode = data.get("clockInGeoMode") || appState.settings.clockInGeoMode;
    appState.settings.brandAccent = String(data.get("brandAccent") || appState.settings.brandAccent);
    appState.settings.brandStrong = String(data.get("brandStrong") || appState.settings.brandStrong);
  }

  form.reset();
  renderApp();
}

function bindAuthEvents() {
  const loginForm = document.getElementById("login-form");
  if (!loginForm) return;
  loginForm.onsubmit = (event) => {
    event.preventDefault();
    const data = new FormData(loginForm);
    const email = String(data.get("email") || "").trim().toLowerCase();
    const password = String(data.get("password") || "");
    const user = appState.users.find((item) => item.email.toLowerCase() === email && item.password === password);
    if (!user) {
      alert("Credenciales incorrectas.");
      return;
    }
    appState.ui.currentUserId = user.id;
    syncSessionWithUser(user);
    renderApp();
  };
}

function bindEvents() {
  const currentUser = getCurrentUser();

  if (currentUser?.view === "admin") {
    const employeeSelector = document.getElementById("employee-selector");
    if (employeeSelector) {
      employeeSelector.onchange = (event) => {
        appState.ui.currentEmployeeId = event.target.value;
        renderApp();
      };
    }
  }

  document.querySelectorAll(".nav-link").forEach((button) => {
    button.onclick = () => {
      appState.ui.currentSection = button.dataset.section;
      renderApp();
    };
  });

  const mobileSectionSelector = document.getElementById("mobile-section-selector");
  if (mobileSectionSelector) {
    mobileSectionSelector.onchange = (event) => {
      appState.ui.currentSection = event.target.value;
      renderApp();
    };
  }

  document.querySelectorAll("[data-section-target]").forEach((button) => {
    button.onclick = () => {
      appState.ui.currentSection = button.dataset.sectionTarget;
      renderApp();
    };
  });

  document.querySelectorAll("[data-open-form]").forEach((button) => {
    button.onclick = () => {
      const form = document.getElementById(button.dataset.openForm);
      if (form) form.hidden = !form.hidden;
    };
  });

  document.querySelectorAll("[data-chat-area]").forEach((button) => {
    button.onclick = () => {
      appState.ui.activeChatArea = button.dataset.chatArea;
      renderApp();
    };
  });

  document.querySelectorAll("[data-shift-week]").forEach((button) => {
    button.onclick = () => {
      appState.ui.currentShiftWeek = button.dataset.shiftWeek;
      renderApp();
    };
  });

  document.querySelectorAll("[data-shift-area]").forEach((select) => {
    select.onchange = (event) => {
      updateShiftEmployeeOptions(event.target.value);
    };
  });

  document.querySelectorAll("[data-order-area]").forEach((select) => {
    select.onchange = (event) => {
      updateOrderItemOptions(event.target.value);
    };
  });

  document.querySelectorAll("[data-order-item]").forEach((select) => {
    select.onchange = (event) => {
      const form = event.target.form;
      if (!form) return;
      form.elements.quantity.value = Number(form.elements.quantity.value) > 0 ? form.elements.quantity.value : 1;
    };
  });

  document.querySelectorAll("[data-shift-planner-employee]").forEach((select) => {
    select.onchange = (event) => {
      appState.ui.shiftPlannerEmployeeId = event.target.value;
      renderApp();
    };
  });

  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.onsubmit = handleFormSubmit;
  });

  document.querySelectorAll("[data-action='approve-request']").forEach((button) => {
    button.onclick = () => updateRequestStatus(button.dataset.id, "Aprobada");
  });

  document.querySelectorAll("[data-action='reject-request']").forEach((button) => {
    button.onclick = () => updateRequestStatus(button.dataset.id, "Rechazada");
  });

  document.querySelectorAll("[data-action='edit-shift']").forEach((button) => {
    button.onclick = () => openShiftEditor(button.dataset.id);
  });

  document.querySelectorAll("[data-action='delete-shift']").forEach((button) => {
    button.onclick = () => deleteShift(button.dataset.id);
  });

  document.querySelectorAll("[data-action='duplicate-week']").forEach((button) => {
    button.onclick = () => duplicateWeekShifts();
  });

  document.querySelectorAll("[data-action='send-to-order']").forEach((button) => {
    button.onclick = () => prefillOrderFromInventory(button.dataset.id);
  });

  document.querySelectorAll("[data-action='open-area-orders']").forEach((button) => {
    button.onclick = () => {
      appState.ui.activeOrdersArea = button.dataset.area;
      appState.ui.currentSection = "orders";
      renderApp();
    };
  });

  document.querySelectorAll("[data-action='set-orders-area']").forEach((button) => {
    button.onclick = () => {
      appState.ui.activeOrdersArea = button.dataset.area;
      renderApp();
    };
  });

  document.querySelectorAll("[data-action='new-recipe']").forEach((button) => {
    button.onclick = () => {
      appState.ui.recipeDraftId = null;
      appState.ui.recipeFormOpen = true;
      renderApp();
    };
  });

  document.querySelectorAll("[data-action='set-allergen-filter']").forEach((button) => {
    button.onclick = () => {
      appState.ui.activeAllergenFilter = button.dataset.allergen;
      renderApp();
    };
  });

  document.querySelectorAll("[data-action='set-order-status']").forEach((button) => {
    button.onclick = () => setOrderStatus(button.dataset.id, button.dataset.status);
  });

  document.querySelectorAll("[data-action='delete-order-line']").forEach((button) => {
    button.onclick = () => deleteOrderLine(button.dataset.id);
  });

  document.querySelectorAll("[data-action='enable-notifications']").forEach((button) => {
    button.onclick = async () => {
      if (appState.ui.currentView === "admin") return;
      if (!("Notification" in window)) return;
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        maybeNotifyUpcomingShift(getCurrentEmployee());
      }
      renderApp();
    };
  });

  document.querySelectorAll("[data-action='export-report']").forEach((button) => {
    button.onclick = () => exportReportPdf(button.dataset.report);
  });

  document.querySelectorAll("[data-action='export-document']").forEach((button) => {
    button.onclick = () => exportLaborDocument(button.dataset.id);
  });

  document.querySelectorAll("[data-action='set-document-type']").forEach((button) => {
    button.onclick = () => {
      appState.ui.activeDocumentType = button.dataset.type;
      renderApp();
    };
  });

  document.querySelectorAll("[data-action='edit-recipe']").forEach((button) => {
    button.onclick = () => editRecipe(button.dataset.id);
  });

  document.querySelectorAll("[data-action='delete-recipe']").forEach((button) => {
    button.onclick = () => deleteRecipe(button.dataset.id);
  });

  document.querySelectorAll("[data-action='show-recipe-allergens']").forEach((button) => {
    button.onclick = () => showRecipeAllergens(button.dataset.id);
  });

  document.querySelectorAll("[data-action='cancel-recipe-edit']").forEach((button) => {
    button.onclick = () => {
      appState.ui.recipeDraftId = null;
      appState.ui.recipeFormOpen = false;
      renderApp();
    };
  });

  document.querySelectorAll("[data-recipe-search]").forEach((input) => {
    input.oninput = (event) => {
      appState.ui.recipeSearch = event.target.value;
      renderApp();
    };
  });

  document.querySelectorAll("[data-action='clock-in']").forEach((button) => {
    button.onclick = () => clockInCurrentEmployee();
  });

  document.querySelectorAll("[data-action='clock-out']").forEach((button) => {
    button.onclick = () => clockOutCurrentEmployee();
  });

  document.querySelectorAll("[data-action='logout']").forEach((button) => {
    button.onclick = () => {
      appState.ui.currentUserId = null;
      renderApp();
    };
  });

  document.querySelectorAll("[data-action='reset-demo']").forEach((button) => {
    button.onclick = () => {
      appState = structuredClone(defaultState);
      renderApp();
    };
  });
}

async function bootstrapApp() {
  appState = await loadState();
  lastPersistedSnapshot = JSON.stringify(getPersistedState());
  renderApp();
}

bootstrapApp();


