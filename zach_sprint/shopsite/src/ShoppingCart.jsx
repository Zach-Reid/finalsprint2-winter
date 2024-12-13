//Author: Still Zachary Reid, Still the Final Sprint Semester 2
import React from 'react';
import { useShoppingCart } from './ShoppingCartContext';
import { getProductById } from './api';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => {
          const product = getProductById(item.id); // Retrieve the product details including image
          
          if (!product) return null;

          return (
            <li key={item.id}>
              <img src={product.image} alt={product.name} width="100" />
              <span>{product.name}</span> - ${product.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          );
        })}
      </ul>
      <Link to="/checkout">Checkout</Link>
      <div className='pad'></div>
    </div>
  );
};

export default ShoppingCart;


