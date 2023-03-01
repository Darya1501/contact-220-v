import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import { productsReducer } from "./reducers/products";
import { cartReducer } from "./reducers/cart";
import { servicesReducer } from "./reducers/services";


const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  services: servicesReducer
});

export const store = configureStore({ 
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
})