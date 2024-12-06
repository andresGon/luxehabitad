const mongoose = require('mongoose');

// Definir el esquema para el producto
const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true, // Obligatorio
    trim: false, // Elimina espacios en blanco al inicio y final
  },
  descripcion: {
    type: String,
    required: true,
    trim: false,
  },
  imagenes: {
    type: [String], // Array de URLs de imágenes
    validate: {
      validator: function (v) {
        return Array.isArray(v) && v.length > 0; // Validar que haya al menos una imagen
      },
      message: 'Debe proporcionar al menos una imagen.',
    },
  },
  precio: {
    type: Number,
    required: true,
    min: 0, // El precio no puede ser negativo
  },
  segundoPrecio: {
    type: Number,
    default: null, // Opcional, puede ser nulo
    min: 0,
  },
  porcentaje: {
    type: Number,
    min: 0, // Porcentaje mínimo
    max: 100, // Porcentaje máximo
  },
  categoria: {
    type: String,
    required: true,
    trim: false,
  },
  favorito: {
    type: Boolean,
    default: false, // Por defecto, no es favorito
  },
  masVendido: {
    type: Boolean,
    default: false, // Por defecto, no es "más vendido"
  },
}, {
  timestamps: true, // Agrega automáticamente `createdAt` y `updatedAt`
});

// Crear el modelo
const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
