# Manual de uso de BrasaConnect

BrasaConnect ayuda a ordenar la relacion entre un negocio hostelero y sus proveedores.

Es la app del ecosistema Brasa pensada para catalogos, pedidos, albaranes, recepciones e incidencias.

## 1. Para que sirve

BrasaConnect sirve para que:

- El negocio vea proveedores, catalogos, pedidos y albaranes.
- El proveedor vea pedidos recibidos, estados, catalogo y perfil.
- Ambos tengan un historial claro de lo que paso.

En pocas palabras: BrasaConnect ordena compras y proveedores.

## 2. Como entrar

Abrir:

`index.html`

Si se usa servidor local:

`http://127.0.0.1:4280/index.html`

## 3. Vistas de demo

La app tiene tres vistas:

- `Negocio`: lo que ve el restaurante, bar o cafeteria.
- `Proveedor`: lo que ve la empresa que vende productos.
- `Red`: una vista de descubrimiento y conexiones.

El selector superior permite cambiar el punto de vista.

En movil, el selector `Ir a seccion` permite cambiar rapido entre pantallas.

## 4. Vista Negocio

Representa al restaurante, bar, cafeteria o negocio hostelero.

Permite:

- Ver resumen de actividad.
- Ver proveedores conectados.
- Consultar catalogos.
- Crear pedidos desde catalogo.
- Revisar pedidos.
- Ver estado de cada pedido.
- Consultar albaranes.
- Marcar recepcion.
- Registrar incidencias.
- Ver perfil del negocio.

### Crear un pedido

1. Entrar en vista `Negocio`.
2. Ir a `Catalogo`.
3. Elegir un producto.
4. Pulsar la accion para crear pedido de demo.
5. Ir a `Pedidos`.
6. Abrir el pedido generado.
7. Revisar articulos, total, estado e historial.

### Revisar un pedido

1. Entrar en `Pedidos`.
2. Seleccionar un pedido.
3. Revisar proveedor, fecha de entrega, estado, articulos, total, timeline y albaran asociado.

### Marcar recepcion o incidencia

1. Entrar en `Pedidos` o `Albaranes`.
2. Revisar el pedido.
3. Marcar recepcion si todo esta correcto.
4. Marcar incidencia si hay una diferencia.

## 5. Vista Proveedor

Representa a una empresa que vende producto a hosteleria.

Permite:

- Ver pedidos recibidos.
- Ver pedidos pendientes.
- Avanzar estados.
- Registrar albaranes de demo.
- Ver catalogo.
- Agregar productos.
- Mantener perfil visible.

### Avanzar un pedido

1. Cambiar a vista `Proveedor`.
2. Entrar en `Pedidos`.
3. Seleccionar un pedido.
4. Avanzar estado.
5. Revisar el timeline.

### Registrar un albaran de demo

1. Entrar en vista `Proveedor`.
2. Abrir un pedido.
3. Usar la accion de registrar albaran.
4. Revisar que el pedido queda con albaran asociado.

### Agregar producto al catalogo

1. Entrar en vista `Proveedor`.
2. Ir a `Catalogo`.
3. Completar datos del producto.
4. Guardar.
5. Revisar que aparece en catalogo.

## 6. Vista Red

Representa el lado marketplace o red de contactos.

Permite:

- Ver proveedores disponibles.
- Revisar categoria.
- Revisar zona de reparto.
- Revisar condiciones.
- Solicitar conexion.
- Descubrir nuevos proveedores.

### Solicitar conexion

1. Cambiar a vista `Red`.
2. Revisar la lista de proveedores.
3. Elegir uno que no este conectado.
4. Pulsar la accion de solicitar conexion.
5. Volver a vista `Negocio`.
6. Revisar proveedores.

## 7. Albaranes

Los albaranes relacionan el pedido con la entrega.

En la demo se puede mostrar:

- Numero de albaran.
- Pedido asociado.
- Proveedor.
- Estado.
- Incidencia si existe.

En producto real, esta parte podria incluir archivos PDF, fotos, firma, lectura con IA y comparacion contra pedido.

## 8. Historial

El historial permite ver que paso con un pedido.

Ejemplos:

- Pedido creado.
- Proveedor confirmo.
- Pedido preparado.
- Albaran registrado.
- Recepcion revisada.
- Incidencia marcada.

La idea es que el pedido no quede perdido en conversaciones sueltas.

## 9. Datos de demo

Todos los datos son ficticios:

- Negocios.
- Proveedores.
- Productos.
- Precios.
- Pedidos.
- Albaranes.
- Incidencias.

No conviene usar datos reales de empresas, clientes, facturacion o proveedores en una prueba.

## 10. Como guarda cambios

Cuando se usa con servidor local, la demo guarda los cambios en esta instalacion de prueba.

Cuando se abre como web estatica, algunos cambios pueden quedar solo en el navegador del visitante.

## 11. Flujo recomendado para probar

1. Entrar en `Red`.
2. Ver proveedores disponibles.
3. Solicitar conexion.
4. Cambiar a `Negocio`.
5. Entrar en `Catalogo`.
6. Crear pedido de demo.
7. Entrar en `Pedidos`.
8. Abrir el detalle.
9. Cambiar a `Proveedor`.
10. Avanzar estado.
11. Registrar albaran.
12. Volver a `Negocio`.
13. Revisar historial e incidencia.

## 12. Que esta listo para mostrar

- Vista Negocio.
- Vista Proveedor.
- Vista Red.
- Proveedores conectados.
- Catalogo.
- Pedido desde catalogo.
- Estados de pedido.
- Timeline.
- Albaranes.
- Incidencias.
- Perfil.
- Relacion conceptual con BrasaFlow.

## 13. Que falta para producto real

- Login y permisos completos por empresa.
- Invitaciones reales.
- Archivos reales de albaran.
- Notificaciones.
- Busqueda avanzada.
- Integracion final con BrasaFlow.
- Lectura de albaranes con IA.

## 14. Mensaje simple para explicar la app

BrasaConnect ordena la relacion entre restaurante y proveedor: catalogo, pedido, confirmacion, albaran, recepcion e historial compartido.
