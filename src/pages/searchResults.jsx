import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import allItems from '../data/items';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery();
  const searchTerm = query.get('q') || '';
  const navigate = useNavigate();

  // Simple case-insensitive search in product name and description
  const results = allItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Search results for "{searchTerm}"
      </h1>

      {results.length === 0 ? (
        <p className="text-textdark">No products found matching your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map(product => (
            <div
              key={product.id}
              className="border rounded-md shadow-md p-4 flex flex-col cursor-pointer hover:shadow-lg transition"
              onClick={() => goToProduct(product.id)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 max-w-full h-auto rounded mx-auto block"
              />
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-4 truncate">{product.description}</p>
              <p className="font-bold mt-auto">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
