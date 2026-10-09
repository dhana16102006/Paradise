
import React from "react";

export default function CartItem({
  items,
  onUpdateQuantity,
  onRemove,
  onContinueShopping,
}) {
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main style={{ padding: "30px" }}>
      <h1>Your Shopping Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty. Add some plants!</p>
      ) : (
        items.map((item) => (
          <div className="cart-row" key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Item total: ₹{item.price * item.quantity}</p>
            </div>

            <button
              disabled={item.quantity <= 1}
              onClick={() =>
                onUpdateQuantity(item.id, item.quantity - 1)
              }
            >
              -
            </button>

            <button
              onClick={() =>
                onUpdateQuantity(item.id, item.quantity + 1)
              }
            >
              +
            </button>

            <button onClick={() => onRemove(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}

      <h2>Subtotal: ₹{subtotal}</h2>

      <button onClick={onContinueShopping}>
        Continue Shopping
      </button>
    </main>
  );
}
