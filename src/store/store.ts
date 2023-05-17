import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import { productsReducer } from "./reducers/products";
import { categoriesReducer } from "./reducers/categories";
import { cartReducer } from "./reducers/cart";
import { servicesReducer } from "./reducers/services";


const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  services: servicesReducer,
});

export const store = configureStore({ 
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
})