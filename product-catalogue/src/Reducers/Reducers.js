import { combineReducers } from 'redux'
import product from './ProductReducer'

const compareApp = combineReducers({
  product
});

export default compareApp