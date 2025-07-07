import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <section className="section about-section">
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-primary">About ECOnomy</h2>

        <p className="mb-4 text-lg text-gray-700">
          At <strong>ECOnomy</strong>, we believe that eco-friendly choices shouldn't mean compromising on quality or affordability.
        </p>

        <p className="mb-4 text-lg text-gray-700">
          We carefully select high-quality sustainable products that support both your lifestyle and the planet. Our mission is to make green living accessible and smart for everyone.
        </p>

        <p className="mb-4 text-lg text-gray-700">
          By prioritizing sustainable sourcing, reducing waste, and fostering awareness, we’re proud to be part of a community that values environmental responsibility without sacrificing economy.
        </p>

        <p className="text-lg text-gray-700 mb-8">
          Join us on this journey to shop smarter and greener — because every small choice adds up to big impact.
        </p>

        <NavLink
          to="/Home"
          className="inline-block bg-secondary-orange text-white px-6 py-2 rounded hover:bg-primary transition"
        >
          ← Back to Home
        </NavLink>
      </div>
    </section>
  );
};

export default About;
