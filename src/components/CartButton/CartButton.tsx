import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartButton.css";

type Props = {
  itemCount: number;
  onClick: () => void;
};

const CartButton: React.FC<Props> = ({ itemCount, onClick }) => {
  return (
    <button className="cart-button" onClick={onClick} aria-label="Koszyk">
      <FaShoppingCart className="cart-icon" />
      {itemCount > 0 && <span className="cart-button__count">{itemCount}</span>}
    </button>
  );
};

export default CartButton;
