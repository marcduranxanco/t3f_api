# TAPE TO THE FUTURE - API REST

1. [SOBRE ESTE PROYECTO](#SOBRE-ESTE-PROYECTO)
2. [OBJETIVOS DEL PROYECTO](#OBJETIVOS-PROYECTO)
3. [DOCUMENTACIÓN GENERAL](#DOCUMENTACION-GENERAL)
4. [API DOCUMENTATION](#API-DOCUMENTATION)

# SOBRE ESTE PROYECTO

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo tincidunt magna id aliquam. Pellentesque lacinia, arcu nec convallis feugiat, purus diam lobortis justo, laoreet pellentesque massa est a nulla. Vivamus vitae mollis lectus. Donec dignissim commodo neque convallis placerat. Donec vulputate et est quis volutpat. Aliquam sagittis, nunc sit amet placerat suscipit, arcu tellus scelerisque nisl, ac ornare est nibh id metus. Etiam interdum lectus eget arcu malesuada, elementum pharetra eros scelerisque. Sed ac faucibus arcu, id laoreet quam. Cras eleifend rhoncus aliquet.

# OBJETIVOS DEL PROYECTO (RELACIÓN DE FUNCIONALIDADES)

<table>
    <thead>
        <tr>
            <th>Estado</th>
            <th>Requisito</th>
            <th>Comentario</th>
        </tr>
    </thead>
    <tbody>
        <tr><td colspan="3"><b>Tecnologías</b></td></tr>
            <tr><td>:heavy_check_mark:</td><td>NodeJS</td><td>-</td></tr>
            <tr><td>:heavy_check_mark:</td><td>Express</td><td>-</td></tr>
            <tr><td>:heavy_check_mark:</td><td>Sequelize</td><td>-</td></tr>
            <tr><td>:heavy_check_mark:</td><td>Git + Git-flow</td><td>-</td></tr>
        <tr><td colspan="3"><b>Feature 1 : Gestión Usuario</b></td></tr>
            <tr><td colspan="3">Requisitos Mínimos</td></tr>
                <tr><td>:heavy_check_mark:</td><td>Validación por Token</td><td>Funcionalidad implantada con JWT.</td></tr>
                <tr><td>:heavy_check_mark:</td><td>Endpoint de Login</td><td>Endpoint: POST - /users/login</td></tr>
                <tr><td>:heavy_check_mark:</td><td>Endpoint de Registro</td><td>Endpoint: POST - /users/</td></tr>
                <tr><td>:heavy_check_mark:</td><td>Endpoint de Perfil (Datos de Usuario)</td><td>Endpoint: - /users/:id?</td></tr>
            <tr><td colspan="3">Extra points</td></tr>
                <tr><td>:heavy_check_mark:</td><td>Roles Administrador / Usuario / Vendedor</td><td>Roles implantados: Superadmin, Usuario, Admin</td></tr>
                <tr><td>:heavy_check_mark:</td><td>Endpoints modificar datos de Usuario</td><td>Endpoint: PUT - /users/:id?</td></tr>
        <tr><td colspan="3"><b>Feature 2 : Gestión Product</b></td></tr>
            <tr><td colspan="3">Requisitos Mínimos</td></tr>
                <tr><td>:heavy_check_mark:</td><td>Endpoints añadir, eliminar, modificar producto (vendedor)</td><td>La creación de las "media" (película, serie...) corresponde al producto. Estos productos se añadiran a una lista en forma de "Factura".</td></tr>
                <tr><td>:heavy_check_mark:</td><td>Endpoint muestra all products</td><td>Endpoint: GET - /media/ </td></tr>
                <tr><td>:x:</td><td>Endpoints productos filtro (más vendidos, precio, título…)</td><td>-</td></tr>
            <tr><td colspan="3">Extra points</td></tr>
                <tr><td>:x:</td><td>Endpoint de productos por vendedor</td><td>-</td></tr>
                <tr><td>:x:</td><td>Endpoint de productos por categoría</td><td>-</td></tr>
        <tr><td colspan="3"><b>Feature 3 : Gestión Compras</b></td></tr>
            <tr><td colspan="3">Requisitos Mínimos</td></tr>
                <tr><td>:x:</td><td>Endpoint de añadir compra.</td><td>-</td></tr>
                <tr><td>:x:</td><td>Endpoint muestra todas las compras.</td><td>-</td></tr>
            <tr><td colspan="3">Extra points</td></tr>
                <tr><td>:x:</td><td>Endpoint de compras por usuario. (modo factura)</td><td>-</td></tr>
                <tr><td>:x:</td><td>Endpoint modificación datos factura (modificación hecha por el vendedor).</td><td>-</td></tr>
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
