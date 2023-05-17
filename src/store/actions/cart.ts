import { TCartProduct, TProduct, TProductVariant } from "../../utils/types"
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
  product: TCartProduct,
}
interface IRemoveProductFromCart {
  readonly type: typeof REMOVE_PRODUCT_FROM_CART,
  id: number
}
interface IClearCart {
  readonly type: typeof CLEAR_CART
}
interface IIncrementProductCount {
  readonly type: typeof INCREMENT_PRODUCT_COUNT,
  id: number
}
interface IDecrementProductCount {
  readonly type: typeof DECREMENT_PRODUCT_COUNT,
  id: number
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

export function addCartProduct(product: TProduct, count: number, variant: TProductVariant): IAddProductToCart {
  return({
    type: ADD_PRODUCT_TO_CART,
    product: {
      ...product,
      count: count,
      variant: variant,
      cartID: Date.now()
    },
  })
}