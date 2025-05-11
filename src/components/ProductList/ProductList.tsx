import products from "../../data/products.json";
import ProductCard from "../ProductCard/ProductCard";
import type { Product } from "../../types";
import "./ProductList.css";

type Props = {
  onAddToCart: (product: Product) => void;
};

const ProductList: React.FC<Props> = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      <div className="product-list__items">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
