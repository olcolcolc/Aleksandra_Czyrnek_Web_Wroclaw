import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../../store";
import type { Product } from "../../types";
import "./CartItemRow.css";

type Props = {
  product: Product;
  quantity: number;
};

const CartItemRow: React.FC<Props> = ({ product, quantity }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(quantity.toString());

  useEffect(() => {
    setInputValue(quantity.toString());
  }, [quantity]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const parsed = parseInt(value, 10);
    if (!isNaN(parsed) && parsed > 0) {
      dispatch(updateQuantity({ id: product.id, quantity: parsed }));
    }
  };

  const handleBlur = () => {
    const parsed = parseInt(inputValue, 10);
    if (isNaN(parsed) || parsed <= 0) {
      setInputValue(quantity.toString());
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(product.id));
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
          pattern="\\d+"
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
      </div>
      <span className="cart-item-price">{subtotal.toFixed(2)} zł</span>
      <button className="remove-btn" onClick={handleRemove}>
        🗑
      </button>
    </div>
  );
};

export default CartItemRow;
