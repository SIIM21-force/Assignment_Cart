import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const searchTerm = useSelector((state) => state.products.searchTerm);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Increased horizontal padding and max-width slightly for more breathing room
    <div className="pt-32 p-8 md:p-12 max-w-screen-xl mx-auto"> 
      <SearchBar />
      {/* Enhanced loading and error message styles */}
      {status === 'loading' && <p className="text-gray-500 text-center text-lg my-12">Loading amazing products...</p>}
      {status === 'failed' && <p className="text-red-600 text-center text-lg my-12">Error: {error}. Please try again later.</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;