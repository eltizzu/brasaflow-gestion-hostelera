# Manual De Uso De BrasaConnect

## 1. Que Es BrasaConnect

BrasaConnect Es Una App Hermana De BrasaFlow Para Conectar Negocios Hosteleros Con Proveedores.

La Idea Es Simple:

- El Negocio Ve Proveedores, Catalogos, Pedidos Y Albaranes.
- El Proveedor Ve Pedidos Recibidos, Estados, Catalogo Y Perfil.
- Ambos Comparten Un Historial Ordenado.

BrasaConnect No Reemplaza A BrasaFlow. Ordena La Relacion Entre El Negocio Y Sus Proveedores.

## 2. Como Entrar

Abrir:

`index.html`

Si Se Usa Servidor Local:

`http://127.0.0.1:4280/index.html`

## 3. Que Se Ve Al Entrar

La App Tiene Tres Vistas De Demo:

- `Negocio`
- `Proveedor`
- `Red`

El Selector Superior Permite Cambiar El Punto De Vista.

En Movil, El Selector `Ir a seccion` Permite Cambiar Rapido Entre Pantallas.

## 4. Vista Negocio

Esta Vista Representa Al Restaurante, Bar, Cafeteria O Negocio Hostelero.

### Que Puede Hacer

- Ver Resumen De Actividad.
- Ver Proveedores Conectados.
- Consultar Catalogos.
- Crear Pedidos Desde Catalogo.
- Revisar Pedidos.
- Ver Estado De Cada Pedido.
- Consultar Albaranes.
- Marcar Recepcion.
- Registrar Incidencias.
- Ver Perfil Del Negocio.

### Como Crear Un Pedido

1. Entrar En Vista `Negocio`.
2. Ir A `Catalogo`.
3. Elegir Un Producto.
4. Pulsar La Accion Para Crear Pedido Demo.
5. Ir A `Pedidos`.
6. Abrir El Pedido Generado.
7. Revisar Articulos, Total, Estado E Historial.

### Como Revisar Un Pedido

1. Entrar En `Pedidos`.
2. Seleccionar Un Pedido.
3. Revisar:
   - Proveedor.
   - Fecha De Entrega.
   - Estado.
   - Articulos.
   - Total.
   - Timeline.
   - Albaran Asociado.

### Como Marcar Recepcion O Incidencia

1. Entrar En `Pedidos` O `Albaranes`.
2. Revisar El Pedido.
3. Marcar Recepcion Si Todo Esta Correcto.
4. Marcar Incidencia Si Hay Diferencia.

## 5. Vista Proveedor

Esta Vista Representa A Una Empresa Que Vende Producto A Hosteleria.

### Que Puede Hacer

- Ver Resumen De Pedidos Recibidos.
- Ver Pedidos Pendientes.
- Avanzar Estados.
- Registrar Albaranes Demo.
- Ver Catalogo.
- Agregar Productos.
- Mantener Perfil Visible.

### Como Avanzar Un Pedido

1. Cambiar A Vista `Proveedor`.
2. Entrar En `Pedidos`.
3. Seleccionar Un Pedido.
4. Avanzar Estado.
5. Revisar El Timeline.

### Como Registrar Un Albaran Demo

1. Entrar En Vista `Proveedor`.
2. Abrir Un Pedido.
3. Usar La Accion De Registrar Albaran.
4. Revisar Que El Pedido Queda Con Albaran Asociado.

### Como Agregar Producto Al Catalogo

1. Entrar En Vista `Proveedor`.
2. Ir A `Catalogo`.
3. Completar Datos Del Producto.
4. Guardar.
5. Revisar Que Aparece En Catalogo.

## 6. Vista Red

Esta Vista Representa El Lado Marketplace O Red De Contactos.

### Que Puede Hacer

- Ver Proveedores Disponibles.
- Revisar Categoria.
- Revisar Zona De Reparto.
- Revisar Condiciones.
- Solicitar Conexion.
- Descubrir Nuevos Proveedores.

### Como Solicitar Conexion

1. Cambiar A Vista `Red`.
2. Revisar La Lista De Proveedores.
3. Elegir Uno Que No Este Conectado.
4. Pulsar La Accion De Solicitar Conexion.
5. Volver A Vista `Negocio` Y Revisar Proveedores.

## 7. Albaranes

Los Albaranes Sirven Para Relacionar El Pedido Con La Entrega.

En La Demo Se Puede Mostrar:

- Numero De Albaran.
- Pedido Asociado.
- Proveedor.
- Estado.
- Incidencia Si Existe.

En Producto Real, Esta Parte Podria Incluir Archivos PDF, Fotos, Firma, Lectura Con IA Y Comparacion Contra Pedido.

## 8. Historial

El Historial Permite Ver Que Paso Con Un Pedido.

Ejemplos:

- Pedido Creado.
- Proveedor Confirmo.
- Pedido Preparado.
- Albaran Registrado.
- Recepcion Revisada.
- Incidencia Marcada.

La Idea Es Que El Pedido No Quede Perdido En Conversaciones Sueltas.

## 9. Datos De Demo

Todos Los Datos Son Ficticios:

- Negocios.
- Proveedores.
- Productos.
- Precios.
- Pedidos.
- Albaranes.
- Incidencias.

No Deben Usarse Datos Reales De Empresas, Clientes, Facturacion O Proveedores.

## 10. Como Guarda Cambios

En Demo Local Con Servidor, Puede Guardar Contra El Archivo De Estado.

En Demo Web Estatica, Guarda Los Cambios En El Navegador Del Visitante.

Esto Permite Que Cada Persona Pruebe La Demo Sin Afectar A Otros Usuarios.

## 11. Flujo Recomendado Para Probar

1. Entrar En `Red`.
2. Ver Proveedores Disponibles.
3. Solicitar Conexion.
4. Cambiar A `Negocio`.
5. Entrar En `Catalogo`.
6. Crear Pedido Demo.
7. Entrar En `Pedidos`.
8. Abrir El Detalle.
9. Cambiar A `Proveedor`.
10. Avanzar Estado.
11. Registrar Albaran.
12. Volver A `Negocio`.
13. Revisar Historial E Incidencia.

## 12. Que Esta Listo Para Mostrar

- Vista Negocio.
- Vista Proveedor.
- Vista Red.
- Proveedores Conectados.
- Catalogo.
- Pedido Desde Catalogo.
- Estados De Pedido.
- Timeline.
- Albaranes.
- Incidencias.
- Perfil.
- Integracion Conceptual Con BrasaFlow.

## 13. Que Falta Para Producto Real

- Login Real.
- Base De Datos.
- Permisos Por Empresa.
- Invitaciones Reales.
- Archivos Reales De Albaran.
- Notificaciones.
- Busqueda Avanzada.
- Integracion Real Con BrasaFlow.
- Lectura De Albaranes Con IA.

## 14. Mensaje Simple Para Explicar La App

BrasaConnect Ordena La Relacion Entre Restaurante Y Proveedor: catalogo, pedido, confirmacion, albaran, recepcion e historial compartido.
