// CartWidget.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const CartWidget = ({ cartItems }) => {
  const cartItemCount = cartItems ? cartItems.length : 0;

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Agregar al carrito</Popover.Header>
      <Popover.Body>
        {cartItems && cartItems.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <div style={{ cursor: 'pointer', background: 'transparent' }}>
        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" />
        {cartItemCount > 0 && <span className="badge badge-danger">{cartItemCount}</span>}
      </div>
    </OverlayTrigger>
  );
};

export default CartWidget;
