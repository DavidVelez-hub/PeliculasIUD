const mongoose = require('mongoose');

const productionCompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre de la productora es obligatorio'],
    unique: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['activo', 'inactivo'],
    default: 'activo'
  },
  slogan: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
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

productionCompanySchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('ProductionCompany', productionCompanySchema);