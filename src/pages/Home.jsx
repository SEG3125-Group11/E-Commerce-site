import React from 'react';
import recommendedItems from '../data/recommendedItems';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

const categories = [
  "Bedding",
  "Kitchen",
  "Sports",
  "Clothing",
  "Crafts",
  "Toys",
  "More",
];

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    const path = `/category/${category.toLowerCase().replace(/\s|\//g, '-')}`;
    navigate(path);
  };

  return (
    <div className="bg-bglight">
      {/* Hero / Intro */}
      <section className="toothpaste-pattern py-16 px-8 rounded-md shadow-md mb-12 max-w-3xl mx-auto text-left">
        <h1 className="text-4xl font-extrabold text-primary mb-8 leading-tight">
          Welcome to <span className="font-black">ECOnomy!</span>
        </h1>
        <p className="text-lg font-semibold text-textdark mb-6 max-w-xl leading-relaxed">
          Discover thoughtfully curated eco-friendly products designed to fit your lifestyle while caring for the planet.
        </p>
        <p className="text-lg font-semibold text-textdark mb-6 max-w-xl leading-relaxed">
          From sustainable home essentials to stylish everyday items, find quality selections that help you live smarter and tread lighter.
        </p>
        <p className="text-lg font-semibold text-textdark max-w-xl leading-relaxed">
          Join a community making conscious choices without compromising on style or affordability.
        </p>
      </section>

      {/* Recommended Section */}
      <section className="bg-sectiongreen py-10 px-6 mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-6">For You</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar p-2">
          {recommendedItems.map((item) => (
            <div key={item.id} className="min-w-[200px] max-w-[240px]">
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Category Circles */}
      <section className="bg-white toothpaste-pattern py-10 px-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-primary mb-6">Shop by Category</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="category-circle"
            >
              {category}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
