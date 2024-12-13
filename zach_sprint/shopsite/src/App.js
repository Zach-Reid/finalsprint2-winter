//Zachary Reid's submission for the Final Sprint :)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';
import { ShoppingCartProvider } from './ShoppingCartContext';
import { Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <Link to="/" className='Textlink'>=Home=</Link>
      <Link to="/cart" className='Textlink'>=Cart=</Link>
      <Link to="/" className='Textlogo'>Rainforest</Link>
    </nav>
  );
};


function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
        <div className='bottom'>
        <p className='bottomtext'>© 2024 Rainforest Online Market. All rights reserved.</p>
        </div>
      </Router>
    </ShoppingCartProvider>
  );
}



export default App;


