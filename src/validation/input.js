const DEFAULT_TEXT_MAX_LENGTH = 500;
const DEFAULT_STATE_TEXT_MAX_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const HTML_OR_SCRIPT_PATTERN = /<[^>]*>|javascript:|on[a-z]+\s*=/i;

function hasHtmlOrScript(value) {
  return HTML_OR_SCRIPT_PATTERN.test(String(value || ""));
}

function sanitizeText(value, options = {}) {
  const maxLength = options.maxLength ?? DEFAULT_TEXT_MAX_LENGTH;
  const required = Boolean(options.required);
  const text = String(value ?? "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();

  if (required && !text) {
    return { valid: false, error: "Campo requerido." };
  }
  if (hasHtmlOrScript(text)) {
    return { valid: false, error: "No incluyas HTML ni scripts." };
  }
  if (text.length > maxLength) {
    return { valid: false, error: `Maximo ${maxLength} caracteres.` };
  }

  return { valid: true, value: text };
}

function validateEmail(value, options = {}) {
  const textResult = sanitizeText(value, { ...options, maxLength: options.maxLength ?? 254 });
  if (!textResult.valid) return textResult;
  if ((options.required || textResult.value) && !EMAIL_PATTERN.test(textResult.value)) {
    return { valid: false, error: "Email invalido." };
  }
  return textResult;
}

function validateNumber(value, options = {}) {
  const required = Boolean(options.required);
  const text = String(value ?? "").trim();

  if (required && !text) {
    return { valid: false, error: "Campo requerido." };
  }
  if (!text && !required) {
    return { valid: true, value: options.defaultValue ?? null };
  }
  if (hasHtmlOrScript(text)) {
    return { valid: false, error: "No incluyas HTML ni scripts." };
  }

  const parsed = Number(text);
  if (!Number.isFinite(parsed)) {
    return { valid: false, error: "Debe ser un numero valido." };
  }
  if (options.min !== undefined && parsed < options.min) {
    return { valid: false, error: `Debe ser mayor o igual a ${options.min}.` };
  }
  if (options.max !== undefined && parsed > options.max) {
    return { valid: false, error: `Debe ser menor o igual a ${options.max}.` };
  }

  return { valid: true, value: parsed };
}

function validateStatePayload(payload) {
  const errors = {};

  function visit(value, path) {
    if (typeof value === "string") {
      const result = sanitizeText(value, { maxLength: DEFAULT_STATE_TEXT_MAX_LENGTH });
      if (!result.valid) errors[path || "payload"] = result.error;
      return result.valid ? result.value : value;
    }
    if (typeof value === "number" && !Number.isFinite(value)) {
      errors[path || "payload"] = "Debe ser un numero valido.";
      return value;
    }
    if (Array.isArray(value)) {
      return value.map((item, index) => visit(item, path ? `${path}.${index}` : String(index)));
    }
    if (value && typeof value === "object") {
      return Object.entries(value).reduce((nextValue, [key, child]) => {
        nextValue[key] = visit(child, path ? `${path}.${key}` : key);
        return nextValue;
      }, {});
    }
    return value;
  }

  const value = visit(payload, "");
  return {
    valid: Object.keys(errors).length === 0,
    errors,
    value,
  };
}

module.exports = {
  sanitizeText,
  validateEmail,
  validateNumber,
  validateStatePayload,
  hasHtmlOrScript,
};
