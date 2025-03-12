const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

router.post("/", productoController.createProducto);
router.get("/", productoController.getAllProductos);
router.put("/:id", productoController.updateProducto);
router.delete("/:id", productoController.deleteProducto);

module.exports = router;
