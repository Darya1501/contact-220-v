import { TProduct } from "../../utils/types"
import { TProductsActions } from "../actions/products"
import { DECREMENT_PRODUCT_COUNT, GET_PRODUCTS_FAILED, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, INCREMENT_PRODUCT_COUNT } from "../constants/products"

type TProductsState = {
  products: Array<TProduct>,
  isProductsRequest: boolean,
  isProductsSuccess: boolean,
  isProductsFailed: boolean
}

export const initialProductsState: TProductsState = {
  isProductsRequest: false,
  isProductsSuccess: true, // TODO: после подключения БД заменить на false
  isProductsFailed: false,

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
      count: 1
    },
    {
      id: '3',
      title: 'Glossa Розетка (с заземлением)',
      price: 160,
      category: 'Розетки и выключатели',
      image: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1597667025/lmcode/xFKH3lsd0kGaA_5DEzYw-Q/82277546.png',
      count: 1
    },
    {
      id: '4',
      title: 'Другая Glossa Розетка',
      price: 160,
      category: 'Розетки и выключатели',
      image: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1597667025/lmcode/xFKH3lsd0kGaA_5DEzYw-Q/82277546.png',
      count: 1
    },
    {
      id: '5',
      title: 'Glossa Розетка (с заземлением)',
      price: 160,
      category: 'Розетки и выключатели',
      image: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1597667025/lmcode/xFKH3lsd0kGaA_5DEzYw-Q/82277546.png',
      count: 1
    },
    {
      id: '6',
      title: 'Другая Glossa Розетка Другая Glossa',
      price: 160,
      category: 'Розетки и выключатели',
      image: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1597667025/lmcode/xFKH3lsd0kGaA_5DEzYw-Q/82277546.png',
      count: 1
    },
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
    default: {
      return state
    }
  }
}