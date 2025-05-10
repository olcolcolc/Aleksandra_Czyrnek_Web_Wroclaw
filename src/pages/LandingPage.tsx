import React from "react";
import ProductList from "../components/ProductList/ProductList";
import type { Product } from "../types/product";

type Props = {
  onAddToCart: (product: Product) => void;
};

const LandingPage: React.FC<Props> = ({ onAddToCart }) => {
  return (
    <div className="landing-page">
      <ProductList onAddToCart={onAddToCart} />
    </div>
  );
};

export default LandingPage;
