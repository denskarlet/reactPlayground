import React from 'react';

const Filter = ({ updateFilter, filter }) => {
  return (
    <select value={filter} onChange={(e) => updateFilter(e.target.value)}>
      <option value="price">price</option>
      <option value="size">size</option>
      <option value="description">description</option>
    </select>
  );
};
export default Filter;
