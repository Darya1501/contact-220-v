import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import { productsReducer } from "./reducers/products";


const rootReducer = combineReducers({
  products: productsReducer
});

export const store = configureStore({ 
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
})