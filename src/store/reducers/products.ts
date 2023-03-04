import { TProduct } from "../../utils/types"
import { TProductsActions } from "../actions/products"
import { GET_PRODUCTS_FAILED, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../constants/products"

type TProductsState = {
  products: Array<TProduct>,
  isProductsRequest: boolean,
  isProductsSuccess: boolean,
  isProductsFailed: boolean
}

export const initialProductsState: TProductsState = {
  isProductsRequest: false,
  isProductsSuccess: false,
  isProductsFailed: false,

  products: [
  ]
}

export const productsReducer = (state = initialProductsState, action: TProductsActions): TProductsState => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        isProductsRequest: true,
        isProductsSuccess: false,
        isProductsFailed: false,
      }
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isProductsRequest: false, 
        isProductsSuccess: true,
        isProductsFailed: false,
        products: action.products.map(product => ({ ...product, count: 1 }))
      }
    }
    case GET_PRODUCTS_FAILED: {
      return {
        ...state,
        isProductsRequest: false, 
        isProductsSuccess: false,
        isProductsFailed: true
      }
    }
    default: {
      return state
    }
  }
}