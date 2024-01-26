import React, { useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = ({ cartItemsCount }) => {
  useEffect(() => {
  }, [cartItemsCount]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Clothing
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/products">
              Todos
            </Nav.Link>
            <NavDropdown title="Hombres" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products/masculino/remeras">
                Remeras
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/masculino/buzos">
                Buzos
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Mujeres" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products/femenino/remeras">
                Remeras
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/femenino/pantalon">
                Pantalones
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
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
