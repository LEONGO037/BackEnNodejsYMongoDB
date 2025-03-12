# Proyecto Backend con Node.js, Express y MongoDB

Este proyecto es una API REST que permite gestionar usuarios y productos con operaciones CRUD, además de contar con un sistema de contadores de operaciones y registros.

## 📌 Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB con Mongoose
- CORS
- Git para control de versiones

---

## 🚀 Instalación y configuración

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/LEONGO037/BackEnNodejsYMongoDB.git
2️⃣ Instalar dependencias
powershell
Copy
cd BackEnNodejsYMongoDB
npm install
3️⃣ Ejecutar el servidor
powershell
Copy
npm start
El servidor se ejecutará en http://localhost:3000/

📋 Endpoints
Usuarios
Ejemplo de body:

json
Copy
{
    "nombre": "Leonardo Delgado",
    "email": "leonardo.delgado@ucb.edu.bo.com",
    "edad": 31
}
Endpoints disponibles:

GET /api/usuarios - Obtener todos los usuarios

POST /api/usuarios - Agregar usuario

PUT /api/usuarios/:id - Actualizar usuario por ID

DELETE /api/usuarios/:id - Eliminar usuario por ID

Productos
Ejemplo de body:

json
Copy
{
    "nombre": "Chocolate con Pasas",
    "descripcion": "Chocolate puro 70% con pasas",
    "precio": 120,
    "categoria": "Alimentos"
}
Endpoints disponibles:

GET /api/productos - Obtener todos los productos

POST /api/productos - Agregar producto

PUT /api/productos/:id - Actualizar producto por ID

DELETE /api/productos/:id - Eliminar producto por ID

Contadores
GET /api/contadores - Obtener la cantidad de documentos de usuarios y productos

Operaciones
GET /api/operaciones - Obtener la cantidad de operaciones del backend