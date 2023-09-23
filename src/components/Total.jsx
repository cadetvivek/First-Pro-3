// src/components/Total.js
import React from 'react';

function Total({ products }) {
  const totalValue = products.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <p>Total value worth of product: Rs{totalValue}</p>
    </div>
  );
}

export default Total;
