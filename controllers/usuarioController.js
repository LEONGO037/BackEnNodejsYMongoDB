const Usuario = require("../models/usuario");

// Crear un nuevo usuario
exports.createUsuario = async (req, res) => {
  const { nombre, email, edad } = req.body;
  try {
    const nuevoUsuario = new Usuario({ nombre, email, edad });
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(500).json({ error: "Error al crear el usuario." });
  }
};

// Obtener todos los usuarios
exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener los usuarios." });
  }
};

// Actualizar un usuario por ID
exports.updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, email, edad } = req.body;
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      id,
      { nombre, email, edad },
      { new: true }
    );
    if (!usuarioActualizado) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }
    res.status(200).json(usuarioActualizado);
  } catch (err) {
    res.status(500).json({ error: "Error al actualizar el usuario." });
  }
};

// Eliminar un usuario por ID
exports.deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    if (!usuarioEliminado) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }
    res.status(200).json({ mensaje: "Usuario eliminado con éxito." });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar el usuario." });
  }
};
