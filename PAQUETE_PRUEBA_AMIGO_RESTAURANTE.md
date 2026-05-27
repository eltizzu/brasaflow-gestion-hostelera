# Paquete de prueba - BrasaFlow para restaurante amigo

Este documento sirve para pasar BrasaFlow a una persona de hosteleria y pedirle una prueba corta, ordenada y con feedback util.

## Mensaje corto para enviar

Hola, te paso una demo privada de BrasaFlow para que la pruebes con mirada de restaurante.

La idea no es cargar datos reales todavia, sino ver si la app te serviria para organizar horarios, fichajes, vacaciones, inventario, pedidos, temperaturas y comunicacion interna del equipo.

Importante: no subas nominas, contratos, DNI, datos bancarios ni informacion sensible. Usala con datos ficticios.

URL:

```text
http://127.0.0.1:4173/demo.html
```

Si te paso una URL publica, usa esa en lugar de la de arriba.

Clave para todas las cuentas:

```text
1234
```

Cuentas:

- Empleado cocina: `lucia@brasaflow-demo.com`
- Empleado sala: `sala@brasaflow-demo.com`
- Encargado cocina: `cocina@brasaflow-demo.com`
- Encargado sala: `paula@brasaflow-demo.com`
- Empresa / dueno: `admin@brasaflow-demo.com`

Si podes, probala 10 o 15 minutos y decime que se entiende, que confunde y que faltaria para usarla en un restaurante real.

## Recorrido recomendado de 10 minutos

### 1. Entrar como empleado

Cuenta:

```text
lucia@brasaflow-demo.com
```

Probar:

- Ver el resumen del dia.
- Revisar sus turnos.
- Abrir fichaje.
- Pedir una ausencia o vacaciones.
- Mandar un mensaje en el chat.

Preguntas:

- Se entiende rapido lo que tiene que hacer un empleado?
- Le sobra algo?
- Le falta algo para el dia a dia?

### 2. Entrar como encargado de cocina

Cuenta:

```text
cocina@brasaflow-demo.com
```

Probar:

- Ver turnos de cocina.
- Revisar inventario.
- Crear o modificar una linea de pedido.
- Revisar temperaturas.
- Mirar recetas y alergenos.
- Usar chat o aviso urgente.

Preguntas:

- Sirve para controlar cocina antes o durante el servicio?
- La hoja de pedidos esta planteada de forma natural?
- El inventario se entiende?

### 3. Entrar como encargado de sala

Cuenta:

```text
paula@brasaflow-demo.com
```

Probar:

- Revisar turnos de sala.
- Ver pedidos e inventario del area.
- Revisar vacaciones o ausencias.
- Usar chat con el equipo.

Preguntas:

- El encargado ve lo justo o ve demasiado?
- Usaria esto en vez de notas sueltas o WhatsApp?

### 4. Entrar como empresa / dueno

Cuenta:

```text
admin@brasaflow-demo.com
```

Probar:

- Cambiar la persona revisada desde el panel empresa.
- Ver horarios del equipo.
- Revisar inventario general.
- Revisar hoja de pedidos.
- Ver temperaturas, recetas y alergenos.
- Probar `Restaurar demo` al final si quiere volver al estado inicial.

Preguntas:

- Sirve como panel diario para revisar el restaurante?
- Que dato le gustaria ver primero al dueno?
- Que parte no usaria nunca?

## Que feedback pedir

Copiar y pegar estas preguntas:

```text
1. Que fue lo mas claro de la app?
2. Que parte te confundio?
3. Que boton, texto o seccion cambiarias?
4. Usarias horarios y fichaje en un restaurante real?
5. Usarias inventario y hoja de pedidos?
6. El chat interno te parece util o innecesario?
7. Que faltaria para que un encargado la use en pleno servicio?
8. Que faltaria para que el dueno la revise todos los dias?
9. La viste bien en movil?
10. Del 1 al 10, que tan presentable te parece como demo?
```

## Limites de esta prueba

BrasaFlow esta preparada para una prueba privada controlada.

No usar todavia como sistema definitivo para:

- Datos reales de empleados.
- Nominas.
- Contratos.
- Documentacion laboral.
- Informacion fiscal.
- Gestion legal definitiva.

## Si algo se rompe

Usar el boton:

```text
Restaurar demo
```

Eso devuelve la app a su estado inicial de prueba.

## Recomendacion para la primera prueba

La mejor primera prueba es con una sola persona de confianza, durante 10 o 15 minutos, en movil y ordenador si puede.

Despues de esa prueba, conviene ajustar solo textos, orden de secciones y detalles visuales. No meter funciones grandes hasta escuchar que le resulto confuso o realmente necesario.
