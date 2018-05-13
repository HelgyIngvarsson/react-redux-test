import user from './user'
import products from './products'
import product from './product'
import { combineReducers } from 'redux'
  
  export default combineReducers({
      user,
      products,
      product
  })