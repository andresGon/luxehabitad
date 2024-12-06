const express = require('express');
const {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto,
} = require('../controllers/product.controller.js');

const router = express.Router();

// Rutas para los productos
router.post('/', crearProducto); // Crear un producto
router.get('/', obtenerProductos); // Obtener todos los productos
router.get('/:id', obtenerProductoPorId); // Obtener un producto por ID
router.put('/:id', actualizarProducto); // Actualizar un producto por ID
router.delete('/:id', eliminarProducto); // Eliminar un producto por ID

module.exports = router;
