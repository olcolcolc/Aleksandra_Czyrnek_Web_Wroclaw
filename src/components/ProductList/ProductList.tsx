import React from "react";
import products from "../../data/products.json";
import ProductCard from "../ProductCard/ProductCard";
import type { Product } from "../../types/product";
import "./ProductList.css";

const ProductList: React.FC = () => {
  const handleAddToCart = (product: Product) => {
    console.log("Product added:", product.name);
  };

  return (
    <div className="product-list">
      <div className="product-list__items">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
