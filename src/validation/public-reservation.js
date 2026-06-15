function validatePublicReservation(input) {
  const errors = {};
  const people = Number(input.people || 0);

  if (!String(input.clientName || "").trim()) errors.clientName = "Indica tu nombre.";
  if (!String(input.phone || "").trim()) errors.phone = "Indica un telefono de contacto.";
  if (!String(input.date || "").trim()) errors.date = "Elige una fecha.";
  if (!String(input.time || "").trim()) errors.time = "Elige una hora.";
  if (!Number.isFinite(people) || people < 1 || people > 20) {
    errors.people = "El numero de personas debe estar entre 1 y 20.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

module.exports = { validatePublicReservation };
