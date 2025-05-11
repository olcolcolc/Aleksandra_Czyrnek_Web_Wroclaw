import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import CartItemRow from "../components/CartItemRow/CartItemRow";
import ShoppingSummary from "../components/ShoppingSummary/ShoppingSummary";

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const total = cartItems.reduce((sum, item) => {
    const unit = item.product.price.main * 100 + item.product.price.fractional;
    return sum + unit * item.quantity;
  }, 0);

  return (
    <div className="cart-page">
      <button onClick={() => navigate("/")}>← Powrót do sklepu</button>
      <h1>Twój koszyk</h1>

      {cartItems.length === 0 ? (
        <p>Koszyk jest pusty.</p>
      ) : (
        <div className="cart-page__list">
          {cartItems.map((item) => (
            <CartItemRow
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
        </div>
      )}

      <ShoppingSummary
        total={total}
        onConfirm={() => navigate("/checkout")}
        confirmLabel="Podsumuj"
        confirmDisabled={cartItems.length === 0}
      />
    </div>
  );
};

export default CartPage;
