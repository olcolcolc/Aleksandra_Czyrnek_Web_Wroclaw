# 🛒 Online Shop Sample
Recruitment task
A simple e-commerce SPA built with React, TypeScript, Redux Toolkit, and Vite. The app allows users to browse products, manage their shopping cart, complete a checkout process, and receive an order confirmation.

## 🚀 Technologies

- **React + Vite** - for fast SPA development
- **TypeScript** - type safety
- **Redux Toolkit** - global state management
- **React Router DOM** - page routing
- **localStorage** - cart/order persistence
- **CSS** - responsive styling (mobile-friendly)

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

## 🔄 Notes
- Project includes an environment-based configuration to handle routing and asset paths correctly. It automatically adjusts the base URL depending on whether it's running locally or in production (GitHub Pages). This ensures smooth navigation and asset loading in both environments.
- Confirmation page is not part of SPA routing – it's a separate full reload HTML page.

## 🔗 Live Demo

Deployed on GitHub Pages:  
https://olcolcolc.github.io/Aleksandra_Czyrnek_Web_Wroclaw/
