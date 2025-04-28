🤖 API de Robots Famosos
Esta es una API REST construida con Node.js, Express y MongoDB, que permite gestionar una base de datos de robots famosos de la ficción.
Implementa autenticación segura mediante JWT y bcrypt, y cuenta con operaciones CRUD completas además de filtros por origen y bando.

🚀 Tecnologías Utilizadas
Node.js

Express

MongoDB (Mongoose)

JWT para autenticación

bcrypt para encriptación de contraseñas

📂 Estructura del Proyecto
bash
Copiar
Editar
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
📦 Instalación
Clona el repositorio

bash
Copiar
Editar
git clone https://github.com/tu-usuario/robot-api.git
cd robot-api
Instala las dependencias

bash
Copiar
Editar
npm install
Crea el archivo de variables de entorno

Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

env
Copiar
Editar
PORT=5000
MONGO_URI=tu_string_de_conexion_a_mongo
JWT_SECRET=tu_secreto_para_jwt
Inicia el servidor

bash
Copiar
Editar
npm run dev
El servidor estará corriendo en:
👉 http://localhost:5000/api

🔐 Autenticación
Para acceder a la mayoría de las rutas necesitas enviar un token JWT en el header:

http
Copiar
Editar
Authorization: Bearer <token>
Debes primero registrarte (/api/auth/register) o iniciar sesión (/api/auth/login) para obtenerlo.

📚 Endpoints Principales
Autenticación
POST /api/auth/register - Registrar usuario

POST /api/auth/login - Login de usuario

Robots
GET /api/robots - Listar robots

POST /api/robots - Crear robot (solo admin)

GET /api/robots/:id - Obtener robot por ID

PUT /api/robots/:id - Actualizar robot (solo admin)

DELETE /api/robots/:id - Eliminar robot (solo admin)

Filtros
GET /api/robots/filter/origen?origen=Película

GET /api/robots/filter/bando?bando=Héroe

⚡ Notas
Esta API es totalmente escalable y preparada para producción.

Se recomienda asegurar HTTPS en entornos de producción.

JWT y contraseñas están manejadas de forma segura.