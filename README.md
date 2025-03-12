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

### 2️⃣ Instalar dependencia

'''powershell
cd BackEnNodejsYMongoDB
npm install

--

### 3️⃣ Ejecutar el servidor

'''powershell
npm start

El servidor se ejecutará en http://localhost:3000/

---

## Para los endpoints 

### Para el usuario

Ejemplo de body:
{
    "nombre": "Leonardo Delgado",
    "email": "leonardo.delgado@ucb.edu.bo.com",
    "edad": 31
}
Endpoints:
* Obtener todos los usuarios: GET /api/usuarios
* Agregar usuario: POST /api/usuarios
* Actualizar usuario por ID: PUT /api/usuarios/:id
* Eliminar usuario por ID: DELETE /api/usuarios/:id

### Para los productos

Ejemplo de body:
{
    "nombre": "Chocolate con Pasas",
    "descripcion": "Chocolate puro 70% con pasas",
    "precio": 120,
    "categoria": "Alimentos"
}
Endpoints:
* Obtener todos los productos: GET /api/productos
* Agregar producto: POST /api/productos
* Actualizar producto por ID: PUT /api/productos/:id
* Eliminar producto por ID: DELETE /api/productos/:id

### Para el contador de documentos:

Endpoint: 
* Para obtener la cantidad de documentos de usuarios y productos: GET /api/contadores

### Para el numero de operaciones:

Endpoint:
* Para obtener la cantidad de operaciones del backend: GET /api/operaciones
