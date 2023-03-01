import { AppDispatch, AppThunk, TServiceCategory } from "../../utils/types";
import { GET_SERVICES_REQUEST, GET_SERVICES_SUCCESS, GET_SERVICES_FAILED } from "../constants/services";
import { child, get } from "firebase/database";
import { dbRef } from "../../app";

interface IGetServicesRequest {
  readonly type: typeof GET_SERVICES_REQUEST
}
interface IGetServicesSuccess {
  readonly type: typeof GET_SERVICES_SUCCESS,
  services: Array<TServiceCategory>
}
interface IGetServicesFailed {
  readonly type: typeof GET_SERVICES_FAILED
}

export type TServicesActions = 
  IGetServicesRequest |
  IGetServicesSuccess |
  IGetServicesFailed;

export const getServices = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch({ type: GET_SERVICES_REQUEST });
  
  get(child(dbRef, `/services`)).then((snapshot) => {
    if (snapshot.exists()) {
      dispatch({ type: GET_SERVICES_SUCCESS, services: snapshot.val() })
    } else {
      dispatch({ type: GET_SERVICES_SUCCESS, services: [] })
      console.log("No data available");
    }
  }).catch((error) => {
    dispatch({ type: GET_SERVICES_FAILED })
    console.error(error);
  });
}