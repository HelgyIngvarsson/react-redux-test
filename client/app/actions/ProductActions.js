import {actionTypes} from '../constants/ActionTypes';
import axios from 'axios';

export function addProduct(product){
    return{
        type:types.ADD_PRODUCT,
        payload:product
    }
}

export function fetchProducts() {
    // return dispatch => {
    //   dispatch(fetchProductsBegin());
    //   return fetch("http://localhost:3000/api/products")
    //     .then(handleErrors)
    //     .then(res => res.json())
    //     .then(json => {
    //       dispatch(fetchProductsSuccess(json));
    //       return json;
    //     })
    //     .catch(error => dispatch(fetchProductsFailure(error)));
    // };
    return dispatch =>{
      dispatch(fetchProductsBegin());
      return axios.get("http://localhost:3000/api/products")
        .then(response => dispatch(fetchProductsSuccess(response.data)))
        .catch(error => dispatch(fetchProductsError(error)))
    }
  }

  export function fetchProduct(id){
    return dispatch =>{
      dispatch(fetchProductBegin());
      return axios.get("http://localhost:3000/api/product/"+id)
        .then(response => dispatch(fetchProductSuccess(response.data)))
        .catch(error => dispatch(fetchProductError(error)))
    }    
  }
  
  // Handle HTTP errors since fetch won't.
  // function handleErrors(response) {
  //   if (!response.ok) {
  //     throw Error(response.statusText);
  //   }
  //   return response;
  // }
  export const fetchProductBegin = () => ({
    type: actionTypes.FETCH_PRODUCT_BEGIN
  });
  
  export const fetchProductSuccess = product => ({
    type: actionTypes.FETCH_PRODUCT_SUCCESS,
    payload: { product }
  });
  
  export const fetchProductError = error => ({
    type: actionTypes.FETCH_PRODUCT_FAILURE,
    payload: { error }
  });

  export const fetchProductsBegin = () => ({
    type: actionTypes.FETCH_PRODUCTS_BEGIN
  });
  
  export const fetchProductsSuccess = products => ({
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: { products }
  });
  
  export const fetchProductsError = error => ({
    type: actionTypes.FETCH_PRODUCTS_FAILURE,
    payload: { error }
  });