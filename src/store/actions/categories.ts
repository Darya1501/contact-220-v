import { AppDispatch, AppThunk, TCategory } from "../../utils/types";
import { CHANGE_DISPLAY_CATEGORIES, GET_CATEGORIES_FAILED, GET_CATEGORIES_REQUEST, GET_CATEGORIES_SUCCESS } from "../constants/categories";

interface IGetCategoriesRequest {
  readonly type: typeof GET_CATEGORIES_REQUEST
}
interface IGetCategoriesSuccess {
  readonly type: typeof GET_CATEGORIES_SUCCESS,
  categories: Array<TCategory>
}
interface IGetCategoriesFailed {
  readonly type: typeof GET_CATEGORIES_FAILED
}
interface IChangeDisplayCategories {
  readonly type: typeof CHANGE_DISPLAY_CATEGORIES
  categories: Array<TCategory>
}

export type TCategoriesActions = 
  IGetCategoriesRequest |
  IGetCategoriesSuccess |
  IGetCategoriesFailed |
  IChangeDisplayCategories;

export const getCategories = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch({ type: GET_CATEGORIES_REQUEST });

  fetch('http://localhost:5000/product-category')
    .then(res => res.json())
    .then(res => dispatch({ type: GET_CATEGORIES_SUCCESS, categories: res }))
    .catch(error => {
      dispatch({ type: GET_CATEGORIES_FAILED })
      console.error(error);
    })
}