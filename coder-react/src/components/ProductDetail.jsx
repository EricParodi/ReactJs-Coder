// ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';

const ProductDetail = ({ products }) => {
  const { productName } = useParams();
  const { addToCart } = useCart();

  const product = products.find((product) => product.name === productName);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert(`"${product.name}" ha sido agregado al carrito.`);
    }
  };

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} style={{ maxWidth: '300px' }} />
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
      ) : (
        <p>Producto no encontrado.</p>
      )}
    </div>
  );
};

export default ProductDetail;
