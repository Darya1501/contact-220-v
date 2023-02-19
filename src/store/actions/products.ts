import { TProduct } from "../../utils/types";
import { DECREMENT_PRODUCT_COUNT, GET_PRODUCTS_FAILED, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, INCREMENT_PRODUCT_COUNT } from "../constants/products";

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

interface IIncrementProductCount {
  readonly type: typeof INCREMENT_PRODUCT_COUNT,
  id: string
}
interface IDecrementProductCount {
  readonly type: typeof DECREMENT_PRODUCT_COUNT,
  id: string
}

export type TProductsActions = 
  IGetProductsRequest |
  IGetProductsSuccess |
  IGetProductsFailed |
  IIncrementProductCount |
  IDecrementProductCount;