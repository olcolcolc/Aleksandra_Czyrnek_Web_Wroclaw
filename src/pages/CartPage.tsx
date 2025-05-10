import React from "react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../types/product";
import CartItemRow from "../components/CartItemRow/CartItemRow";

type Props = {
  cartItems: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
};

type GroupedProduct = {
  product: Product;
  quantity: number;
};

const CartPage: React.FC<Props> = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  // Grupowanie produktów
  const grouped: GroupedProduct[] = [];
  cartItems.forEach((item) => {
    const found = grouped.find((g) => g.product.id === item.id);
    if (found) {
      found.quantity += 1;
    } else {
      grouped.push({ product: item, quantity: 1 });
    }
  });

  const handleQuantityChange = (productId: number, newQty: number) => {
    if (newQty < 1) return;

    const newCart: Product[] = [];
    grouped.forEach(({ product }) => {
      if (product.id === productId) {
        for (let i = 0; i < newQty; i++) newCart.push(product);
      } else {
        const same = cartItems.filter((p) => p.id === product.id);
        newCart.push(...same);
      }
    });
    setCartItems(newCart);
  };

  const handleRemove = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };
  const total = grouped.reduce((sum, g) => {
    const unit = g.product.price.main * 100 + g.product.price.fractional;
    return sum + unit * g.quantity;
  }, 0);

  return (
    <div className="cart-page">
      <button onClick={() => navigate("/")}>← Powrót do sklepu</button>

      <h1>Twój koszyk</h1>

      {grouped.length === 0 ? (
        <p>Koszyk jest pusty.</p>
      ) : (
        <div className="cart-list">
          {grouped.map(({ product, quantity }) => (
            <CartItemRow
              key={product.id}
              product={product}
              quantity={quantity}
              onQuantityChange={(qty) => handleQuantityChange(product.id, qty)}
              onRemove={() => handleRemove(product.id)}
            />
          ))}
        </div>
      )}

      <p>Łącznie: {(total / 100).toFixed(2)} zł</p>
      <button onClick={() => navigate("/checkout")}>← Podsumuj</button>
    </div>
  );
};

export default CartPage;
