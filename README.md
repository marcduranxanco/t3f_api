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

<table style="width: 1016px;">
<thead>
<tr style="height: 23px;">
<th style="width: 145px; height: 23px;">Estado</th>
<th style="width: 340px; height: 23px;">Requisito</th>
<th style="width: 97px; height: 23px;">Endpoint</th>
<th style="width: 433px; height: 23px;">Comentario</th>
</tr>
</thead>
<tbody>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;" colspan=4><strong>Tecnolog&iacute;as</strong></td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;">:heavy_check_mark:</td>
<td style="width: 340px; height: 23px;">NodeJS</td>
<td style="width: 97px; height: 23px;">&nbsp;</td>
<td style="width: 433px; height: 23px;">-</td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;">:heavy_check_mark:</td>
<td style="width: 340px; height: 23px;">Express</td>
<td style="width: 97px; height: 23px;">&nbsp;</td>
<td style="width: 433px; height: 23px;">-</td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;">:heavy_check_mark:</td>
<td style="width: 340px; height: 23px;">Sequelize</td>
<td style="width: 97px; height: 23px;">&nbsp;</td>
<td style="width: 433px; height: 23px;">-</td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;">:heavy_check_mark:</td>
<td style="width: 340px; height: 23px;">Git + Git-flow</td>
<td style="width: 97px; height: 23px;">&nbsp;</td>
<td style="width: 433px; height: 23px;">-</td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;" colspan="4"><strong>Feature 1 : Gesti&oacute;n Usuario</strong></td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;" colspan="4">Requisitos M&iacute;nimos</td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;">:heavy_check_mark:</td>
<td style="width: 340px; height: 23px;">Validaci&oacute;n por Token</td>
<td style="width: 97px; height: 23px;">&nbsp;</td>
<td style="width: 433px; height: 23px;">Funcionalidad implantada con JWT.</td>
</tr>
<tr style="height: 43px;">
<td style="width: 145px; height: 43px;">:heavy_check_mark:</td>
<td style="width: 340px; height: 43px;">Endpoint de Login</td>
<td style="width: 97px; height: 43px;">&nbsp;POST - /users/login</td>
<td style="width: 433px; height: 43px;">&nbsp;</td>
</tr>
<tr style="height: 43px;">
<td style="width: 145px; height: 43px;">:heavy_check_mark:</td>
<td style="width: 340px; height: 43px;">Endpoint de Registro</td>
<td style="width: 97px; height: 43px;">&nbsp;POST - /users/</td>
<td style="width: 433px; height: 43px;">&nbsp;</td>
</tr>
<tr style="height: 43px;">
<td style="width: 145px; height: 43px;">:heavy_check_mark:</td>
<td style="width: 340px; height: 43px;">Endpoint de Perfil (Datos de Usuario)</td>
<td style="width: 97px; height: 43px;">&nbsp;GET -&nbsp;/users/:id?</td>
<td style="width: 433px; height: 43px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;" colspan="4">Extra points</td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;">:heavy_check_mark:</td>
<td style="width: 340px; height: 23px;">Roles Administrador / Usuario / Vendedor</td>
<td style="width: 97px; height: 23px;">&nbsp;</td>
<td style="width: 433px; height: 23px;">Roles implantados: Superadmin, Usuario, Admin</td>
</tr>
<tr style="height: 43px;">
<td style="width: 145px; height: 43px;">:heavy_check_mark:</td>
<td style="width: 340px; height: 43px;">Endpoints modificar datos de Usuario</td>
<td style="width: 97px; height: 43px;">&nbsp;PUT - /users/:id?</td>
<td style="width: 433px; height: 43px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;" colspan="4"><strong>Feature 2 : Gesti&oacute;n Product</strong></td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;" colspan="4">Requisitos M&iacute;nimos</td>
</tr>
<tr style="height: 153px;">
<td style="width: 145px; height: 153px;">:heavy_check_mark:</td>
<td style="width: 340px; height: 153px;">Endpoints a&ntilde;adir, eliminar, modificar producto (vendedor)</td>
<td style="width: 97px; height: 153px;">&nbsp;</td>
<td style="width: 433px; height: 153px;">
<p>La creaci&oacute;n de las "media" (pel&iacute;cula, serie...) corresponde al producto.</p>
<p>Estos productos ser&aacute;n a&ntilde;adidos a una card y formar&aacute;n algo similar a una "Factura".</p>
<p>Solo pueden ser creados, eliminados y modificados por usuarios con rol Admin o superAdmin.</p>
</td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;">:heavy_check_mark:</td>
<td style="width: 340px; height: 23px;">Endpoint muestra all products</td>
<td style="width: 97px; height: 23px;">GET - /media/ (<a href="./documentation/api/media.md">detalle<a>)</td>
<td style="width: 433px; height: 23px;">&nbsp;</td>
</tr>
<tr style="height: 43px;">
<td style="width: 145px; height: 43px;">:heavy_check_mark:</td>
<td style="width: 340px; height: 43px;">Endpoints productos filtro (m&aacute;s vendidos, precio, t&iacute;tulo&hellip;)</td>
<td style="width: 97px; height: 43px;">&nbsp;GET -&nbsp;/media/filter (<a href="./documentation/api/media.md">detalle<a>)</td>
<td style="width: 433px; height: 43px;">Opciones de filtro:</td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;" colspan="4">Extra points</td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;">:heavy_check_mark:</td>
<td style="width: 340px; height: 23px;">Endpoint de productos por vendedor</td>
<td style="width: 97px; height: 23px;">&nbsp;</td>
<td style="width: 433px; height: 23px;">Implantado en el endpoint de filtro de productos (par&aacute;metro own)</td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;">:heavy_check_mark:</td>
<td style="width: 340px; height: 23px;">Endpoint de productos por categor&iacute;a</td>
<td style="width: 97px; height: 23px;">&nbsp;</td>
<td style="width: 433px; height: 23px;">Implantado en el endpoint de filtro de productos (par&aacute;metro cat)</td>
</tr>
<tr style="height: 43px;">
<td style="width: 145px; height: 43px;" colspan="4"><strong>Feature 3 : Gesti&oacute;n Compras</strong></td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;" colspan="4">Requisitos M&iacute;nimos</td>
</tr>
<tr style="height: 83px;">
<td style="width: 145px; height: 83px;">:heavy_check_mark:</td>
<td style="width: 340px; height: 83px;">Endpoint de a&ntilde;adir compra.</td>
<td style="width: 97px; height: 83px;">
<p>&nbsp;POST /cardmedia/ (<a href="./documentation/api/media.md">detalle<a>)</p>
</td>
<td style="width: 433px; height: 83px;">
<p>Se corresponde a a&ntilde;adir una un insert a la tabla intermedia&nbsp;card_media.</p>
<p>Es necesario que haya creada primero una card.</p>
</td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;">:x:</td>
<td style="width: 340px; height: 23px;">Endpoint muestra todas las compras.</td>
<td style="width: 97px; height: 23px;">&nbsp;</td>
<td style="width: 433px; height: 23px;">-</td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;" colspan="4">Extra points</td>
</tr>
<tr style="height: 23px;">
<td style="width: 145px; height: 23px;">:x:</td>
<td style="width: 340px; height: 23px;">Endpoint de compras por usuario. (modo factura)</td>
<td style="width: 97px; height: 23px;">&nbsp;</td>
<td style="width: 433px; height: 23px;">-</td>
</tr>
<tr style="height: 43px;">
<td style="width: 145px; height: 43px;">:x:</td>
<td style="width: 340px; height: 43px;">Endpoint modificaci&oacute;n datos factura (modificaci&oacute;n hecha por el vendedor).</td>
<td style="width: 97px; height: 43px;">&nbsp;</td>
<td style="width: 433px; height: 43px;">-</td>
</tr>
</tbody>
</table>

# DOCUMENTACIÓN GENERAL

- [Infraestructure](documentation\infrastructure.md)
- [Database](documentation\database.md)

# API DOCUMENTATION

- [User](documentation\api\user.md)
- [Media](documentation\api\media.md)
- [Platform](documentation\api\platform.md)
- [Cards](documentation\api\cards.md)
