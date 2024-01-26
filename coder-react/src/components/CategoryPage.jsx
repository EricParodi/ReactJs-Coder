// CategoryPage.jsx
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import { useParams } from 'react-router-dom';

const CategoryPage = ({ products }) => {
  const [filters, setFilters] = useState({ gender: '', category: '' });
  const { gender, category } = useParams();

  useEffect(() => {
    setFilters({ gender, category });
  }, [gender, category]);

  const filteredProducts = products.filter(
    (product) =>
      (filters.gender === '' || product.gender === filters.gender) &&
      (filters.category === '' || product.category === filters.category)
  );

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Categoría</h2>
      {}
      {}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default CategoryPage;
