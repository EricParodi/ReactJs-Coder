// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CategoryPage from './components/CategoryPage';
import CartPage from './components/CartPage';
import { CartProvider } from './components/CartContext';
import PurchaseConfirmation from './components/PurchaseConfirmation';

const HeroCarousel = () => {
  return (
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://cdn.discordapp.com/attachments/750823355233599510/1200232802994634772/hero3.png?ex=65c56ee7&is=65b2f9e7&hm=9164d078b7917440861faa9ed1afee908364a0fd5bb54d5c341351b7fd74da13" className="d-block w-100" alt="Hero 1" />
        </div>
        <div className="carousel-item">
          <img src="https://cdn.discordapp.com/attachments/750823355233599510/1200232803552460800/hero-img.png?ex=65c56ee7&is=65b2f9e7&hm=6936c7437e3d90dcabb1f4c15c7473bc18d073205dd31a7df4cc057f3a6b3aa8" className="d-block w-100" alt="Hero 2" />
        </div>
        <div className="carousel-item">
          <img src="https://cdn.discordapp.com/attachments/750823355233599510/1200232803971899522/hero2.png?ex=65c56ee7&is=65b2f9e7&hm=fd00c36362c066911f293b0b851a9f3b4f1948cf40e7bbb536518fb4339a5aed" className="d-block w-100" alt="Hero 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
import "./components/styles.css";
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <div className="welcome-section">
        <h1>Bienvenido a Clothing</h1>
        <p>Tu destino para encontrar las últimas tendencias en moda.</p>
        <p>Descubre una gran variedad de vestimentas para todas las edades y estilos.</p>
      </div>
      <div className="featured-products">
        <h2>Visita Nuestro Productos Destacados</h2>
        {}
      </div>
      <div className="about-us">
        <h2>Acerca de Nosotros</h2>
        <p>Somos una tienda comprometida con ofrecerte la mejor experiencia de compra.</p>
        <p>Nuestro objetivo es proporcionar productos de alta calidad y últimas tendencias a precios accesibles.</p>
      </div>
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [products] = useState([
    {
      name: 'REMERA ZIMITH BURGH (ZH125112)',
      description: 'Remera negra de algodón. Hay stock.',
      price: 19.99,
      gender: 'masculino',
      category: 'remeras',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Negro'],
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1149872371721838643/image.png?ex=658f6c19&is=657cf719&hm=21be2995c09fbf96d4d549914fc9378f24228288547acbe95799d93e7fefb374&',
    },
    {
      name: 'REMERA ZIMITH FAMILLE (ZH215114)',
      description: 'Remera blanca de algodón. Hay stock.',
      price: 29.99,
      gender: 'masculino',
      category: 'remeras',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Blanco'],
      image: 'https://media.discordapp.net/attachments/750823355233599510/1149872473412739143/image.png?ex=658f6c31&is=657cf731&hm=7dafe8cf194aba781a7eab26b70e93c359df9e46b346f8c60f4bcfd9e2bededc&=&format=webp&quality=lossless&width=356&height=595',
    },
    {
      name: 'JEAN PIETA WIDE LEG BLACK (PI222101)',
      description: 'Jean negro liso. Hay stock.',
      price: 39.99,
      gender: 'femenino',
      category: 'pantalon',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Negro'],
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1149883811031691325/image.png?ex=658f76c0&is=657d01c0&hm=4c99100e8da3cd77406a4c462b64f53ab45b39574c3a4273f01fce1a8b535304&',
    },
    {
      name: '11283/MO1041 MUM NEW 19 (RE222117)',
      description: 'Jean azul con roturas en las rodillas. Hay stock.',
      price: 49.99,
      gender: 'femenino',
      category: 'pantalon',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Azul'],
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1149883966426464336/image.png?ex=658f76e5&is=657d01e5&hm=e7a49d68049f11e544821e51ba2b04f1448c0463eb597ce8c3ba47fc35860bfe&',
    },
    {
      name: 'CAMPERA GABARDINA ZIMITH PARKUS (ZH129200)',
      description: 'Campera gabardina verde con capucha peluda. Hay stock.',
      price: 59.99,
      gender: 'masculino',
      category: 'buzos',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Verde'],
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1149884630527397888/image.png?ex=658f7783&is=657d0283&hm=0071e0fcccb573224ac624a479290ce17ba121f2f2d1d145b34f7ec5fe049c5c&',
    },
    {
      name: 'CAMPERA ALTHON RILLEY (AH139305)',
      description: 'Campera con capucha gris. Hay stock.',
      price: 69.99,
      gender: 'masculino',
      category: 'buzos',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Gris'],
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1149884518396866580/image.png?ex=658f7769&is=657d0269&hm=1f4c8aed1df10f632323b0cd1f74ed698554e196efcab41e2ad29a0eea484e12&',
    },
    {
      name: 'REMERA BILLABONG SHINE BRIGHT (BG125118)',
      description: 'Remera corta blanca. Hay stock.',
      price: 79.99,
      gender: 'femenino',
      category: 'remeras',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Blanco'],
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1150136009011515392/image.png?ex=659061a1&is=657deca1&hm=c59d12af6f99c3e38c229992641f0b54fe38c11792987a4e66b8134f370de066&',
    },
    {
      name: 'REMERA BILLABONG MOON DANCE (BG135101)',
      description: 'Remera negra con estampado OVERSIZE. Hay stock.',
      price: 89.99,
      gender: 'femenino',
      category: 'remeras',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Negro'],
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1150136082470539344/image.png?ex=659061b2&is=657decb2&hm=c7b5a35270c4c630afd02d52c37577354cdc02381e1c3b7326778ec385617348&',
    },
    {
      name: 'REMERA VANS FLYING (VS125122)',
      description: 'Remera manga corta vans negra. Hay stock.',
      price: 99.99,
      gender: 'femenino',
      category: 'remeras',
      sizes: ['S', 'M', 'L'],
      colors: ['Negro'],
      image: 'https://cdn.discordapp.com/attachments/750823355233599510/1150136197394481172/image.png?ex=659061cd&is=657deccd&'
    },
  ]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
    setCartItemsCount((prevCount) => prevCount + 1);
  };

  const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('El carrito está vacío. Agrega productos antes de confirmar la compra.');
    } else {
      // Establece el estado de compra completada para mostrar los detalles de la compra
      setIsPurchaseComplete(true);
    }
  };

  return (
    <CartProvider>
      <Router>
        <div>
          <NavBar
            cartItemsCount={cartItemsCount}
            cartItems={cartItems}
            handleCheckout={handleCheckout}
          />
          <div className="product-grid">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/products"
                element={<ProductList products={products} addToCart={addToCart} />}
              />
              <Route
                path="/products/:gender/:category"
                element={<CategoryPage products={products} />}
              />
              <Route
                path="/products/:productName"
                element={<ProductDetail products={products} addToCart={addToCart} />}
              />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/purchase-confirmation" element={<PurchaseConfirmation />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;