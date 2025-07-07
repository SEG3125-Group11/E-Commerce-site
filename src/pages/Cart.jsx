import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CheckoutStepper from '../components/CheckoutStepper';


const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const navigate = useNavigate();

  const parsePrice = (p) => parseFloat(String(p).replace('$', ''));

  const getItemSubtotal = (item) => (parsePrice(item.price) * item.quantity).toFixed(2);
  const getCartTotal = () =>
    cart.reduce((total, item) => total + parsePrice(item.price) * item.quantity, 0).toFixed(2);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-lg text-textdark">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="border rounded p-4 bg-white shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-textdark">{item.name}</h2>
                  <p className="text-sm text-gray-600">Price: ${item.price}</p>
                  <p className="text-sm text-gray-600">
                    Subtotal: <span className="font-semibold">${getItemSubtotal(item)}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 bg-secondarygreen text-white rounded hover:bg-primary"
                  >
                    −
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 bg-secondarygreen text-white rounded hover:bg-primary"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="text-right pt-6 border-t">
            <p className="text-xl font-semibold text-textdark">
              Total: <span className="text-primary">${getCartTotal()}</span>
            </p>
            <button
              onClick={() => navigate('/checkout')}
              className="mt-4 px-6 py-2 bg-primary text-white rounded hover:bg-secondarygreen"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;