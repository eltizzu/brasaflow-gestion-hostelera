const { createAppServer } = require("./src/server/app-server");

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Falta configurar la variable de entorno ${name}.`);
  }
  return value;
}

createAppServer({
  appId: "brasaflow",
  appName: "BrasaFlow",
  root: __dirname,
  port: 4173,
  authUsers: [
    { id: "user-1", name: "Lucia Moreno", email: "lucia@brasaflow-demo.com", password: requiredEnv("BRASAFLOW_EMPLOYEE_PASSWORD"), view: "employee", employeeId: "emp-1" },
    { id: "user-2", name: "Paula Serra", email: "paula@brasaflow-demo.com", password: requiredEnv("BRASAFLOW_MANAGER_PASSWORD"), view: "manager", employeeId: "emp-3" },
    { id: "user-3", name: "Admin BrasaFlow", email: "admin@brasaflow-demo.com", password: requiredEnv("BRASAFLOW_ADMIN_PASSWORD"), view: "admin", employeeId: "emp-1" },
    { id: "user-4", name: "Lucia Moreno", email: "cocina@brasaflow-demo.com", password: requiredEnv("BRASAFLOW_KITCHEN_PASSWORD"), view: "manager", employeeId: "emp-1" },
    { id: "user-5", name: "Mario Vidal", email: "sala@brasaflow-demo.com", password: requiredEnv("BRASAFLOW_SALA_PASSWORD"), view: "employee", employeeId: "emp-4" },
  ],
});
