import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { TProductsActions } from "../store/actions/products";
import { store } from "../store/store";

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
  TProductsActions;

export type AppThunk<TReturn = void> = ThunkAction<TReturn, RootState, never, TApplicationActions>;
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export type TProduct = {
  id: string,
  title: string,
  price: number,
  category: string,
  image: string,
}

export type TCartProduct = TProduct & { count: number }