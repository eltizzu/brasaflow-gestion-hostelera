# BrasaFlow - prueba restaurante

Esta carpeta es para preparar una prueba privada de BrasaFlow con un restaurante.

## Como enviarlo

Lo mas simple:

1. Mandar el mensaje de `MENSAJE_WHATSAPP.txt`.
2. Adjuntar las plantillas CSV si queres que el restaurante complete sus datos.
3. Cuando te devuelva las plantillas, la plantilla de empleados se puede cargar directo desde BrasaFlow, en `Empresa > Empleados > Carga por plantilla`.
4. La plantilla de inventario tambien se puede cargar directo desde BrasaFlow, en `Empresa > Inventario > Carga por plantilla`.
5. Turnos y pedidos se pueden usar para dejar la demo precargada antes de que empiece a probarla.

Nota: CSV es solo una tabla simple que Excel, Google Sheets y muchas apps pueden abrir. Para el usuario conviene decir "plantilla" o "tabla de empleados".

## Importante

No pedir datos reales sensibles en esta etapa.

Usar nombres ficticios o datos basicos:

- Nombre del empleado.
- Puesto.
- Area.
- Horas semanales.
- Productos de inventario.
- Stock aproximado.
- Proveedor habitual si lo quieren indicar.

No pedir:

- DNI / NIE.
- Direccion personal.
- Datos bancarios.
- Nominas.
- Contratos.
- Documentos laborales.
- Datos fiscales sensibles.

## Que archivos completar

- `plantilla_empleados.csv`: equipo de prueba.
- `plantilla_inventario.csv`: productos principales de cocina, sala o general.
- `plantilla_turnos.csv`: horarios de una semana.
- `plantilla_pedidos.csv`: pedidos habituales o pendientes.
- `plantilla_temperaturas.csv`: neveras, congeladores o equipos a controlar.

## Flujo recomendado

Primero pedir solo empleados e inventario.

Despues, si la persona tiene ganas, pedir turnos y pedidos.

Para una primera prueba en un restaurante grande no hace falta cargar todo perfecto. Alcanza con casi toda la plantilla, 25 a 40 productos de inventario, una semana aproximada de turnos y 5 a 10 pedidos habituales para ver si BrasaFlow le resulta util.

Si queres mostrar algo rapido sin pedir datos antes, entra como Empresa y usa `Cargar demo grande`.
