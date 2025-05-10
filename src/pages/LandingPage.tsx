import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import ProductList from "../components/ProductList/ProductList";
import type { Product } from "../types";

const LandingPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="landing-page">
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
};

export default LandingPage;
