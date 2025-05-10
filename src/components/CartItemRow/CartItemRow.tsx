import React, { useEffect, useState } from "react";
import type { Product } from "../../types/product";
import "./CartItemRow.css";

type Props = {
  product: Product;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  onRemove: () => void;
};

const CartItemRow: React.FC<Props> = ({
  product,
  quantity,
  onQuantityChange,
  onRemove,
}) => {
  const [inputValue, setInputValue] = useState(quantity.toString());

  useEffect(() => {
    // Synchronize input if quantity changes from the outside
    setInputValue(quantity.toString());
  }, [quantity]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value); // Allow the input to be temporarily empty while typing

    const parsed = parseInt(value, 10);
    if (!isNaN(parsed) && parsed > 0) {
      onQuantityChange(parsed);
    }
  };

  const handleBlur = () => {
    const parsed = parseInt(inputValue, 10);
    if (isNaN(parsed) || parsed <= 0) {
      setInputValue(quantity.toString()); // Show previous value
    }
  };

  const pricePerItem = product.price.main * 100 + product.price.fractional;
  const subtotal = (pricePerItem * quantity) / 100;

  return (
    <div className="cart-item-row">
      <span className="cart-item-name">{product.name}</span>
      <div className="cart-item-quantity">
        <input
          type="number"
          value={inputValue}
          min={1}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
      </div>
      <span className="cart-item-price">{subtotal.toFixed(2)} zł</span>
      <button className="remove-btn" onClick={onRemove}>
        🗑
      </button>
    </div>
  );
};

export default CartItemRow;
