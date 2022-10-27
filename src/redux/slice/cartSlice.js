import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const { product, amount } = action.payload      

      const productIndex = state.cartItems.findIndex((item) => item.id === product.id)

      console.log("product index: ", productIndex)

      if(productIndex >= 0) {
        state.cartItems[productIndex].cartQuantity += amount;
        toast.info(`${product.title} product increased by ${amount}`, {position: "top-left"})
      }
      else {
        const tmpProduct = {...product, cartQuantity: amount }        
        state.cartItems.push(tmpProduct);
        state.cartTotalQuantity += 1;
        toast.success(`${product.title} product added to cart`, {position: "top-left"})
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { ADD_TO_CART } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalQuantity = (state) => state.cart.cartTotalQuantity;
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount;

export default cartSlice.reducer;
