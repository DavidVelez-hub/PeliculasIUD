const express = require('express');
const route = express.Router();

// Importar controlador
const genreController = require('../Controllers/genereController');

// Rutas
route.route('/')
  .get(genreController.getAllGenres)
  .post(genreController.createGenre);

route.route('/:id')
  .get(genreController.getGenreById)
  .put(genreController.updateGenre)
  .delete(genreController.deleteGenre);

export default route;