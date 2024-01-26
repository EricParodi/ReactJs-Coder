// ProductList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const NEW_PRODUCTS_STORAGE_KEY = 'newProducts';

const ProductList = ({ products }) => {
  const { addToCart } = useCart();
  const [newProducts, setNewProducts] = useState(() => {
    const storedNewProducts = localStorage.getItem(NEW_PRODUCTS_STORAGE_KEY);
    return storedNewProducts ? JSON.parse(storedNewProducts) : [];
  });

  useEffect(() => {
    localStorage.setItem(NEW_PRODUCTS_STORAGE_KEY, JSON.stringify(newProducts));
  }, [newProducts]);

  const handleCreateNewProduct = () => {
    const defaultProductDetails = {
      name: 'Nuevo Producto',
      description: 'Descripción del nuevo producto.',
      price: 29.99,
      image: 'URL de la imagen del nuevo producto',
    };

    const userEnteredDetails = prompt(
      'Ingrese las propiedades del nuevo producto separadas por coma (nombre, precio, descripción, ...)'
    );

    if (userEnteredDetails) {
      const enteredDetailsArray = userEnteredDetails.split(',').map((detail) => detail.trim());

      const newProductDetails = { ...defaultProductDetails };
      enteredDetailsArray.forEach((detail, index) => {
        const key = Object.keys(defaultProductDetails)[index];
        if (key) {
          newProductDetails[key] = detail;
        }
      });

      setNewProducts([...newProducts, newProductDetails]);
    }
  };

  return (
    <div>
      <h2>Lista de productos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {[...products, ...newProducts].map((product, index) => (
          <div key={index} style={{ flex: '1', marginRight: '20px' }}>
            <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <div>
              {!window.location.href.includes('/cart') && (
                <button onClick={() => addToCart(product)}>Agregar al carrito</button>
              )}
              <Link to={`/products/${product.name}`}>Detalles</Link>
            </div>
          </div>
        ))}
      </div>
      {!window.location.href.includes('/cart') && (
        <button onClick={handleCreateNewProduct}>Crear Nuevo Producto</button>
      )}
    </div>
  );
};

export default ProductList;
