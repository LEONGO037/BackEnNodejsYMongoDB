let totalOperaciones = 0;  // Variable global para contar las operaciones

const contadorMiddleware = (req, res, next) => {
  totalOperaciones++;  // Incrementa el contador en cada operación
  next();  // Pasa al siguiente middleware o ruta
};

const obtenerOperaciones = (req, res) => {
  res.json({ totalOperaciones });  // Devuelve el total de operaciones
};

module.exports = { contadorMiddleware, obtenerOperaciones };
