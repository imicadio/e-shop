import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
  brands: [],
  selectedBrands: [],
  categories: [],
  selectedCategories: [],
  minPrice: 0,
  maxPrice: 0,
  priceMinMax: 0,
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
      state.priceMinMax = [action.payload.minPrice, action.payload.maxPrice];
    },

    FILTER_BY_SEARCH(state, action) {
      const { products, search } = action.payload;

      let tmpProducts = null;

      if (state.selectedBrands.length > 0) {
        tmpProducts = products.filter(
          (product) =>
            product.title.toUpperCase().includes(search.toUpperCase()) &&
            state.selectedBrands.includes(product.brand.toUpperCase()) &&
            state.priceMinMax[0] <= product.price &&
            product.price <= state.priceMinMax[1]
        );
      } else {
        tmpProducts = products.filter(
          (product) =>
            product.title.toUpperCase().includes(search.toUpperCase()) &&
            state.priceMinMax[0] <= product.price &&
            product.price <= state.priceMinMax[1]
        );
      }

      state.filteredProducts = tmpProducts;
    },

    FILTER_BY_CATEGORIES: (state, action) => {
      const { products, filters, price } = action.payload;

      console.log(price)

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
            const productPrice = product.price;
            filters[key].includes(title) &&
            price[0] <= productPrice &&
            productPrice <= price[1]
              ? isArrayValid.push(true)
              : isArrayValid.push(false);
          }
          return isArrayValid.every((element) => element === true);
        });
        state.filteredProducts = tmpProducts;
      } else {
        state.filteredProducts = products.filter(
          (product) => price[0] <= product.price && product.price <= price[1]
        );
      }

      state.selectedBrands = filters.brand;
      state.selectedCategories = filters.category;
      state.priceMinMax = price;
    },
  },
});

export const { FILTER_BY_SEARCH, FILTER_BY_CATEGORIES, FILTERS_STORE } =
  filterSlice.actions;

export const selectFilteredProducts = (state) => state.filter.filteredProducts;
export const fetchBrands = (state) => state.filter.brands;
export const fetchCategories = (state) => state.filter.categories;
export const fetchMinPrice = (state) => state.filter.minPrice;
export const fetchMaxPrice = (state) => state.filter.maxPrice;

export default filterSlice.reducer;
