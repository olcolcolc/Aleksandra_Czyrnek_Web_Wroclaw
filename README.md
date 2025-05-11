# 🛒 Online Shop - Aleksandra Czyrnek
Recruitment task
A simple e-commerce SPA built with React, TypeScript, Redux Toolkit, and Vite. The app allows users to browse products, manage their shopping cart, complete a checkout process, and receive an order confirmation.

---

## 🚀 Technologies

- **React + Vite** - for fast SPA development
- **TypeScript** - type safety
- **Redux Toolkit** - global state management
- **React Router DOM** - page routing
- **localStorage** - cart/order persistence
- **CSS** - responsive styling (mobile-friendly)

---

## 📂 Project Structure

```
/public
  confirmation.html   # final standalone confirmation page
  confirmation.css
  confirmation.js
/src
  /components
    ProductCard, ProductList, CartItemRow, CartButton, ShoppingSummary
  /pages
    LandingPage, CartPage, CheckoutPage
  /store
    store.ts, cartSlice.ts
  /types
    product.ts, cartItem.ts
```

---

## ✨ Features

### 🛍 Product List (LandingPage)
- Displays static list of products from JSON
- Each product has name, price, and "Add to cart" button

### 🛒 Cart Page
- Displays grouped cart items with quantity controls
- Supports removing items and quantity editing
- Displays subtotal and total
- Navigate to checkout

### ✅ Checkout Page
- Displays a summary of current cart
- Stores the final order in `localStorage`
- Redirects to `confirmation.html`

### 📦 Confirmation Page
- Loads order from `localStorage`
- Displays order items and total
- Handles empty state
- Link to return to shop

---

## 🔧 Getting Started

```bash
npm install
npm run dev         # run local server
```

### Manual deploy to GitHub Pages:
- `vite.config.ts` base is set for GitHub Pages
- Copy `dist/` to root of `gh-pages` branch
- Push to GitHub

