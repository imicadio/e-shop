import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import listProducts from './slice/listProductSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    listProducts: listProducts
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;