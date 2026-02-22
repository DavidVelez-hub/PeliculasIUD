const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre del género es obligatorio'],
    unique: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['activo', 'inactivo'],
    default: 'activo'
  },
  description: {
    type: String,
    trim: true
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Actualizar fecha de modificación antes de guardar
genreSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Genre', genreSchema);