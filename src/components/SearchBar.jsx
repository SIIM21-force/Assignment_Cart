import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../redux/productSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.products.searchTerm);

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search products…"
      value={searchTerm}
      onChange={handleChange}
      className="border border-gray-300 rounded-full px-8 py-5 w-full max-w-4xl mb-10 text-2xl bg-white shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 outline-none mx-auto block"
      aria-label="Search products"
    />
  );
};

export default SearchBar;