// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Total from './components/Total';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load products from local storage when the app starts
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(savedProducts);
  }, []);

  useEffect(() => {
    // Save products to local storage whenever the products state changes
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      <h1>Product Manager</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
      <Total products={products} />
    </div>
  );
}

export default App;
