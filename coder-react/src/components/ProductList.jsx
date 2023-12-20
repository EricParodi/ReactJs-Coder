// ProductList.jsx
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-grid">
      <h2 style={{ textAlign: 'center' }}>Catalogo</h2>
      <Row className="card-container">
        {products.map((product, index) => (
          <Col key={index} lg={3} md={4} sm={6} xs={12}>
            <Card style={{ marginBottom: '100px', height: '600px' }}>
              <Card.Img variant="top" src={product.image} alt={product.name} style={{ height: '400px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
                {/* Agrega un enlace a los detalles de cada producto */}
                <Link to={`/products/${encodeURIComponent(product.name)}`}>
                  <Button variant="link">Detalles</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
