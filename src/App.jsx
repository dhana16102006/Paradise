
import React, { useReducer, useState } from "react";
import "./App.css";

import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

import {
  cartReducer,
  initialCartState,
} from "./CartSlice";

function App() {
  const [page, setPage] = useState("home");

  const [cart, dispatch] = useReducer(
    cartReducer,
    initialCartState
  );

  function addToCart(plant) {
    dispatch({
      type: "addItem",
      payload: plant,
    });
  }

  function removeFromCart(id) {
    dispatch({
      type: "removeItem",
      payload: id,
    });
  }

  function changeQuantity(id, quantity) {
    dispatch({
      type: "updateQuantity",
      payload: { id, quantity },
    });
  }

  const cartCount = cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <header className="navbar">
        <h2
          onClick={() => setPage("home")}
          style={{ cursor: "pointer" }}
        >
          🌿 Paradise Nursery
        </h2>

        <div className="nav-buttons">
          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("about")}>
            About Us
          </button>

          <button onClick={() => setPage("shop")}>
            Plants
          </button>

          <button onClick={() => setPage("cart")}>
            🛒 Cart ({cartCount})
          </button>
        </div>
      </header>

      {page === "home" && (
        <main className="landing-page">
          <div className="landing-content">
            <p>WELCOME TO OUR LITTLE GREEN WORLD</p>

            <h1>Paradise Nursery</h1>

            <p>
              Bring nature home with beautiful plants
              for every corner of your life.
            </p>

            <button
              className="get-started-btn"
              onClick={() => setPage("shop")}
            >
              Get Started
            </button>
          </div>
        </main>
      )}

      {page === "about" && (
        <AboutUs
          onBack={() => setPage("shop")}
        />
      )}

      {page === "shop" && (
        <ProductList
          cartItems={cart.items}
          onAddToCart={addToCart}
          onOpenCart={() => setPage("cart")}
        />
      )}

      {page === "cart" && (
        <CartItem
          items={cart.items}
          onUpdateQuantity={changeQuantity}
          onRemove={removeFromCart}
          onContinueShopping={() => setPage("shop")}
        />
      )}

      <footer className="site-footer">
        <p>Paradise Nursery © 2026</p>
        <p>Bring nature home. Grow happiness.</p>
      </footer>
    </div>
  );
}

export default App;
