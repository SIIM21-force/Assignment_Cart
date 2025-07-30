import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product.id));
    setJustAdded(true);
    setTimeout(() => setJustAdded(300));
  };

  const isInverse = isHovered && !justAdded;
  const baseClasses = 'flex flex-row bg-white rounded-2xl shadow-md border transition-all duration-200 my-6 mx-auto max-w-3xl w-full';
  const highlightBox = 'border-blue-500 shadow-lg';
  const normalBox = 'border-gray-200 shadow-md';

  return (
    <div
      className={`${baseClasses} ${isHovered ? highlightBox : normalBox} ${isInverse ? 'bg-blue-600 text-white' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="flex-shrink-0 p-4 w-48 flex items-center justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-40 w-32 object-contain rounded-lg bg-gray-50"
        />
      </div>

      {/* Product Details Container */}
      <div className="flex flex-col flex-1 p-4 min-w-0">
        <h3 className={`font-bold text-xl mb-2 ${isInverse ? 'text-white' : 'text-gray-900'}`}>
          {product.title}
        </h3>
        <p className={`text-sm mb-2 line-clamp-2 ${isInverse ? 'text-blue-100' : 'text-gray-600'}`}>
          {product.description}
        </p>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl font-bold text-green-700">{`$${product.price}`}</span>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-4">
          <button
            onClick={handleAddToCart}
            className={`py-2 px-6 rounded-full font-semibold text-base shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2
              ${isInverse
                ? 'bg-white text-blue-600 hover:bg-blue-100 hover:scale-105'
                : 'bg-yellow-400 text-black hover:bg-yellow-500 hover:scale-105'
              }`}
            aria-label={`Add ${product.title} to cart`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;