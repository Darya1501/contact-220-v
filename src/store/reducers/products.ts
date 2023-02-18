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
    {
      id: '1',
      title: 'Glossa Розетка (с заземлением)',
      price: 160,
      category: 'Розетки и выключатели',
      image: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1597667025/lmcode/xFKH3lsd0kGaA_5DEzYw-Q/82277546.png'
    },
    {
      id: '2',
      title: 'Другая Glossa Розетка',
      price: 160,
      category: 'Розетки и выключатели',
      image: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1597667025/lmcode/xFKH3lsd0kGaA_5DEzYw-Q/82277546.png'
    },
    {
      id: '3',
      title: 'Glossa Розетка (с заземлением)',
      price: 160,
      category: 'Розетки и выключатели',
      image: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1597667025/lmcode/xFKH3lsd0kGaA_5DEzYw-Q/82277546.png'
    },
    {
      id: '4',
      title: 'Другая Glossa Розетка',
      price: 160,
      category: 'Розетки и выключатели',
      image: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1597667025/lmcode/xFKH3lsd0kGaA_5DEzYw-Q/82277546.png'
    },
    {
      id: '5',
      title: 'Glossa Розетка (с заземлением)',
      price: 160,
      category: 'Розетки и выключатели',
      image: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1597667025/lmcode/xFKH3lsd0kGaA_5DEzYw-Q/82277546.png'
    },
    {
      id: '6',
      title: 'Другая Glossa Розетка Другая Glossa',
      price: 160,
      category: 'Розетки и выключатели',
      image: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1597667025/lmcode/xFKH3lsd0kGaA_5DEzYw-Q/82277546.png'
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
        products: action.products
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