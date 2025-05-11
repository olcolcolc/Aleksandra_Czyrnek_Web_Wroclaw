import type { Product } from "../../types";
import "./ProductCard.css";

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">
        {product.price.main},
        {product.price.fractional.toString().padStart(2, "0")} zł
      </p>
      <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
        Dodaj do koszyka
      </button>
    </div>
  );
};

export default ProductCard;
