// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a mi tienda de ropa!!</h1>
      <p>Descubre una gran variedad de vestimentas para ti!</p>
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [products] = useState([
    {
      name: 'REMERA ZIMITH BURGH (ZH125112)',
      description: 'Remera negra de algodon. Hay stock.',
      price: 19.99,
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1149872371721838643/image.png?ex=658f6c19&is=657cf719&hm=21be2995c09fbf96d4d549914fc9378f24228288547acbe95799d93e7fefb374&',
    },
    {
      name: 'REMERA ZIMITH FAMILLE (ZH215114)',
      description: 'Remera blanca de algodon. Hay stock.',
      price: 29.99,
      image: 'https://media.discordapp.net/attachments/750823355233599510/1149872473412739143/image.png?ex=658f6c31&is=657cf731&hm=7dafe8cf194aba781a7eab26b70e93c359df9e46b346f8c60f4bcfd9e2bededc&=&format=webp&quality=lossless&width=356&height=595',
    },
    {
      name: 'JEAN PIETA WIDE LEG BLACK (PI222101)',
      description: 'Jean negro liso. Hay stock.',
      price: 39.99,
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1149883811031691325/image.png?ex=658f76c0&is=657d01c0&hm=4c99100e8da3cd77406a4c462b64f53ab45b39574c3a4273f01fce1a8b535304&',
    },
    {
      name: '11283/MO1041 MUM NEW 19 (RE222117)',
      description: 'Juan azul con roturas en las rodillas. Hay stock.',
      price: 49.99,
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1149883966426464336/image.png?ex=658f76e5&is=657d01e5&hm=e7a49d68049f11e544821e51ba2b04f1448c0463eb597ce8c3ba47fc35860bfe&',
    },
    {
      name: 'CAMPERA GABARDINA ZIMITH PARKUS (ZH129200)',
      description: 'Campera gabardina verde con capulla peluda. Hay stock.',
      price: 59.99,
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1149884630527397888/image.png?ex=658f7783&is=657d0283&hm=0071e0fcccb573224ac624a479290ce17ba121f2f2d1d145b34f7ec5fe049c5c&',
    },
    {
      name: 'CAMPERA ALTHON RILLEY (AH139305)',
      description: 'Campera con capucha gris. Hay stock.',
      price: 69.99,
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1149884518396866580/image.png?ex=658f7769&is=657d0269&hm=1f4c8aed1df10f632323b0cd1f74ed698554e196efcab41e2ad29a0eea484e12&',
    },
    {
      name: 'REMERA BILLABONG SHINE BRIGHT (BG125118)',
      description: 'Remera corta blanca. Hay stock.',
      price: 79.99,
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1150136009011515392/image.png?ex=659061a1&is=657deca1&hm=c59d12af6f99c3e38c229992641f0b54fe38c11792987a4e66b8134f370de066&',
    },
    {
      name: 'REMERA BILLABONG MOON DANCE (BG135101)',
      description: 'Remera negra con estampado OVERSIZE. Hay stock.',
      price: 89.99,
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1150136082470539344/image.png?ex=659061b2&is=657decb2&hm=c7b5a35270c4c630afd02d52c37577354cdc02381e1c3b7326778ec385617348&',
    },
    {
      name: 'REMERA VANS FLYING (VS125122)',
      description: 'Remera manga corta vans negra. Hay stock.',
      price: 99.99,
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1150136197394481172/image.png?ex=659061cd&is=657deccd&hm=8398e04a904754994b9c94bf97526cad307194389fced874e8e62be088cd7597&',
    },
    {
      name: 'ZAPATILLAS CONVERSE CHUCK TAYLOR HI ALL STAR PLATAFORMA LONA NEGRA ',
      description: 'Zapatillas converse botitas negras. Hay stock.',
      price: 109.99,
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1161781343261298749/image.png?ex=658c9ab1&is=657a25b1&hm=df8491658a66b5cd10a9a16872a59c4fde3a9b036565b246d96d896328552af4&',
    },
  ]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartItemsCount(cartItemsCount + 1);
  };

  return (
    <Router>
      <div>
        <NavBar cartItemsCount={cartItemsCount} />
        <div className="product-grid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<ProductList products={products} addToCart={addToCart} />}
            />
            <Route
              path="/products/:productName"
              element={<ProductDetail products={products} addToCart={addToCart} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;