// CartPage.jsx

import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}{' '}
                <button onClick={() => removeFromCart(item)}>Eliminar del carrito</button>
              </li>
            ))}
          </ul>
          <Link to="/purchase-confirmation">
            <button>Finalizar Compra</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
