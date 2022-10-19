import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

const listProductSlice = createSlice({
  name: "listProducts",
  initialState,
  reducers: {
    STORE_PRODUCTS: (state, action) => {
        console.log(action.payload)
    }
  }
});

export const { STORE_PRODUCTS } = listProductSlice.actions

export const fetchProducts = (state) => state.listProducts.products;

export default listProductSlice.reducer