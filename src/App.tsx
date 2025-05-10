import React, { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import CartButton from "./components/CartButton/CartButton";
import type { Product } from "./types/product";
import "./App.css";

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleCartClick = () => {
    alert(`Masz ${cartItems.length} produktów w koszyku.`);
  };

  return (
    <div className="app">
      <header className="header">
        <CartButton itemCount={cartItems.length} onClick={handleCartClick} />
      </header>

      <main>
        <div className="content">
          <ProductList onAddToCart={handleAddToCart} />
        </div>
      </main>
    </div>
  );
};

export default App;
