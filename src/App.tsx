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
import CheckoutPage from "./pages/CheckoutPage";

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
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  const getBaseUrl = () => {
    if (import.meta.env.MODE === "development") {
      return "/";
    } else {
      return "/Aleksandra_Czyrnek_Web_Wroclaw";
    }
  };

  return (
    <Router basename={getBaseUrl()}>
      <AppContent />
    </Router>
  );
};

export default App;
