# Mapa Del Ecosistema Brasa

## 1. Idea Principal

Brasa No Es Una Sola App Gigante.

Brasa Es Un Ecosistema De 4 Apps Hermanas Para Hosteleria:

- `BrasaFlow`
- `BrasaReservas`
- `BrasaComandas`
- `BrasaConnect`

Cada App resuelve una parte concreta del negocio. Juntas cuentan el recorrido completo de un restaurante: antes del servicio, durante el servicio, gestion interna y relacion con proveedores.

La explicacion simple es:

`BrasaReservas prepara la sala, BrasaComandas mueve el servicio, BrasaFlow organiza el negocio y BrasaConnect conecta con proveedores.`

## 2. Rol De Cada App

### BrasaFlow

Es el centro interno del restaurante.

Sirve para organizar:

- Empleados.
- Roles.
- Turnos.
- Fichajes.
- Chat interno.
- Inventario.
- Pedidos internos.
- Cocina.
- Recetas.
- Temperaturas.
- Ajustes del negocio.

Pregunta que responde:

`Como organizo el restaurante por dentro.`

### BrasaReservas

Es la app para antes del servicio.

Sirve para organizar:

- Reservas.
- Mesas.
- Sala.
- Lista de espera.
- Clientes.
- Estados de reserva.
- Prevision de comensales.

Pregunta que responde:

`Quien viene, cuando viene y como preparo la sala.`

### BrasaComandas

Es la app para durante el servicio.

Sirve para organizar:

- Mesas activas.
- Comandas.
- Envio a cocina.
- Envio a barra.
- Estados de platos.
- Productos listos.
- Incidencias de servicio.

Pregunta que responde:

`Que pidio cada mesa y que esta pasando ahora mismo en el servicio.`

### BrasaConnect

Es la app para proveedores.

Funciona como una red privada o marketplace de proveedores para hosteleria.

Sirve para organizar:

- Perfiles de proveedores.
- Catalogos.
- Pedidos.
- Pedidos repetibles.
- Historial.
- Albaranes.
- Incidencias.
- Solicitudes de conexion.

Pregunta que responde:

`Que compro, a quien se lo compro y en que estado esta cada pedido.`

## 3. Como Se Complementan

El ecosistema se puede explicar como una jornada completa:

1. `BrasaReservas` muestra la carga prevista antes de abrir el servicio.
2. `BrasaComandas` gestiona las mesas y pedidos cuando el cliente ya esta sentado.
3. `BrasaFlow` organiza el personal, los turnos, el inventario y la operativa interna.
4. `BrasaConnect` conecta las necesidades de compra con proveedores, pedidos y albaranes.

No son apps repetidas. Cada una tiene un momento distinto.

## 4. Conexion Pensada Entre Las 4 Apps

### De BrasaReservas A BrasaComandas

Cuando una reserva llega y se marca como sentada, puede convertirse en una mesa activa.

Datos que podrian pasar:

- Mesa asignada.
- Numero de personas.
- Nombre del cliente.
- Notas de reserva.
- Alergias o preferencias declaradas.

### De BrasaReservas A BrasaFlow

Reservas puede ayudar a planificar la carga del dia.

Datos que podrian pasar:

- Comensales previstos.
- Horas de mayor carga.
- Grupos grandes.
- Eventos.
- Necesidad de refuerzo de sala o cocina.

### De BrasaComandas A BrasaFlow

Comandas puede devolver informacion real del servicio.

Datos que podrian pasar:

- Platos vendidos.
- Productos agotados.
- Tiempos de preparacion.
- Incidencias.
- Carga real por franja horaria.

### De BrasaFlow A BrasaConnect

Flow sabe que necesita comprar el restaurante.

Datos que podrian pasar:

- Inventario bajo.
- Productos habituales.
- Pedidos internos.
- Incidencias de recepcion.
- Necesidades de reposicion.

