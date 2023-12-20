// ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products, addToCart }) => {
  const { productName } = useParams();
  const product = products.find((p) => p.name === productName);

  if (!product) {
    return <div>Producto no encontrado!</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} />
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductDetail;
