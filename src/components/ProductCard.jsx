import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${item.id}`)}
      className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 w-full max-w-xs mx-auto"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary mb-1">{item.name}</h3>
        <p className="text-sm text-secondarygreen font-medium">{item.price}</p>
      </div>
    </div>
  );
};


export default ProductCard;
