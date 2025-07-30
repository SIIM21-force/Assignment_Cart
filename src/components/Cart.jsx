import React from 'react';
import { useSelector } from 'react-redux';

const Cart = ({ onClick }) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <button
      onClick={onClick}
      className="bg-white/90 border border-gray-200 rounded-full px-8 py-4 shadow-lg flex items-center gap-4 z-50 backdrop-blur-md hover:scale-105 transition-transform duration-200 cursor-pointer"
      aria-label="Reveal cart"
    >
      <span className="font-semibold text-gray-700 tracking-wide text-lg">Cart: </span>
      <span data-testid="cart-count" className="font-bold text-blue-600 text-4xl">{totalQuantity}</span>
    </button>
  );
};

export default Cart;