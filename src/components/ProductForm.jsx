// src/components/ProductForm.js
import React, { useState } from 'react';

function ProductForm({ addProduct }) {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === 'price' ? parseFloat(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ id: '', name: '', price: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product ID:
        <input
          type="text"
          name="id"
          value={product.id}
          onChange={handleChange}
        />
      </label>
      <label>
        Product Name:
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Selling Price:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
