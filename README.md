# TAPE TO THE FUTURE - API REST

1. [SOBRE ESTE PROYECTO](#SOBRE-ESTE-PROYECTO)
2. [OBJETIVOS DEL PROYECTO](#OBJETIVOS-PROYECTO)
3. [DOCUMENTACIÓN GENERAL](#DOCUMENTACION-GENERAL)
4. [API DOCUMENTATION](#API-DOCUMENTATION)

# SOBRE ESTE PROYECTO

Este proyecto forma parte del **Bootcamp Online Full Stack Developer, BACKEND EXPRESS**.
El objetivo es crear el backend para implantar una web donde los usuario pueden registrar listas de películas o series.
El flujo de trabajo sería el siguiente:

1. Un administrador genera **medias**. Películas o series que serán añadidas por los usuarios.
2. Un usuario (previamente registrado en el servicio) crea una **card**. Cada usuario puede crear las cards que quiera.
3. El usuario añade un**media** existente a la **card** creada previamente.

Desarrollos pendientes:
- Desarrollo de las **platforms**. Plataformas VOD dónde consumir el media
- Implantación de subidas/eliminación de imágenes a un servicio cloud
- Evitar la creación de **media** por parte de los administradores. Idea: que se alimente a partir desde un frontend consumiendo de la api de Tmdb con las peticiones de los usuarios. 

# OBJETIVOS DEL PROYECTO  - RELACIÓN DE FUNCIONALIDADES


regex:  style=".*?"
<table>
<thead>
<tr>
<th>Estado</th>
<th>Requisito</th>
<th>Endpoint</th>
<th>Comentario</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="4"><strong>Tecnolog&iacute;as</strong></td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>NodeJS</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>Express</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>Sequelize</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>Git + Git-flow</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td colspan="4"><strong>Feature 1 : Gesti&oacute;n Usuario</strong></td>
</tr>
<tr>
<td colspan="4">Requisitos M&iacute;nimos</td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>Validaci&oacute;n por Token</td>
<td>&nbsp;</td>
<td>Funcionalidad implantada con JWT.</td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>Endpoint de Login</td>
<td>POST /users/login (<a href="./documentation/api/user.md#login">detalle</a>)</td>
<td>-</td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>Endpoint de Registro</td>
<td>POST /users/ (<a href="./documentation/api/user.md#postusers">detalle</a>)</td>
<td>-</td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>Endpoint de Perfil (Datos de Usuario)</td>
<td>GET /users/:id? (<a href="./documentation/api/user.md#getusers">detalle</a>)</td>
<td>-</td>
</tr>
<tr>
<td colspan="4">Extra points</td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>Roles Administrador / Usuario / Vendedor</td>
<td>-</td>
<td>Roles implantados: Superadmin, Usuario, Admin</td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>Endpoints modificar datos de Usuario</td>
<td>PUT /users/:id? (<a href="./documentation/api/user.md#putusers">detalle</a>)</td>
<td>-</td>
</tr>
<tr>
<td colspan="4"><strong>Feature 2 : Gesti&oacute;n Product</strong></td>
</tr>
<tr>
<td colspan="4">Requisitos M&iacute;nimos</td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>Endpoints a&ntilde;adir, eliminar, modificar producto (vendedor)</td>
<td>POST | DELETE&nbsp;| PUT&nbsp; /media/ (<a href="./documentation/api/media.md">detalle</a>)</td>
<td>
<p>La creaci&oacute;n de las "media" (pel&iacute;cula, serie...) corresponde a la creación del producto.</p>
<p>Estos productos ser&aacute;n a&ntilde;adidos a una "card" y formar&aacute;n algo similar a una factura.</p>
<p>Solo pueden ser creados, eliminados y modificados por usuarios con rol Admin o superAdmin.</p>
</td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>Endpoint muestra all products</td>
<td>GET /media/read (<a href="./documentation/api/media.md#getmedia">detalle</a>)</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>Endpoints productos filtro (m&aacute;s vendidos, precio, t&iacute;tulo&hellip;)</td>
<td>GET /media/filter (<a href="./documentation/api/media.md">detalle</a>)</td>
<td>
<p>Par&aacute;metros: top, year, ttl, own, gen</p>
</td>
</tr>
<tr>
<td colspan="4">Extra points</td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>Endpoint de productos por vendedor</td>
<td>GET /media/filter (<a href="./documentation/api/media.md">detalle</a>)</td>
<td>Implantado en el endpoint de filtro de productos (par&aacute;metro own)</td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>Endpoint de productos por categor&iacute;a</td>
<td>GET /media/filter (<a href="./documentation/api/media.md">detalle</a>)</td>
<td>
<p>Equivalencia gen.</p>
<p>Implantado en el endpoint de filtro de productos (par&aacute;metro gen)</p>
</td>
</tr>
<td colspan="4"><strong>Feature 3 : Gesti&oacute;n Compras</strong></td>
</tr>
<tr>
<td colspan="4">Requisitos M&iacute;nimos</td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>Endpoint de a&ntilde;adir compra.</td>
<td>
<p>&nbsp;POST /cardmedia/ (<a href="./documentation/api/cardMedia.md#postCardMedia">detalle</a>)</p>
</td>
<td>
<p>Se corresponde a a&ntilde;adir una un insert a la tabla intermedia&nbsp;card_media.</p>
<p>Es necesario que haya creada primero una "card" y el producto correspondiente.</p>
</td>
</tr>
<tr>
<td>:heavy_check_mark:</td>
<td>Endpoint muestra todas las compras.</td>
<td>GET /cardmedia/  (<a href="./documentation/api/cardMedia.md#getCardMedia">detalle</a>)</td>
<td>Muestra el listado de todas las lineas creadas en la tabla intermedia card_media</td>
</tr>
<tr>
<td colspan="4">Extra points</td>
</tr>
<tr>
<td>:x:</td>
<td>Endpoint de compras por usuario. (modo factura)</td>
<td>&nbsp;</td>
<td>-</td>
</tr>
<tr>
<td>:x:</td>
<td>Endpoint modificaci&oacute;n datos factura (modificaci&oacute;n hecha por el vendedor).</td>
<td>&nbsp;</td>
<td>-</td>
</tr>
</tbody>
    </table>

# DOCUMENTACIÓN GENERAL

- [Infraestructure](./documentation/infrastructure.md)
- [Database](./documentation/database.md)

# API DOCUMENTATION

- [User](./documentation/api/user.md)
- [Media](./documentation/api/media.md)
- [Platform](./documentation/api/platform.md)
- [Cards](./documentation/api/cards.md)
- [CardMedia](./documentation/api/cards.md)
