// Filter.jsx
import React from 'react';

const Filter = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  return (
    <div>
      <label>
        Género:
        <select name="gender" onChange={handleFilterChange}>
          <option value="">Todos</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </select>
      </label>
      <label>
        Categoría:
        <select name="category" onChange={handleFilterChange}>
          <option value="">Todas</option>
          <option value="remeras">Remeras</option>
          <option value="pantalon">Pantalón</option>
          <option value="buzos">Buzos</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
