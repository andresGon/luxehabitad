import axios from 'axios';

// Define la base URL para todas las solicitudes
const API_URL = 'http://localhost:3000/api/products';

// Función para obtener los productos
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Retorna los datos obtenidos
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error; // Lanza el error para manejarlo donde se llame
  }
};
