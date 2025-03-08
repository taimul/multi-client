import { createSlice } from "@reduxjs/toolkit";

// Retrieve initial state from localStorage or set default
const storedCart = localStorage.getItem("gift-cart");
const initialState = storedCart ? JSON.parse(storedCart) : { items: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {
        variantId,
        productId,
        regionId,
        price,
        name,
        imageUrl,
        quantity,
        regionName,
        denomination,
        categorySku,
        subCategorySku,
        productSku,
      } = action.payload;

      const existingItem = state.items.find(
        (item) => item.variantId === variantId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          variantId,
          productId,
          regionId,
          price,
          name,
          imageUrl,
          quantity,
          regionName,
          denomination,
          categorySku,
          subCategorySku,
          productSku,
        });
      }

      localStorage.setItem("gift-cart", JSON.stringify(state));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.variantId !== action.payload.variantId
      );

      // Save to localStorage
      localStorage.setItem("gift-cart", JSON.stringify(state));
    },

    updateCartItem: (state, action) => {
      const { variantId, quantity } = action.payload;
      const item = state.items.find((item) => item.variantId === variantId);
      if (item) {
        item.quantity = quantity;
      }
      // Save to localStorage
      localStorage.setItem("gift-cart", JSON.stringify(state));
    },

    updateCart: (state, action) => {
      // Replace the entire cart with validated items
      state.items = action.payload;

      // Save updated cart to localStorage
      localStorage.setItem("gift-cart", JSON.stringify(state));
    },

    removeOutOfStockItems: (state, action) => {
      const outOfStockIds = action.payload; // Array of variantIds to remove
      state.items = state.items.filter(
        (item) => !outOfStockIds.includes(item.variantId)
      );

      // Save updated cart to localStorage
      localStorage.setItem("gift-cart", JSON.stringify(state));
    },

    clearCart: (state) => {
      state.items = [];

      // Clear from localStorage
      localStorage.removeItem("gift-cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartItem,
  updateCart,
  removeOutOfStockItems,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
