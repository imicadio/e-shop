import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  brands: [],
  categories: [],
};

const listProductSlice = createSlice({
  name: "listProducts",
  initialState,
  reducers: {
    STORE_PRODUCTS: (state, action) => {
      state.products = action.payload.products;
      state.brands = action.payload.brands;
      state.categories = action.payload.categories;
    },

    FILTER_SET_BRANDS: (state, action) => {
      state.products = action.payload.brands;
    },

    FILTER_SET_CATEGORIES: (state, action) => {
      state.products = action.payload.categories;
    },
  },
});

export const { STORE_PRODUCTS, FILTER_SET_BRANDS, FILTER_SET_CATEGORIES } =
  listProductSlice.actions;

export const fetchProducts = (state) => state.listProducts.products;
export const selectBrands = (state) => state.listProducts.brands;
export const selectCategories = (state) => state.listProducts.categories;

export default listProductSlice.reducer;
