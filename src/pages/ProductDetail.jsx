import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/items';
import recommendedItems from '../data/recommendedItems';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();

  // Flatten the products object to an array
  const allProducts = Object.values(products).flat();

  // Combine allProducts and recommendedItems into one array
  // Use a Map to avoid duplicates (if any)
  const combinedMap = new Map();

  allProducts.forEach(item => combinedMap.set(String(item.id), item));
  recommendedItems.forEach(item => combinedMap.set(String(item.id), item));

  const combinedProducts = Array.from(combinedMap.values());

  // Find product by id string (url param is a string)
  const product = combinedProducts.find(item => String(item.id) === id);

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="p-6 max-w-3xl mx-auto pt-6">
        <p className="text-textdark text-lg">Sorry, product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Product Image & Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain h-auto max-w-full rounded shadow mx-auto block"
        />

        <div>
          <h1 className="text-3xl font-bold text-primary mb-2">{product.name}</h1>
          <p className="text-xl text-secondarygreen font-semibold mb-4">
            ${product.price.toFixed ? product.price.toFixed(2) : product.price}
          </p>
          <p className="text-textdark mb-6">{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <label htmlFor="quantity" className="text-sm font-medium text-gray-700">Qty:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="w-20 px-3 py-1 border rounded"
            />
          </div>

          <button
            className="bg-primary text-white px-6 py-2 rounded hover:bg-secondarygreen transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Placeholder Specs Section */}
      <div className="bg-gray-50 p-6 rounded shadow mb-12">
        <h2 className="text-xl font-semibold mb-4 text-primary">Product Details</h2>
        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
          <li>Material: {product.material || 'Organic Cotton'}</li>
          <li>Dimensions: {product.dimensions || 'Standard size'}</li>
          <li>Care Instructions: {product.careInstructions || 'Machine washable'}</li>
          <li>Eco-Certified: Yes</li>
        </ul>
      </div>

      {/* Reviews Section */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-primary">Customer Reviews</h2>
        <p className="italic text-gray-500">No reviews yet. Be the first to write one!</p>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-xl font-semibold text-primary mb-4">You May Also Like</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {recommendedItems.slice(0, 4).map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
