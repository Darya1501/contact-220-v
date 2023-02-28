import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { TCartActions } from "../store/actions/cart";
import { TProductsActions } from "../store/actions/products";
import { store } from "../store/store";

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
  TProductsActions | TCartActions;

export type AppThunk<TReturn = void> = ThunkAction<TReturn, RootState, never, TApplicationActions>;
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export type TProductsCharacteristic = {
  [name: string]: string
}

export type TProduct = {
  id: string,
  title: string,
  price: number,
  category: string,
  image: string,
  characteristics: Array<TProductsCharacteristic>
}

export type TCartProduct = TProduct & { count: number }