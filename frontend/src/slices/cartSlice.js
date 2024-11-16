import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";
const cart = localStorage.getItem("cart");
const initialState = cart ? JSON.parse(cart) : { cartItems: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === item._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      updateCart(state);
    },
  },
});

export const { addToCart } = cartSlice.actions;
