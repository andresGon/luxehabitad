import { useState, useEffect } from 'react';
import axios from 'axios';
import CardMain from './components/cardMain/CardMain';

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
      <div className="product-list">
        {products.map((product) => (
          <CardMain
            key={product.id} // Clave única para cada producto
            product={product} // Pasar el producto completo como prop
          />
        ))}
      </div>
    </>
  );
}

export default App;
