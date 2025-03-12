const Producto = require("../models/producto");

// Crear un nuevo producto
exports.createProducto = async (req, res) => {
  const { nombre, descripcion, precio, categoria } = req.body;
  try {
    const nuevoProducto = new Producto({ nombre, descripcion, precio, categoria });
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(500).json({ error: "Error al crear el producto." });
  }
};

// Obtener todos los productos
exports.getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener los productos." });
  }
};

// Actualizar un producto por ID
exports.updateProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, categoria } = req.body;
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(
      id,
      { nombre, descripcion, precio, categoria },
      { new: true }
    );
    if (!productoActualizado) {
      return res.status(404).json({ error: "Producto no encontrado." });
    }
    res.status(200).json(productoActualizado);
  } catch (err) {
    res.status(500).json({ error: "Error al actualizar el producto." });
  }
};

// Eliminar un producto por ID
exports.deleteProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const productoEliminado = await Producto.findByIdAndDelete(id);
    if (!productoEliminado) {
      return res.status(404).json({ error: "Producto no encontrado." });
    }
    res.status(200).json({ mensaje: "Producto eliminado con éxito." });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar el producto." });
  }
};
