import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import CartButton from "./components/CartButton/CartButton";
import LandingPage from "./pages/LandingPage";
import CartPage from "./pages/CartPage";
import type { Product } from "./types/product";
import "./App.css";

const AppContent: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const navigate = useNavigate();

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <div className="app">
      <header className="header">
        <CartButton
          itemCount={cartItems.length}
          onClick={() => navigate("/cart")}
        />
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={<LandingPage onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage cartItems={cartItems} setCartItems={setCartItems} />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
