import { AppDispatch, AppThunk, TProduct } from "../../utils/types";
import { GET_PRODUCTS_FAILED, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../constants/products";

interface IGetProductsRequest {
  readonly type: typeof GET_PRODUCTS_REQUEST
}
interface IGetProductsSuccess {
  readonly type: typeof GET_PRODUCTS_SUCCESS,
  products: Array<TProduct>
}
interface IGetProductsFailed {
  readonly type: typeof GET_PRODUCTS_FAILED
}

export type TProductsActions = 
  IGetProductsRequest |
  IGetProductsSuccess |
  IGetProductsFailed;

export const getProducts = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });

  fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(res => dispatch({ type: GET_PRODUCTS_SUCCESS, products: res }))
    .catch(error => {
      dispatch({ type: GET_PRODUCTS_SUCCESS, products: [] })
      console.error(error);
    })
}