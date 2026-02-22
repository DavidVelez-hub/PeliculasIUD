const express = require('express');
const connectDB = require('./config/database');
import genereRoutes from './routes/generes.js';
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/generes', genreRoutes);

app.get('/', (req, res) => {
  res.json({
    message: '🎬 API Películas IUD - EA1',
    version: '1.0.0',
    endpoints: {},
    status: 'OK'
  });
});

// Manejo de 404
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Ruta no encontrada' 
  });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor',
    error: err.message
  });
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});