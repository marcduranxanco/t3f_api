# TAPE TO THE FUTURE - API REST

1. [SOBRE ESTE PROYECTO](#SOBRE-ESTE-PROYECTO)
2. [OBJETIVOS DEL PROYECTO](#OBJETIVOS-PROYECTO)
3. [DOCUMENTACIÓN GENERAL](#DOCUMENTACION-GENERAL)
4. [API DOCUMENTATION](#API-DOCUMENTATION)

# SOBRE ESTE PROYECTO
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo tincidunt magna id aliquam. Pellentesque lacinia, arcu nec convallis feugiat, purus diam lobortis justo, laoreet pellentesque massa est a nulla. Vivamus vitae mollis lectus. Donec dignissim commodo neque convallis placerat. Donec vulputate et est quis volutpat. Aliquam sagittis, nunc sit amet placerat suscipit, arcu tellus scelerisque nisl, ac ornare est nibh id metus. Etiam interdum lectus eget arcu malesuada, elementum pharetra eros scelerisque. Sed ac faucibus arcu, id laoreet quam. Cras eleifend rhoncus aliquet.

# OBJETIVOS DEL PROYECTO (RELACIÓN DE FUNCIONALIDADES)

### Funcionalidad: API REST Tecnologías:
* :heavy_check_mark: - NodeJS*
* :heavy_check_mark: - Express
* :heavy_check_mark: - Sequelize
* :heavy_check_mark: - Git + Git-flow

### Feature 1 : Gestión Usuario	
Requisitos Mínimos:
* :heavy_check_mark: - Validación por Token
* :heavy_check_mark: - Endpoint de Login
* :heavy_check_mark: - Endpoint de Registro
* :heavy_check_mark: - Endpoint de Perfil (Datos de Usuario)

Extra points:
* :heavy_check_mark: - Roles Administrador / Usuario / Vendedor
* :heavy_check_mark: - Endpoints modificar datos de Usuario

### Feature 2 : Gestión Product	
Requisitos Mínimos	
* :heavy_check_mark: - Endpoints añadir, eliminar, modificar producto (vendedor)
* :heavy_check_mark: - Endpoint muestra all products
* :x: - Endpoints productos filtro (más vendidos, precio, título…)

Extra points:
* :x: - Endpoint de productos por vendedor
* :x: - Endpoint de productos por categoría

### Feature 3 : Gestión Compras
Requisitos Mínimos:
* :x: - Endpoint de añadir compra.
* :x: - Endpoint muestra todas las compras.

Extra points:
* :x: - Endpoint de compras por usuario. (modo factura)
* :x: - Endpoint modificación datos factura (modificación hecha por el vendedor).

# DOCUMENTACIÓN GENERAL
* [Infraestructure](documentation\infrastructure.md)
* [Database](documentation\database.md)

# API DOCUMENTATION
* [User](documentation\api\user.md)
* [Media](documentation\api\media.md)
* [Platform](documentation\api\platform.md)
* [Cards](documentation\api\cards.md)