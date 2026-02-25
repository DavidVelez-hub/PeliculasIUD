import express from 'express';
import 'dotenv/config';
import directorsRoute from './routes/directors.js';
import productionCompaniesRoute from './routes/productionCompanies.js';
import typesRoute from './routes/types.js';
import generesRoute from './routes/generes.js';
import mediaRoute from './routes/media.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/directors', directorsRoute);
app.use('/productionCompanies', productionCompaniesRoute);
app.use('/types', typesRoute);
app.use('/generes', generesRoute);
app.use('/media', mediaRoute);


// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: '🚀 Servidor activo' });
});

// Servidor
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});