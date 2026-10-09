
import React from "react";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 299,
    image: "/plants/snake-plant.jpg",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Flowering Plants",
    price: 399,
    image: "/plants/peace-lily.jpg",
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Succulents",
    price: 199,
    image: "/plants/aloe-vera.jpg",
  },
  {
    id: 4,
    name: "Monstera",
    category: "Indoor Plants",
    price: 499,
    image: "/plants/monstera.jpg",
  },
  {
    id: 5,
    name: "Money Plant",
    category: "Indoor Plants",
    price: 249,
    image: "/plants/money-plant.jpg",
  },
  {
    id: 6,
    name: "ZZ Plant",
    category: "Low Maintenance",
    price: 349,
    image: "/plants/zz-plant.jpg",
  },
];

export default function ProductList({
  cartItems,
  onAddToCart,
  onOpenCart,
}) {
  return (
    <main style={{ padding: "30px" }}>
      <h1>Our Beautiful Plants</h1>
      <p>Find your perfect green companion.</p>

      <button onClick={onOpenCart}>
        View Cart ({cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        )})
      </button>

      <div className="product-grid">
        {plants.map((plant) => (
          <article className="product-card" key={plant.id}>
            <img
              src={plant.image}
              alt={plant.name}
              className="product-image"
            />

            <h2>{plant.name}</h2>
            <p>{plant.category}</p>
            <p>₹{plant.price}</p>

            <button onClick={() => onAddToCart(plant)}>
              Add to Cart
            </button>
          </article>
        ))}
      </div>
    </main>
  );
}
