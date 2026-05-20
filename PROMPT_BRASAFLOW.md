# Prompt de producto: BrasaFlow

Quiero crear una app llamada `BrasaFlow`, pensada inicialmente para restaurantes y negocios de hosteleria, aunque con posibilidad de adaptarse despues a otros sectores con gestion de empleados por turnos.

La app debe ser una plataforma centralizada de gestion interna con dos grandes tipos de acceso:

- `Empleado`
- `Empresa / Encargado / Administracion`

La idea principal es resolver en un solo sistema cosas que normalmente se llevan por WhatsApp, papel, Excel o llamadas: horarios, roles, vacaciones, comunicacion interna, documentos laborales, inventario y pedidos internos.

## Objetivo del producto

Crear una app moderna, intuitiva, interactiva y adaptable a cada negocio, donde:

- el empleado pueda usarla desde su movil
- el empleador, encargado o administracion pueda usarla desde un ordenador o desde una oficina central
- cada perfil vea solo lo que le corresponde
- el negocio pueda personalizar puestos, areas, permisos y parte de su funcionamiento

## Tipo de producto

La primera version debe plantearse como una `app web responsive`, para que funcione bien en:

- movil
- tablet
- ordenador

Esto permite que:

- el empleado la use como una app desde el telefono
- el encargado o la empresa la use desde PC
- no haga falta desarrollar desde el primer dia una app nativa separada para iPhone, Android y escritorio

## Modulos principales de la app

### 1. Gestion de empleados

La empresa debe poder:

- dar de alta empleados
- dar de baja empleados
- editar sus datos internos
- asignarles un puesto
- asignarles un rol
- asignarles un area o equipo

Los puestos y roles no deben ser cerrados. Deben ser `editables por el empleador`.

Ejemplos:

- jefe de cocina
- ayudante de cocina
- jefe de sala
- camarero
- barra
- limpieza
- administracion

## 2. Areas o equipos

La app debe permitir dividir al personal por areas operativas, por ejemplo:

- cocina
- sala
- barra
- administracion

Estas areas deben usarse para:

- organizar horarios
- filtrar chats
- ver inventario
- controlar pedidos internos

## 3. Turnos y horarios

Debe existir un sistema de turnos con vista:

- semanal
- mensual

La empresa o el encargado deben poder:

- crear horarios
- editar horarios
- organizar por area
- asignar turnos por empleado

La logica ideal es:

- el horario se divide por areas, por ejemplo cocina y sala
- cada empleado ve principalmente sus propios turnos
- los encargados pueden ver los turnos de su area
- la empresa o administracion puede ver todos los turnos

## 4. Vacaciones y ausencias

La app debe incluir gestion de vacaciones y ausencias.

Funciones:

- el empleado puede pedir vacaciones
- la empresa o encargado puede aprobar o rechazar
- el empleado puede ver cuantos dias tiene disponibles
- el sistema debe calcular vacaciones acumuladas segun la fecha de alta

Esto es importante porque una persona no deberia poder pedir mas vacaciones de las que le corresponden si acaba de empezar a trabajar.

La logica deseada es:

- cada empleado tiene una bolsa anual de vacaciones configurable
- la app calcula cuanto ha acumulado hasta la fecha
- la app muestra dias usados y dias disponibles
- el sistema puede bloquear solicitudes que excedan el saldo

La parte de justificantes medicos o documentos sensibles puede dejarse fuera en una primera fase si complica privacidad o gestion legal.

## 5. Documentos laborales

La empresa debe poder:

- subir nominas mensuales
- subir contratos
- asociar documentos a cada empleado

El empleado debe poder:

- ver sus documentos
- descargarlos
- consultar su historial

La firma digital avanzada puede quedar para una fase posterior.

## 6. Comunicacion interna

La app debe incluir chat interno con esta estructura:

- un chat general
- un chat para cocina
- un chat para sala
- otros chats por area si el negocio lo necesita

Reglas:

- el empleado ve el chat general y el de su area
- el empleador o empresa ve todos los chats
- debe existir la opcion de enviar avisos importantes
- esos avisos deben resaltarse visualmente
- idealmente deben generar una notificacion fuerte en el movil del empleado

## 7. Inventario

Debe existir un modulo de inventario simple pero util.

Cada area debe poder consultar lo suyo para ayudarse internamente.

La hoja de inventario debe permitir:

- nombre del producto
- cantidad actual
- unidad de medida
- stock minimo
- categoria o area
- observaciones

Ejemplos:

- cocina
- sala
- barra
- limpieza

La idea es que cocina o sala puedan consultar rapidamente que hay disponible.

## 8. Hoja de pedido a proveedores

No hace falta integrar todavia pedidos automaticos a proveedores, pero si dejar una hoja interna de pedido editable.

Debe incluir:

- producto
- cantidad a pedir
- proveedor sugerido
- estado del pedido
- notas

Permisos:

- el jefe de cocina puede ver y editar pedidos de cocina
- el jefe de sala puede ver y editar pedidos de sala
- la empresa puede ver y editar todo
- el resto del equipo puede consultar inventario, pero no necesariamente editar pedidos

## 9. Adaptabilidad del negocio

La app debe ser muy interactiva y flexible, para que cada negocio la pueda ajustar a su gusto.

Debe permitir personalizar:

- nombres de puestos
- areas
- permisos
- criterios de vacaciones
- estructura de chats
- forma de organizar inventario

## 10. Experiencia de usuario

La app debe sentirse:

- moderna
- clara
- visual
- facil de usar desde movil
- util desde ordenador para gestion

No debe parecer una herramienta rigida o fria, sino un sistema practico para el dia a dia de un negocio.

## Perfiles de usuario

### Empleado

Puede:

- ver sus turnos
- ver vacaciones disponibles
- pedir vacaciones
- ver documentos
- acceder al chat general y al de su area
- consultar inventario de su area

### Encargado o jefe de area

Puede:

- ver turnos de su area
- coordinar equipo
- revisar inventario
- editar hoja de pedido de su area
- participar en chats de equipo

### Empresa / Administracion

Puede:

- gestionar todos los empleados
- crear y editar puestos y roles
- ver todos los turnos
- subir nominas y contratos
- aprobar vacaciones
- ver todos los chats
- enviar avisos urgentes
- ver y editar inventario y pedidos de todas las areas

## MVP recomendado

La primera version util del producto debe incluir:

- login
- empleados y roles editables
- areas
- turnos semanales y mensuales
- vacaciones acumuladas y solicitudes
- chat general y por area
- documentos laborales basicos
- inventario basico
- hoja de pedido interna

## Fase posterior

Se puede dejar para despues:

- firma digital avanzada
- justificantes medicos y documentos sensibles
- fichaje horario
- integracion con proveedores
- analitica avanzada
- multisede compleja
- integracion con gestorias o software externo

## Resumen final

BrasaFlow debe ser una app de gestion de personal para hosteleria que centralice:

- empleados
- puestos y roles
- horarios
- vacaciones
- documentos
- comunicacion interna
- inventario
- pedidos internos

La app debe funcionar bien tanto para empleados en movil como para empresa o administracion en PC, con permisos distintos y una estructura flexible que se adapte a cada negocio.
