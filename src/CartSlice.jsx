
export const initialCartState = {
  items: [],
};

export function addItem(items, product) {
  const existing = items.find(
    (item) => item.id === product.id
  );

  if (existing) {
    return items.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...items, { ...product, quantity: 1 }];
}

export function removeItem(items, productId) {
  return items.filter((item) => item.id !== productId);
}

export function updateQuantity(items, productId, quantity) {
  if (quantity <= 0) {
    return removeItem(items, productId);
  }

  return items.map((item) =>
    item.id === productId
      ? { ...item, quantity }
      : item
  );
}

export function cartReducer(state, action) {
  switch (action.type) {
    case "addItem":
      return {
        ...state,
        items: addItem(state.items, action.payload),
      };

    case "removeItem":
      return {
        ...state,
        items: removeItem(state.items, action.payload),
      };

    case "updateQuantity":
      return {
        ...state,
        items: updateQuantity(
          state.items,
          action.payload.id,
          action.payload.quantity
        ),
      };

    default:
      return state;
  }
}
