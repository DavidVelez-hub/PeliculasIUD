const Genre = require('../models/Genere');

// ✅ Declarar funciones como variables const (no usar exports.func = ...)
const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.status(200).json({
      success: true,
      count: genres.length,
      data: genres
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener los géneros',
      error: error.message
    });
  }
};

const getGenreById = async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id);
    
    if (!genre) {
      return res.status(404).json({
        success: false,
        message: 'Género no encontrado'
      });
    }
    
    res.status(200).json({
      success: true,
      data: genre
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener el género',
      error: error.message
    });
  }
};

const createGenre = async (req, res) => {
  try {
    const genre = await Genre.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Género creado exitosamente',
      data: genre
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Ya existe un género con ese nombre'
      });
    }
    
    res.status(400).json({
      success: false,
      message: 'Error al crear el género',
      error: error.message
    });
  }
};

const updateGenre = async (req, res) => {
  try {
    const genre = await Genre.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { 
        new: true, 
        runValidators: true 
      }
    );
    
    if (!genre) {
      return res.status(404).json({
        success: false,
        message: 'Género no encontrado'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Género actualizado exitosamente',
      data: genre
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Ya existe un género con ese nombre'
      });
    }
    
    res.status(400).json({
      success: false,
      message: 'Error al actualizar el género',
      error: error.message
    });
  }
};

const deleteGenre = async (req, res) => {
  try {
    const genre = await Genre.findByIdAndDelete(req.params.id);
    
    if (!genre) {
      return res.status(404).json({
        success: false,
        message: 'Género no encontrado'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Género eliminado exitosamente',
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al eliminar el género',
      error: error.message
    });
  }
};

// ✅ Exportar todas las funciones al final (ahora SÍ funcionan porque son variables)
module.exports = {
  getAllGenres,
  getGenreById,
  createGenre,
  updateGenre,
  deleteGenre
};