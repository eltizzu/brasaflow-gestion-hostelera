# BrasaFlow

Prototipo local de una app de gestion de personal para hosteleria.

## Que incluye esta base

- Vista `Empleado`, `Encargado` y `Empresa`
- Turnos por area
- Vacaciones acumuladas segun fecha de alta
- Chats general y por area
- Inventario compartido
- Hoja de pedido editable por responsables
- Puestos configurables por el negocio

## Como abrirlo

Abre `http://127.0.0.1:4173/index.html` en el navegador usando `server.js`.

## Persistencia actual

- Los datos ya no dependen solo del navegador.
- El estado se guarda en `data/app-state.json` mediante una API local simple.
- Esto deja la base preparada para cambiar despues a una base de datos real.

## Que falta para producto real

- Base de datos
- Login real
- Hosting
- Notificaciones push
- Almacenamiento seguro de documentos
- Reglas legales por convenio o contrato
