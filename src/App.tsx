import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "./store/store";
import CartButton from "./components/CartButton/CartButton";
import LandingPage from "./pages/LandingPage";
import CartPage from "./pages/CartPage";
import "./App.css";

const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className="app">
      <header className="header">
        <CartButton
          itemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          onClick={() => navigate("/cart")}
        />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<CartPage />} />
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
