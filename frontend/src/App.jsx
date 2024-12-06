import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos

  // Función para obtener los datos del backend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data); // Almacena los productos en el estado
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  // Usar useEffect para llamar a fetchData al montar el componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}> {/* Usa una clave única como id */}
            <h2>{product.nombre}</h2>
            <img src={product.imagenes[0]} alt="" />
            <p>{product.descripcion}</p>
            <p>Precio: ${product.precio}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
