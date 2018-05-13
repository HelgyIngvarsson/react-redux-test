import {actionTypes} from '../constants/ActionTypes';

const initialState = {
    item: null,
    loading: false,
    error: null
  };
  export default function productReducer(state = initialState, action) {
    switch(action.type) {
      case actionTypes.FETCH_PRODUCT_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case actionTypes.FETCH_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          item: action.payload.product
        };
  
      case actionTypes.FETCH_PRODUCT_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          item: null
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }