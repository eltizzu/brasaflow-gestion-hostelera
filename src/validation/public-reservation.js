const { sanitizeText, validateNumber } = require("./input");

function validatePublicReservation(input) {
  const errors = {};
  const clientName = sanitizeText(input.clientName, { required: true, maxLength: 100 });
  const phone = sanitizeText(input.phone, { required: true, maxLength: 40 });
  const date = sanitizeText(input.date, { required: true, maxLength: 20 });
  const time = sanitizeText(input.time, { required: true, maxLength: 20 });
  const service = sanitizeText(input.service || "Comida", { maxLength: 30 });
  const note = sanitizeText(input.note || "", { maxLength: 500 });
  const people = validateNumber(input.people, { required: true, min: 1, max: 20 });

  if (!clientName.valid) errors.clientName = clientName.error === "Campo requerido." ? "Indica tu nombre." : clientName.error;
  if (!phone.valid) errors.phone = phone.error === "Campo requerido." ? "Indica un telefono de contacto." : phone.error;
  if (!date.valid) errors.date = date.error === "Campo requerido." ? "Elige una fecha." : date.error;
  if (!time.valid) errors.time = time.error === "Campo requerido." ? "Elige una hora." : time.error;
  if (!service.valid) errors.service = service.error;
  if (!note.valid) errors.note = note.error;
  if (!people.valid) {
    errors.people = "El numero de personas debe estar entre 1 y 20.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    value: {
      clientName: clientName.value,
      phone: phone.value,
      date: date.value,
      time: time.value,
      service: service.value || "Comida",
      people: people.value,
      note: note.value,
    },
  };
}

module.exports = { validatePublicReservation };
