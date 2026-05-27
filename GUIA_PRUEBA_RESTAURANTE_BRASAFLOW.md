# Guia de prueba restaurante - BrasaFlow

Esta guia es para entregar BrasaFlow a una persona de hosteleria y que pueda probar la app con un restaurante real, pero usando datos ficticios.

## Objetivo de esta prueba

Comprobar si BrasaFlow ayuda en la operativa diaria del restaurante:

- Horarios y turnos del equipo.
- Fichaje de entrada y salida.
- Solicitudes de vacaciones o ausencias.
- Chat interno por areas.
- Inventario por cocina, sala y general.
- Hoja de pedidos.
- Control de temperaturas.
- Recetas y alergenos para cocina.

La parte de nominas, contratos y documentos laborales queda fuera de esta prueba.

## Acceso

Abrir la app desde:

```text
http://127.0.0.1:4173/demo.html
```

Si la app esta subida a una web, usar la URL publica que corresponda.

## Cuentas demo

Todas usan la clave:

```text
1234
```

| Perfil | Email | Para que sirve |
| --- | --- | --- |
| Empleado cocina | lucia@brasaflow-demo.com | Ver sus turnos, fichar, pedir vacaciones y usar avisos/chat. |
| Empleado sala | sala@brasaflow-demo.com | Ver sus turnos de sala, fichar, pedir vacaciones y usar avisos/chat. |
| Encargado cocina | cocina@brasaflow-demo.com | Gestionar turnos, inventario y pedidos del area cocina. |
| Encargado sala | paula@brasaflow-demo.com | Gestionar turnos, inventario y pedidos del area sala. |
| Empresa / dueño | admin@brasaflow-demo.com | Ver y controlar toda la demo del negocio. |

## Que probar

### Como empleado

1. Entrar con `lucia@brasaflow-demo.com`.
2. Revisar el resumen del dia.
3. Ver sus turnos.
4. Probar el fichaje.
5. Enviar una solicitud de vacaciones o ausencia.
6. Escribir un mensaje en el chat.

### Como encargado

1. Entrar con `cocina@brasaflow-demo.com` o `paula@brasaflow-demo.com`.
2. Revisar los turnos del area.
3. Crear o editar un turno de prueba.
4. Revisar vacaciones pendientes.
5. Revisar inventario.
6. Crear una linea en hoja de pedidos.
7. Revisar chat y avisos urgentes.

### Como empresa o dueño

1. Entrar con `admin@brasaflow-demo.com`.
2. Cambiar la persona revisada desde el panel empresa.
3. Revisar horarios de todo el equipo.
4. Revisar inventario general.
5. Revisar hoja de pedidos.
6. Comprobar temperaturas, recetas y alergenos.
7. Probar restaurar demo si quiere volver al estado inicial.

## Que no cargar

Durante esta prueba no cargar:

- Nominas reales.
- Contratos reales.
- Documentos laborales reales.
- DNI, NIE, direcciones personales o datos bancarios.
- Datos privados de empleados.
- Facturas reales o informacion fiscal sensible.

La app esta pensada para esta prueba como demo funcional, no como sistema legal/fiscal definitivo.

## Como se guardan los datos

Si la app se abre con el servidor incluido, los cambios se guardan en:

```text
data/app-state.json
```

Si se abre como archivo o desde una subida estatica sin servidor, los cambios se guardan en el navegador del usuario. En ese caso, otro movil u ordenador no vera los mismos datos.

El boton `Restaurar demo` vuelve la app al estado inicial de prueba.

## Preguntas para recibir feedback

- Que parte se entiende rapido?
- Que parte confundio o sobro?
- Usarias la hoja de pedidos en una semana real?
- El inventario esta planteado como lo necesita tu restaurante?
- El chat interno reemplazaria mensajes de WhatsApp del equipo?
- Que faltaria para que un encargado lo use durante un servicio?
- Que faltaria para que el dueño lo revise una vez al dia?

## Estado recomendado

BrasaFlow esta lista para una prueba privada y controlada con un restaurante amigo.

Antes de usarla con clientes reales o venderla como producto final, faltaria cerrar:

- Usuarios reales con contrasenas seguras.
- Base de datos central.
- Copias de seguridad.
- Permisos definitivos por rol.
- Aviso legal, privacidad y proteccion de datos.
- Version final de documentos laborales si se decide activar ese modulo.
