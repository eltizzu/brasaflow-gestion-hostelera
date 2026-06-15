# BrasaFlow

Suite local de apps para hosteleria:

- `BrasaFlow`: personal, turnos, fichaje, inventario, pedidos y comunicacion interna.
- `BrasaReservas`: reservas, sala, lista de espera y clientes.
- `BrasaComandas`: mesas, comandas, cocina, barra e historial de servicio.
- `BrasaConnect`: proveedores, catalogos, pedidos, albaranes e incidencias.

## Puesta en marcha

```powershell
npm run db:init
npm run db:seed
```

La base local se crea en `data/brasa-product.sqlite`. Los estados demo actuales se cargan como snapshots por app.

## Como abrir cada app

Landing ecosistema:

```text
http://127.0.0.1:4173/index.html
```

BrasaFlow demo:

```text
http://127.0.0.1:4173/demo.html
```

Apps hermanas:

```text
http://127.0.0.1:4290/index.html
http://127.0.0.1:4300/index.html
http://127.0.0.1:4280/index.html
```

## Comandos

```powershell
npm run start:flow
npm run start:reservas
npm run start:comandas
npm run start:connect
npm test
```

## Persistencia actual

- La API `/api/state` se mantiene para no romper la UI.
- El estado ya no se escribe directamente en JSON: se guarda en SQLite con snapshots por app.
- Cada reemplazo de estado conserva una entrada en `state_history`.
- Los JSON actuales quedan como fuente de seed/demo, no como persistencia principal.

## Siguiente paso de producto

- Convertir snapshots en tablas relacionales por dominio.
- Login real con sesiones y permisos.
- Separar rutas publicas de rutas internas.
- Integraciones reales entre Reservas, Comandas, Flow y Connect.
- Hosting, backups y notificaciones reales.
