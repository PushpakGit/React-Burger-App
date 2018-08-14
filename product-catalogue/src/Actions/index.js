import {FETCH_PRODUCTS,COMPARE_PRODUCT} from '../Container/Constant';

export const getProducts = () =>
  dispatch =>
    fetch(`ProductData.json`)
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: FETCH_PRODUCTS,
          payload: response.products
        })
      })

export const compare = product => ({
    type: COMPARE_PRODUCT,
    product
  });
