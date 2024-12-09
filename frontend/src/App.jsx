import React from 'react';
import { useState, useEffect } from 'react';
import { fetchProducts } from './services/productService';
import CardMain from './components/cardMain/CardMain';
import Header from './components/Header/Header'; // Importar el componente Header
import './styles/main.scss';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError('Error al cargar los productos.');
      }
    };

    loadProducts();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <>
      <Header /> {/* Usar el componente Header */}
      <h1>Lista de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <CardMain key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
