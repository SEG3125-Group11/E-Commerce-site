import React, { useState } from 'react';

const ratingOptions = [
  { label: 'Excellent', emoji: '🌟' },
  { label: 'Good', emoji: '👍' },
  { label: 'Average', emoji: '👌' },
  { label: 'Poor', emoji: '👎' },
];

const Review = () => {
  const [ratings, setRatings] = useState({
    productQuality: '',
    shippingExperience: '',
    customerService: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setRatings({ ...ratings, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      ratings.productQuality &&
      ratings.shippingExperience &&
      ratings.customerService
    ) {
      setSubmitted(true);
    } else {
      alert('Please rate all categories before submitting.');
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-lg shadow-lg mt-12">
      <h1 className="text-3xl font-extrabold text-primary mb-4 text-center">
        Thank You for Your Purchase!
      </h1>
      <p className="text-textdark mb-2 text-center">
  Your order has been confirmed. We appreciate your support for sustainable products. 🌱
</p>

{/* Step indicator */}
<div className="flex justify-between text-sm mb-6 text-gray-500 font-medium uppercase">
  <span className="text-primary">1. Cart</span>
  <span className="text-primary">2. Checkout</span>
  <span className="text-primary font-bold">3. Review</span>
</div>


      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Product Quality
            </label>
            <select
              name="productQuality"
              value={ratings.productQuality}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary-orange"
            >
              <option value="">Select a rating</option>
              {ratingOptions.map(({ label, emoji }) => (
                <option key={label} value={label}>
                  {emoji} {label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Shipping Experience
            </label>
            <select
              name="shippingExperience"
              value={ratings.shippingExperience}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary-orange"
            >
              <option value="">Select a rating</option>
              {ratingOptions.map(({ label, emoji }) => (
                <option key={label} value={label}>
                  {emoji} {label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Customer Service
            </label>
            <select
              name="customerService"
              value={ratings.customerService}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary-orange"
            >
              <option value="">Select a rating</option>
              {ratingOptions.map(({ label, emoji }) => (
                <option key={label} value={label}>
                  {emoji} {label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-secondarygreen text-white font-bold py-3 rounded transition"
          >
            Submit Feedback
          </button>
        </form>
      ) : (
        <p className="text-green-700 font-semibold mt-6 text-center">
          Thanks for your feedback! 😊
        </p>
      )}
    </div>
  );
};

export default Review;
