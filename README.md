🤖 API de Robots Famosos
```
Esta es una API REST construida con Node.js, Express y MongoDB, que permite gestionar una base de datos de robots famosos de la ficción.
Implementa autenticación segura mediante JWT y bcrypt, y cuenta con operaciones CRUD completas además de filtros por origen y bando.
```

🚀 Tecnologías Utilizadas

```
Node.js
Express
MongoDB (Mongoose)
JWT para autenticación
bcrypt para encriptación de contraseñas
```

📂 Estructura del Proyecto

```
robot-api/
│
├── controllers/        # Controladores de la lógica de negocio
│   ├── auth.controller.mjs
│   └── robots.controller.mjs
│
├── services/           # Servicios para lógica más abstracta o reutilizable
│   ├── auth.service.mjs
│   └── robots.service.mjs
│
├── models/             # Modelos de Mongoose (MongoDB)
│   ├── user.model.mjs
│   └── robot.model.mjs
│
├── routes/             # Definición de rutas Express
│   ├── auth.routes.mjs
│   └── robots.routes.mjs
│
├── middlewares/        # Middlewares personalizados (auth, errores)
│   ├── auth.middleware.mjs
│   └── role.middleware.mjs
│
├── config/             # Configuraciones como la base de datos
│   └── db.mjs
│
├── server.mjs          # Inicialización principal del servidor
├── package.json        # Dependencias y scripts
└── .env                # Variables de entorno
```

📦 Instalación
```
Clona el repositorio
git clone https://github.com/tu-usuario/robot-api.git

Instala las dependencias
npm install

Crea el archivo de variables de entorno
Crea un archivo .env en la raíz del proyecto con el siguiente contenido:
PORT=5000
MONGO_URI=tu_string_de_conexion_a_mongo
JWT_SECRET=tu_secreto_para_jwt

Inicia el servidor
npm run dev
El servidor estará corriendo en:
👉 http://localhost:5000/api

🔐 Autenticación
Para acceder a la mayoría de las rutas necesitas enviar un token JWT en el header:
Authorization: Bearer <token>
Debes primero registrarte (/api/auth/register) o iniciar sesión (/api/auth/login) para obtenerlo.
```

## 📚 Endpoints Principales

### Autenticación
* **`POST /api/auth/register`** - Registrar usuario
* **`POST /api/auth/login`** - Login de usuario

### Robots
* **`GET /api/robots`** - Listar robots
* **`POST /api/robots`** - Crear robot (solo admin)
* **`GET /api/robots/:id`** - Obtener robot por ID
* **`PUT /api/robots/:id`** - Actualizar robot (solo admin)
* **`DELETE /api/robots/:id`** - Eliminar robot (solo admin)

### Filtros
* **`GET /api/robots/filter/origen?origen=Película`** - Filtrar robots por origen. Ejemplo: obtener robots de películas.
* **`GET /api/robots/filter/bando?bando=Héroe`** - Filtrar robots por bando. Ejemplo: obtener robots héroes.

### Eventos
* **`GET /api/events/`** - Obtiene todos los eventos.
* **`GET /api/events/:id`** - Obtiene un evento específico por su ID.
* **`GET /api/events/robot/:robotId`** - Obtiene todos los eventos asociados a un robot específico.
* **`POST /api/events/`** - Crea un nuevo evento (requiere autorización de administrador).
* **`PUT /api/events/:id`** - Actualiza un evento existente (requiere autorización de administrador).
* **`DELETE /api/events/:id`** - Elimina un evento (requiere autorización de administrador).

link del despliegue: https://robotsfamososapi.onrender.com