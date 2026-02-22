const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  serial: {
    type: String,
    required: [true, 'El serial es obligatorio'],
    unique: true,
    trim: true
  },
  title: {
    type: String,
    required: [true, 'El título es obligatorio'],
    trim: true
  },
  synopsis: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    required: [true, 'La URL es obligatoria'],
    unique: true,
    trim: true
  },
  coverImage: {
    type: String,
    trim: true
  },
  releaseYear: {
    type: Number,
    required: [true, 'El año de estreno es obligatorio']
  },
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre',
    required: [true, 'El género es obligatorio']
  },
  director: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Director',
    required: [true, 'El director es obligatorio']
  },
  productionCompany: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductionCompany',
    required: [true, 'La productora es obligatoria']
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Type',
    required: [true, 'El tipo es obligatorio']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

mediaSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Media', mediaSchema);