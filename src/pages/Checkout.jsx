import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    card: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Invalid email address';
    if (!form.phone.match(/^\+?[0-9]{7,15}$/)) newErrors.phone = 'Invalid phone number';
    if (!form.address.trim()) newErrors.address = 'Shipping address is required';
    if (form.card.length < 12) newErrors.card = 'Credit card number seems too short';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      clearCart();
      navigate('/review');
    } else {
      setErrors(validationErrors);
    }
  };

  const labelClass =
    'block mb-1 font-semibold text-primary text-lg font-sans'; // all green text, less bottom margin
  const inputClass = (hasError) =>
    `w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-secondarygreen text-base font-sans text-primary ${
      hasError ? 'border-red-500' : 'border-secondarygreen'
    }`;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      <div className="p-8 max-w-md w-full bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-primary mb-8 text-center tracking-wide uppercase border-b-4 border-secondarygreen pb-3">
  CHECKOUT
</h1>

<div className="flex justify-between text-sm mb-6 text-gray-500 font-medium uppercase">
  <span className="text-primary">1. Cart</span>
  <span className="text-primary font-bold">2. Checkout</span>
  <span className="text-gray-400">3. Review</span>
</div>


        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className={inputClass(errors.name)}
            />
            {errors.name && (
              <p className="text-red-500 mt-1 text-sm font-sans">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClass(errors.email)}
            />
            {errors.email && (
              <p className="text-red-500 mt-1 text-sm font-sans">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              className={inputClass(errors.phone)}
            />
            {errors.phone && (
              <p className="text-red-500 mt-1 text-sm font-sans">{errors.phone}</p>
            )}
          </div>
          

          <div>
            <label htmlFor="address" className={labelClass}>
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              required
              value={form.address}
              onChange={handleChange}
              className={inputClass(errors.address)}
            />
            {errors.address && (
              <p className="text-red-500 mt-1 text-sm font-sans">{errors.address}</p>
            )}
          </div>

          <div>
            <label htmlFor="card" className={labelClass}>
              Credit Card Number
            </label>
            <input
              id="card"
              name="card"
              type="text"
              required
              value={form.card}
              onChange={handleChange}
              maxLength={19}
              placeholder="xxxx xxxx xxxx xxxx"
              className={inputClass(errors.card)}
            />
            {errors.card && (
              <p className="text-red-500 mt-1 text-sm font-sans">{errors.card}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-secondarygreen text-white font-bold py-4 rounded transition text-lg font-sans"
          >
            Finish Checkout and Rate Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
