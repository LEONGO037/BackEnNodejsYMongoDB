const Usuario = require("../models/usuario");
const Producto = require("../models/producto");

// Obtener el número total de documentos en Usuarios y Productos
exports.getContadores = async (req, res) => {
  try {
    const totalUsuarios = await Usuario.countDocuments();
    const totalProductos = await Producto.countDocuments();

    res.status(200).json({
      usuarios: totalUsuarios,
      productos: totalProductos
    });
  } catch (err) {
    res.status(500).json({ error: "Error al obtener los contadores." });
  }
};