### De BrasaConnect A BrasaFlow

Connect sabe que paso con el proveedor.

Datos que podrian pasar:

- Pedido confirmado.
- Pedido entregado.
- Precio real.
- Albaran.
- Incidencia.
- Historial por proveedor.

## 5. Estado Actual De La Demo

Hoy las apps estan pensadas como demos separadas y presentables.

La conexion entre ellas esta planteada como concepto de producto y recorrido comercial, pero no como integracion real automatica.

Esto significa:

- Cada app se puede abrir y probar por separado.
- Cada app muestra su parte del ecosistema.
- La demo permite explicar como se conectarian.
- Todavia no comparten una base de datos real entre ellas.
- Todavia no hay login unico real para todo el ecosistema.
- Todavia no hay sincronizacion automatica entre las 4 apps.

Para presentacion esta bien decir:

`Hoy mostramos cada pieza del ecosistema. La integracion entre ellas esta pensada como evolucion natural del producto.`

No conviene decir:

`Las 4 apps ya estan conectadas en tiempo real.`

## 6. Recorrido Para Mostrar A Un Cliente

### Paso 1: BrasaReservas

Mostrar reservas del dia, mesas, lista de espera y carga prevista.

Mensaje:

`Antes de empezar el servicio, el restaurante ya sabe que carga va a tener.`

### Paso 2: BrasaComandas

Mostrar una mesa activa, una comanda enviada a cocina y estados de preparacion.

Mensaje:

`Cuando el cliente se sienta, la reserva se convierte en servicio real.`

### Paso 3: BrasaFlow

Mostrar equipo, turnos, fichaje, chat, inventario y cocina.

Mensaje:

`Todo lo que pasa en el servicio impacta en la organizacion interna del restaurante.`

### Paso 4: BrasaConnect

Mostrar proveedores, catalogos, pedidos anteriores, albaranes e incidencias.

Mensaje:

`Cuando el restaurante necesita reponer producto, la operativa interna se conecta con proveedores.`

## 7. Que Se Puede Prometer Hoy

Se puede prometer:

- Una vision clara de ecosistema para hosteleria.
- 4 apps con roles separados.
- Demos navegables para explicar cada producto.
- Una base comercial para validar con restaurantes y proveedores.
- Un camino claro de integracion futura.

No se debe prometer todavia:

- Conexion real entre apps.
- Base de datos compartida.
- Usuarios reales productivos.
- Facturacion, pagos o contratos con proveedores.
- Sincronizacion automatica de stock, reservas o comandas.

## 8. Integraciones Futuras Prioritarias

### Prioridad 1

Conectar `BrasaFlow` con `BrasaConnect`.

Motivo:

Inventario, pedidos internos, proveedores, albaranes y costes tienen una relacion directa.

### Prioridad 2

Conectar `BrasaReservas` con `BrasaComandas`.

Motivo:

Una reserva sentada puede convertirse naturalmente en mesa activa y comanda.

### Prioridad 3

Conectar `BrasaComandas` con `BrasaFlow`.

Motivo:

El consumo real del servicio puede mejorar inventario, recetas, compras y planificacion.

### Prioridad 4

Crear acceso unico al ecosistema.

Motivo:

Un negocio deberia poder entrar una vez y moverse entre las apps que tenga contratadas.

## 9. Frase Corta De Presentacion

`Brasa es un ecosistema para hosteleria: Reservas organiza lo que viene, Comandas ordena lo que pasa en sala y cocina, Flow gestiona el negocio por dentro y Connect une al restaurante con sus proveedores.`

## 10. Conclusion

La fuerza del ecosistema Brasa esta en no mezclar todo en una sola herramienta.

Cada app puede venderse y entenderse por separado, pero juntas forman una vision completa para gestionar un restaurante moderno.

Hoy la demo sirve para mostrar esa vision.

El siguiente paso real seria convertir esa vision en integraciones concretas entre apps.
