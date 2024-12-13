//Author may or may not be Zachary Reid, doing the Second Semester Final Sprint

import React, { useState } from 'react';
import { useShoppingCart } from './ShoppingCartContext';

const TAX_RATE = 0.15; // 15% tax rate

const Checkout = () => {
  const { cartItems } = useShoppingCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    creditCardNumber: '',
    cvv: '',
    expMonth: '',
    expYear: '',
    shippingAddress: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate subtotal, tax, and total
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Inputs for the form
  const validateForm = () => {
    const newErrors = {};
    const { name, phone, creditCardNumber, cvv, expMonth, expYear, shippingAddress } = formData;

    if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = 'Name can only contain letters and spaces.';
    }
    if (!/^[\d\s\-+()]+$/.test(phone)) {
      newErrors.phone = 'Phone number can only contain numbers and symbols.';
    }
    if (!/^\d{16}$/.test(creditCardNumber)) {
      newErrors.creditCardNumber = 'Credit card number must be 16 digits.';
    }
    if (!/^\d{3}$/.test(cvv)) {
      newErrors.cvv = 'CVV must be 3 digits.';
    }
    if (!/^(0[1-9]|1[0-2])$/.test(expMonth) || !/^\d{4}$/.test(expYear)) {
      newErrors.expiration = 'Expiration date must be a valid month (MM) and year (YYYY).';
    }
    if (!shippingAddress) {
      newErrors.shippingAddress = 'Shipping address is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Purchase Completed!')
      setIsSubmitted(true);

    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </label>
        </div>

        <div>
          <label>
            Phone Number:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="123-456-7890"
            />
            {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
          </label>
        </div>

        <div>
          <label>
            Credit Card Number:
            <input
              type="text"
              name="creditCardNumber"
              value={formData.creditCardNumber}
              onChange={handleChange}
              placeholder="1234567812345678"
            />
            {errors.creditCardNumber && <p style={{ color: 'red' }}>{errors.creditCardNumber}</p>}
          </label>
        </div>

        <div>
          <label>
            CVV:
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
            />
            {errors.cvv && <p style={{ color: 'red' }}>{errors.cvv}</p>}
          </label>
        </div>

        <div>
          <label>
            Expiration Date:
            <input
              type="text"
              name="expMonth"
              value={formData.expMonth}
              onChange={handleChange}
              placeholder="MM"
            />
            <input
              type="text"
              name="expYear"
              value={formData.expYear}
              onChange={handleChange}
              placeholder="YYYY"
            />
            {errors.expiration && <p style={{ color: 'red' }}>{errors.expiration}</p>}
          </label>
        </div>

        <div>
          <label>
            Shipping Address:
            <textarea
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleChange}
              placeholder="123 Main St, Anytown, Canada"
            />
            {errors.shippingAddress && <p style={{ color: 'red' }}>{errors.shippingAddress}</p>}
          </label>
        </div>

        <div>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Tax (15%): ${tax.toFixed(2)}</p>
          <p>Total: ${total.toFixed(2)}</p>
        </div>

        <button type="submit">
          {isSubmitted ? 'Thanks for shopping!' : 'Complete Purchase'}
        </button>
      </form>
      <div className='pad'></div>
    </div>
  );
};

export default Checkout;
