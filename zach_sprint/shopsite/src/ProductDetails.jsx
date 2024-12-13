//Author: Zachary Reid, Final Sprint Semester 2

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from './api';
import { useShoppingCart } from './ShoppingCartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(parseInt(id, 10));
  const { addToCart } = useShoppingCart();

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <button onClick={() => navigate('/')}>Back to Product List</button>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width="300" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <div className='padsmall'></div>
    </div>
  );
};

export default ProductDetails;
