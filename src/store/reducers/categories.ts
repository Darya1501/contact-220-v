import { getIds } from "../../utils/categories-functions"
import { TCategory } from "../../utils/types"
import { TCategoriesActions } from "../actions/categories"
import { CHANGE_DISPLAY_CATEGORIES, GET_CATEGORIES_FAILED, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS } from "../constants/categories"

type TCategoriesState = {
  categories: Array<TCategory>,
  displayCategories: Array<number>,
  isCategoriesRequest: boolean,
  isCategoriesSuccess: boolean,
  isCategoriesFailed: boolean
}

export const initialCategoriesState: TCategoriesState = {
  isCategoriesRequest: false,
  isCategoriesSuccess: false,
  isCategoriesFailed: false,

  categories: [],
  displayCategories: [],
}

export const categoriesReducer = (state = initialCategoriesState, action: TCategoriesActions): TCategoriesState => {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST: {
      return {
        ...state,
        isCategoriesRequest: true,
        isCategoriesSuccess: false,
        isCategoriesFailed: false,
      }
    }
    case GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        isCategoriesRequest: false, 
        isCategoriesSuccess: true,
        isCategoriesFailed: false,
        categories: action.categories,
        displayCategories: getIds(action.categories)
      }
    }
    case GET_CATEGORIES_FAILED: {
      return {
        ...state,
        isCategoriesRequest: false, 
        isCategoriesSuccess: false,
        isCategoriesFailed: true
      }
    }
    case CHANGE_DISPLAY_CATEGORIES: {
      return {
        ...state,
        displayCategories: getIds(action.categories)
      }
    } 
    default: {
      return state
    }
  }
}