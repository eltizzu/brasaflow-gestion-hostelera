const { createAppServer } = require("./src/server/app-server");

createAppServer({
  appId: "brasaflow",
  appName: "BrasaFlow",
  root: __dirname,
  port: 4173,
  authUsers: [
    { id: "user-1", name: "Lucia Moreno", email: "lucia@brasaflow-demo.com", password: "1234", view: "employee", employeeId: "emp-1" },
    { id: "user-2", name: "Paula Serra", email: "paula@brasaflow-demo.com", password: "1234", view: "manager", employeeId: "emp-3" },
    { id: "user-3", name: "Admin BrasaFlow", email: "admin@brasaflow-demo.com", password: "1234", view: "admin", employeeId: "emp-1" },
    { id: "user-4", name: "Lucia Moreno", email: "cocina@brasaflow-demo.com", password: "1234", view: "manager", employeeId: "emp-1" },
    { id: "user-5", name: "Mario Vidal", email: "sala@brasaflow-demo.com", password: "1234", view: "employee", employeeId: "emp-4" },
  ],
});
