import React from 'react';
import { useSelector } from 'react-redux';

const CartModal = ({ open, onClose }) => {
  const items = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.items);

  if (!open) return null;

  const cartArray = Object.entries(items).map(([productId, quantity]) => {
    const product = products.find(p => p.id === Number(productId));
    return {
      id: productId,
      title: product?.title || 'Unknown',
      price: product?.price || 0,
      quantity,
    };
  });

  const totalPrice = cartArray.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-300 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{ backgroundColor: open ? 'white' : 'transparent', color: 'black' }}
    >
      <div
        className="bg-white w-full max-w-sm h-full shadow-2xl p-6 overflow-y-auto flex flex-col transform transition-transform duration-300 ease-out"
        style={{ transform: open ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <button
          className="mb-6 text-gray-500 self-end text-lg hover:text-gray-700 transition-colors"
          onClick={onClose}
          aria-label="Close cart"
        >
          &times; Close
        </button>
        <h2 className="text-3xl font-extrabold mb-8 text-gray-800">Your Cart</h2>
        {cartArray.length === 0 ? (
          <p className="text-gray-500 text-center my-auto text-lg">Your cart is currently empty. Start adding some awesome products!</p>
        ) : (
          <ul className="flex-1 space-y-6">
            {cartArray.map(item => {
              const product = products.find(p => p.id === Number(item.id));
              return (
                <li
                  key={item.id}
                  className="pb-6 border-b border-gray-100 last:border-b-0 last:pb-0 flex items-center gap-4"
                >
                  <div className="flex flex-col flex-1" style={{ minHeight: '3.5rem' }}>
                    <div className="font-semibold text-xl text-gray-800 mb-1">{item.title}</div>
                    <div className="text-md text-gray-500 mb-2">Qty: {item.quantity}</div>
                    <div className="text-blue-600 font-extrabold text-xl">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
        {cartArray.length > 0 && (
          <div className="mt-10 pt-6 border-t border-gray-200 flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-800">Total:</span>
            <span className="text-4xl font-extrabold text-blue-700">${totalPrice.toFixed(2)}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
