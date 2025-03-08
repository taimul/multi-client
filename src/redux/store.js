import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./feature/auth/authSlice";
import cartSlice from "./feature/cart/cartSlice";
// import themeSlice from "./feature/theme/themeSlice";
import toastSlice from "./feature/toast/toastSlice";
import { apiSlice } from "./rootApi/apiSlice";

const storedCart = localStorage.getItem("gift-cart");
const initialCartState = storedCart ? JSON.parse(storedCart) : { items: [] };
// console.log(initialCartState);

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    // theme: themeSlice,
    toast: toastSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
  preloadedState: {
    cart: initialCartState,
  },
});

store.subscribe(() => {
  const state = store.getState();
  // console.log(state);
  localStorage.setItem("gift-cart", JSON.stringify(state.cart));
  //   localStorage.setItem("theme", state.theme);
  // localStorage.setItem("wishList", JSON.stringify(state.wishList.wishList));
});

export default store;
