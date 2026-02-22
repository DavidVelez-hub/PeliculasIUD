const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  names: {
    type: String,
    required: [true, 'Los nombres del director son obligatorios'],
    trim: true
  },
  status: {
    type: String,
    enum: ['activo', 'inactivo'],
    default: 'activo'
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

directorSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Director', directorSchema);