# BrasaConnect

Prototipo local de una app hermana de BrasaFlow para conectar negocios hosteleros con proveedores.

## Que incluye esta base

- Vista `Negocio`
- Vista `Proveedor`
- Vista `Red`
- Perfiles de proveedores
- Catalogos por proveedor
- Pedidos conectados
- Estados del pedido
- Detalle de pedido con timeline
- Historial
- Albaranes registrados
- Incidencias de recepcion
- Alta rapida de productos desde vista proveedor

## Flujo demo recomendado

1. Entrar en vista `Red`.
2. Ver proveedores disponibles y solicitar conexion.
3. Entrar en vista `Negocio`.
4. Abrir `Catalogo` y crear un pedido demo.
5. Ir a `Pedidos` y ver detalle, articulos e historial.
6. Cambiar a vista `Proveedor`.
7. Avanzar el estado del pedido.
8. Registrar albaran demo.
9. Volver a vista `Negocio` y marcar recepcion o incidencia.

## Como abrirlo

Usa `server.js` y abre:

`http://127.0.0.1:4280/index.html`

## Enfoque del prototipo

BrasaConnect no reemplaza a BrasaFlow.

- BrasaFlow ordena la operativa interna del negocio.
- BrasaConnect ordena la relacion entre negocios hosteleros y proveedores.

## Que falta para producto real

- Login real
- Base de datos
- Archivos reales para albaranes
- Notificaciones
- Permisos por empresa
- Invitaciones y conexiones reales entre negocios y proveedores
- Motor de busqueda avanzado
- Integracion futura con BrasaFlow
