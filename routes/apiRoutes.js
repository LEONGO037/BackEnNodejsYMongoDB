const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");
const productoController = require("../controllers/productoController");
const contadorController = require("../controllers/contadorController");
const { contadorMiddleware, obtenerOperaciones } = require("../middlewares/contadorMiddleware");

// Rutas de usuarios
router.post("/usuarios", contadorMiddleware, usuarioController.createUsuario);
router.get("/usuarios", contadorMiddleware, usuarioController.getAllUsuarios);
router.put("/usuarios/:id", contadorMiddleware, usuarioController.updateUsuario);
router.delete("/usuarios/:id", contadorMiddleware, usuarioController.deleteUsuario);

// Rutas de productos
router.post("/productos", contadorMiddleware, productoController.createProducto);
router.get("/productos", contadorMiddleware, productoController.getAllProductos);
router.put("/productos/:id", contadorMiddleware, productoController.updateProducto);
router.delete("/productos/:id", contadorMiddleware, productoController.deleteProducto);

// Ruta para obtener los contadores
router.get("/contadores", contadorController.getContadores);

// Ruta para obtener el número total de operaciones
router.get("/operaciones", obtenerOperaciones);

module.exports = router;
