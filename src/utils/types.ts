import { ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { TCartActions } from "../store/actions/cart";
import { TCategoriesActions } from "../store/actions/categories";
import { TProductsActions } from "../store/actions/products";
import { TServicesActions } from "../store/actions/services";
import { store } from "../store/store";

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =
  TProductsActions | TCategoriesActions | TCartActions | TServicesActions;

export type AppThunk<TReturn = void> = ThunkAction<TReturn, RootState, never, TApplicationActions>;
export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export type TProductsCharacteristic = {
  [name: string]: string
}

export type TCategory = {
  id: number,
  title: string,
  parentId: number,
  children: TCategory[],
}

export type TProductVariant = {
  id: number,
  article: string,
  title: string,
  price: number,
  image: string,
  description: string,
  count: number,
}

export type TProduct = {
  id: number,
  title: string,
  externalId: string | null,
  source: number,
  categoryId: number,
  variants: Array<TProductVariant>,
  characteristics?: Array<TProductsCharacteristic>,
}

export type TCartProduct = TProduct & {
  cartID: number,
  count: number,
  variant: TProductVariant
}

export type TService = {
  title: string,
  price: number,
  unit: string
}

export type TServiceCategory = {
  category: string,
  items: Array<TService>
}