// Product.jsx
import React from 'react';

const Product = ({ product, showAddToCartButtons }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {showAddToCartButtons && <img src={product.image} alt={product.name} style={{ maxWidth: '150px' }} />}
    </div>
  );
};

export default Product;
