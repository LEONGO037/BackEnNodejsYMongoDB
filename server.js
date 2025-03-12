const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");  // Cambia la ruta si es necesario
const { contadorMiddleware, obtenerOperaciones } = require("./middlewares/contadorMiddleware");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Conexión a MongoDB (sin archivo .env)
const MONGO_URI = "mongodb+srv://admin123ldm:admin123ldm@apiconexpress.fk9tv.mongodb.net/?retryWrites=true&w=majority&appName=ApiConExpress";
const PORT = 3000; 

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error de conexión a MongoDB:", err));

// Rutas con contadorMiddleware
app.use("/api", apiRoutes);  // Asegúrate de que las rutas de productos y usuarios están dentro de "/api"

// Ruta para obtener el contador de operaciones
app.get("/operaciones", obtenerOperaciones);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🔥 Servidor corriendo en http://localhost:${PORT}`);
});
