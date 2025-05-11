import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../store/store";
import ShoppingSummary from "../components/ShoppingSummary/ShoppingSummary";

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => {
    const unit = item.product.price.main * 100 + item.product.price.fractional;
    return sum + unit * item.quantity;
  }, 0);

  const handleOrderSubmit = () => {
    if (cartItems.length === 0) return;

    localStorage.setItem(
      "lastOrder",
      JSON.stringify(
        cartItems.map((item) => ({
          name: item.product.name,
          quantity: item.quantity,
          subtotal:
            ((item.product.price.main * 100 + item.product.price.fractional) *
              item.quantity) /
            100,
        }))
      )
    );

    window.location.href = "/confirmation.html";
  };

  return (
    <div className="checkout-page">
      <button onClick={() => navigate("/cart")}>← Wróć do koszyka</button>
      <h1>Podsumowanie zamówienia</h1>

      <div className="checkout-page__items">
        <ul>
          {cartItems.map((item) => {
            const unit =
              item.product.price.main * 100 + item.product.price.fractional;
            const subtotal = (unit * item.quantity) / 100;

            return (
              <li key={item.product.id}>
                <strong>{item.product.name}</strong> – {item.quantity} szt. –{" "}
                {subtotal.toFixed(2)} zł
              </li>
            );
          })}
        </ul>

        <ShoppingSummary
          total={total}
          onConfirm={handleOrderSubmit}
          confirmDisabled={cartItems.length === 0}
          confirmLabel="Złóż zamówienie"
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
