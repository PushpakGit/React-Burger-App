import {FETCH_PRODUCTS,COMPARE_PRODUCT} from '../Container/Constant';

const INITIAL_STATE = {
  products: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state, products: action.payload.map(product =>
          ({...product, compare: false})
        )
      };
    case COMPARE_PRODUCT:
      return {
        ...state, products: state.products.map(product =>
          product.id === action.product.id ?
            ({...product, compare: !product.compare}) :
            product
        )
      };
    default:
      return state
  }
}
