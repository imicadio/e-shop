import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
  brands: [],
  selectedBrands: [],
  categories: [],
  selectedCategories: [],
  minPrice: 0,
  maxPrice: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTERS_STORE: (state, action) => {
      state.brands = action.payload.brands;
      state.categories = action.payload.categories;
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },

    FILTER_BY_SEARCH(state, action) {
      const { products, search } = action.payload;

      let tmpProducts = null;

      console.log('selected brands: ', state.selectedBrands.length);

      if (state.selectedBrands.length > 0) {
        tmpProducts = products.filter(
          (product) =>
            product.title.toUpperCase().includes(search.toUpperCase()) &&
            state.selectedBrands.includes(product.brand.toUpperCase())
        );
      } else {
        tmpProducts = products.filter((product) =>
          product.title.toUpperCase().includes(search.toUpperCase())
        );
      }

      state.filteredProducts = tmpProducts;
    },

    FILTER_BY_BRANDS: (state, action) => {
      const { products, filters } = action.payload;

      let tmpProducts = [];
      
      const hasFilter = Object.values(filters).some((x) => x.length > 0);
      if (hasFilter) {
        // get filters keys
        const keys = Object.keys(filters).filter((x) => filters[x].length);  
        tmpProducts = products.filter((product) => {
          // helper array fot valid element 
          const isArrayValid = [];
          for (const key of keys) {
            const title = product[key].toUpperCase();
            filters[key].includes(title) ? isArrayValid.push(true) : isArrayValid.push(false);
          }
          return isArrayValid.every(element => element === true);
        });
        state.filteredProducts = tmpProducts;
      } else {
        state.filteredProducts = products;
      }
      
      state.selectedBrands = filters.brand;
      state.selectedCategories = filters.category;
    },
  },
});

export const { FILTER_BY_SEARCH, FILTER_BY_BRANDS, FILTERS_STORE } =
  filterSlice.actions;

export const selectFilteredProducts = (state) => state.filter.filteredProducts;
export const fetchBrands = (state) => state.filter.brands;
export const fetchCategories = (state) => state.filter.categories;
export const fetchMinPrice = (state) => state.filter.minPrice;
export const fetchMaxPrice = (state) => state.filter.maxPrice;

export default filterSlice.reducer;
