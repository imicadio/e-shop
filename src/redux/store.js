import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import listProductsReducer from "./slice/listProductSlice";
import filterReducer from "./slice/filterSlice";
import cartReducer from './slice/cartSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  listProducts: listProductsReducer,
  filter: filterReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
