import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import CartModal from './components/CartModal';
import ProductListPage from './pages/ProductListPage';

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <Navbar />
      <div className="flex items-center gap-4 px-8 py-4 bg-white shadow-md sticky top-0 z-50">
        <Cart onClick={() => setCartOpen(true)} />
      </div>
      <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
      <ProductListPage />
    </div>
  );
};

export default App;
