import React from 'react';
import './CardMain.css';

const CardMain = ({ product }) => {
  return (
    <div className="card-main">
      <div className="image-container">
        <div className="flags">
          {/* Mostrar el flag de descuento si "porcentaje" es mayor a 0 */}
          {product.porcentaje > 0 && (
            <span className="flag discount">-{product.porcentaje}%</span>
          )}
          {/* Mostrar el flag "Hot" si "favorito" es true */}
          {product.favorito && <span className="flag hot">Hot</span>}
        </div>
        <img
          src={product.imagenes[0]} // Usa la primera imagen del array
          alt={product.nombre}
          className="product-image"
        />
      </div>
      <div className="product-details">
        <h3 className="product-title">{product.nombre}</h3>
        <div className="product-prices">
          <span className="price-current">${product.precio}</span>
          {product.segundoPrecio && (
            <span className="price-old">${product.segundoPrecio}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardMain;
