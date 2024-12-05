require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Configurar CORS
app.use(cors()); // Permitir todas las solicitudes de todos los orígenes

// Opcional: Configurar CORS con opciones personalizadas
/*
const corsOptions = {
  origin: 'http://tudominio.com', // Reemplaza con la URL de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
  credentials: true, // Permitir cookies o credenciales
};
app.use(cors(corsOptions));
*/

// Variables de entorno
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;

//importar rutas
const productoRoutes = require('./routes/product.route.js'); // Ruta a las rutas de productos

//Asegúrate de que el servidor está configurado para procesar solicitudes JSON.
app.use(express.json());


// Conectar a MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexión exitosa a MongoDB Atlas'))
  .catch(err => console.error('Error al conectar a MongoDB Atlas:', err));

// Ruta de prueba
//app.get('/', (req, res) => {
//  res.send('¡CORS está habilitado!');
//});
// Usar las rutas de productos
app.use('/api/products', productoRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
