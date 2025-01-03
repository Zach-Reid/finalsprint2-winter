//Author: Zachary Reid, Final Sprint Semester 2

import React from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from './api';

const ProductList = () => {
  const products = getProducts();

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} width="100" />
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;




