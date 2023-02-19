import { TCartProduct, TProduct } from "../../utils/types"
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  CLEAR_CART,
  INCREMENT_PRODUCT_COUNT,
  DECREMENT_PRODUCT_COUNT,
  FILL_CART
} from "../constants/cart"

interface IAddProductToCart {
  readonly type: typeof ADD_PRODUCT_TO_CART,
  product: TProduct
}
interface IRemoveProductFromCart {
  readonly type: typeof REMOVE_PRODUCT_FROM_CART,
  id: string
}
interface IClearCart {
  readonly type: typeof CLEAR_CART
}
interface IIncrementProductCount {
  readonly type: typeof INCREMENT_PRODUCT_COUNT,
  id: string
}
interface IDecrementProductCount {
  readonly type: typeof DECREMENT_PRODUCT_COUNT,
  id: string
}
interface IFillCart {
  readonly type: typeof FILL_CART
  products: Array<TCartProduct>
}

export type TCartActions = 
  IAddProductToCart |
  IRemoveProductFromCart |
  IClearCart |
  IIncrementProductCount |
  IDecrementProductCount |
  IFillCart;