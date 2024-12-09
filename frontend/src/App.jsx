import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { fetchProducts } from './services/productService';
import CardMain from './components/cardMain/CardMain';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; // Importar el componente Footer
import './styles/main.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <Slider {...sliderSettings}>
        <div>
          <p>hola</p>
          <img src="https://via.placeholder.com/800x300?text=Banner+1" alt="Banner 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300?text=Banner+2" alt="Banner 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300?text=Banner+3" alt="Banner 3" />
        </div>
      </Slider>
      <h1>Lista de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <CardMain key={product._id} product={product} />
        ))}
      </div>
      <Footer /> {/* Usar el componente Footer */}
    </>
  );
};

export default App;
