const Producto = require('../models/product.model.js'); // Asegúrate de tener la ruta correcta al modelo

// Crear un nuevo producto
const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body); // Datos enviados en el cuerpo de la solicitud
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el producto', detalles: error.message });
  }
};

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find(); // Recuperar todos los documentos de la colección
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos', detalles: error.message });
  }
};

// Obtener un producto por ID
const obtenerProductoPorId = async (req, res) => {
  try {
    const { id } = req.params; // Extraer ID de los parámetros de la URL
    const producto = await Producto.findById(id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto', detalles: error.message });
  }
};

// Actualizar un producto
const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;
    const productoActualizado = await Producto.findByIdAndUpdate(id, datosActualizados, { new: true });
    if (!productoActualizado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el producto', detalles: error.message });
  }
};

// Eliminar un producto
const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const productoEliminado = await Producto.findByIdAndDelete(id);
    if (!productoEliminado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json({ mensaje: 'Producto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el producto', detalles: error.message });
  }
};

module.exports = {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto,
};
