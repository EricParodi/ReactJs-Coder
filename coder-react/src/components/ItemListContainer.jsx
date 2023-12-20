// itemListContainer.jsx
import React from 'react';

const ItemListContainer = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ItemListContainer;
