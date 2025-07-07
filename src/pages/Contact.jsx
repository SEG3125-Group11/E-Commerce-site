import React, { useState } from 'react';
import MapComponent from '../components/MapComponent';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    preferredTime: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: null })); // Clear error on input change
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = 'Please enter a valid email.';
    if (!formData.preferredTime.trim())
      errs.preferredTime = 'Preferred time is required.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', preferredTime: '' });
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <main className="section">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
          Contact & Booking
        </h2>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Left: Contact Form */}
          <div className="flex-1">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-inner h-full"
              noValidate
              aria-live="polite"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className={`w-full border rounded px-4 py-2 focus:ring-2 ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'
                  }`}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-1 text-red-600 text-sm font-medium"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={`w-full border rounded px-4 py-2 focus:ring-2 ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'
                  }`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1 text-red-600 text-sm font-medium"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="preferredTime"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Preferred Time
                </label>
                <input
                  id="preferredTime"
                  type="text"
                  name="preferredTime"
                  className={`w-full border rounded px-4 py-2 focus:ring-2 ${
                    errors.preferredTime
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-primary'
                  }`}
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  aria-describedby={
                    errors.preferredTime ? 'preferredTime-error' : undefined
                  }
                />
                {errors.preferredTime && (
                  <p
                    id="preferredTime-error"
                    className="mt-1 text-red-600 text-sm font-medium"
                  >
                    {errors.preferredTime}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`px-6 py-2 rounded-md font-medium transition duration-300 ${
                  submitted
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-secondary-orange text-white hover:bg-primary'
                }`}
              >
                {submitted ? 'Submitted' : 'Submit'}
              </button>

              {submitted && (
                <p
                  className="text-secondary-green font-semibold mt-3"
                  role="alert"
                >
                  ✅ Thank you! We’ll be in touch shortly.
                </p>
              )}
            </form>
          </div>

          {/* Right: Store Contact Info */}
<div className="flex-1 bg-gray-50 rounded-lg p-6 shadow-md flex flex-col justify-center">
  <h3 className="text-2xl font-semibold text-primary mb-4">Our Stores</h3>
  <ul className="space-y-4 text-textdark text-base">
    <li>
      <strong>Head Office:</strong><br />
      123 Greenway Blvd.<br />
      Ottawa, ON K1A 0B1<br />
      Phone: (613) 555-1234<br />
      Email: info@ecostore.com
    </li>
    <li>
      <strong>Downtown Store:</strong><br />
      456 Market St.<br />
      Ottawa, ON K1A 1C2<br />
      Phone: (613) 555-5678<br />
      Email: downtown@ecostore.com
    </li>
    <li>
      <strong>West End Store:</strong><br />
      789 Eco Rd.<br />
      Ottawa, ON K1A 3D4<br />
      Phone: (613) 555-9012<br />
      Email: westend@ecostore.com
    </li>
  </ul>
</div>


        </div>
      </div>
    </main>
  );
};

export default Contact;
