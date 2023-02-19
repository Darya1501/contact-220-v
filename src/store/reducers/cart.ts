import { TCartProduct } from "../../utils/types"
import { TCartActions } from "../actions/cart"
import { ADD_PRODUCT_TO_CART, CLEAR_CART, DECREMENT_PRODUCT_COUNT, FILL_CART, INCREMENT_PRODUCT_COUNT, REMOVE_PRODUCT_FROM_CART } from "../constants/cart"

type TCartState = {
  products: Array<TCartProduct>
}
const initialCartState: TCartState = {
  products: [
    {
      id: '1',
      title: 'Glossa Розетка (с заземлением)',
      price: 160,
      category: 'Розетки и выключатели',
      image: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1597667025/lmcode/xFKH3lsd0kGaA_5DEzYw-Q/82277546.png',
      count: 1
    },
    {
      id: '2',
      title: 'Другая Glossa Розетка',
      price: 160,
      category: 'Розетки и выключатели',
      image: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1597667025/lmcode/xFKH3lsd0kGaA_5DEzYw-Q/82277546.png',
      count: 4
    }
  ]
}

export const cartReducer = (state = initialCartState, action: TCartActions): TCartState => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        products: [
          ...state.products,
          {
            ...action.product,
            count: 1
          }
        ]
      }
    }
    case REMOVE_PRODUCT_FROM_CART: {
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.id)
      }
    }
    case INCREMENT_PRODUCT_COUNT: {
      return {
        ...state,
        products: state.products.map(product => product.id === action.id ? { ...product, count: product.count + 1 } : product)
      }
    }
    case DECREMENT_PRODUCT_COUNT: {
      return {
        ...state,
        products: state.products.map(product => product.id === action.id ? { ...product, count: product.count - 1 } : product)
      }
    }
    case CLEAR_CART: {
      return {
        ...initialCartState
      }
    }
    case FILL_CART: {
      return {
        ...state,
        products: action.products ? action.products : []
      }
    }
    default: {
      return state
    }
  }
}