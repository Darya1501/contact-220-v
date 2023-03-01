import { TServiceCategory } from "../../utils/types"
import { TServicesActions } from "../actions/services"
import { GET_SERVICES_REQUEST, GET_SERVICES_SUCCESS, GET_SERVICES_FAILED } from "../constants/services";

type TServicesState = {
  services: Array<TServiceCategory>,
  isServicesRequest: boolean,
  isServicesSuccess: boolean,
  isServicesFailed: boolean
}

export const initialServicesState: TServicesState = {
  isServicesRequest: false,
  isServicesSuccess: false,
  isServicesFailed: false,

  services: [
  ]
}

export const servicesReducer = (state = initialServicesState, action: TServicesActions): TServicesState => {
  switch (action.type) {
    case GET_SERVICES_REQUEST: {
      return {
        ...state,
        isServicesRequest: true,
        isServicesSuccess: false,
        isServicesFailed: false,
      }
    }
    case GET_SERVICES_SUCCESS: {
      return {
        ...state,
        isServicesRequest: false, 
        isServicesSuccess: true,
        isServicesFailed: false,
        services: action.services.map(service => ({ ...service, count: 1 }))
      }
    }
    case GET_SERVICES_FAILED: {
      return {
        ...state,
        isServicesRequest: false, 
        isServicesSuccess: false,
        isServicesFailed: true
      }
    }
    default: {
      return state
    }
  }
}