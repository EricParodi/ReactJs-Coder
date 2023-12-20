// NavBar.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = ({ cartItemsCount }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Clothing
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Catalogo
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="cart-widget">
          <Link to="/cart">
            <FaShoppingCart />
            {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
