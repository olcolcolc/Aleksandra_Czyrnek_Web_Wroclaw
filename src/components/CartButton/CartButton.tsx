import { FaShoppingCart } from "react-icons/fa";

type Props = {
  itemCount: number;
  onClick: () => void;
};

const CartButton = ({ itemCount, onClick }: Props) => {
  return (
    <button className="cart-button" onClick={onClick} aria-label="cart">
      <FaShoppingCart className="cart-icon" />
      {itemCount > 0 && <span className="cart-button__count">{itemCount}</span>}
    </button>
  );
};

export default CartButton;
