import { axios, currentAPI } from '../../config';
import { FETCH_ALL_PRODUCTS } from '../constants';

export const fetchAllProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${currentAPI}/products`);
    
      dispatch({
        type: FETCH_ALL_PRODUCTS,
        payload: response.data,
      });
  } catch (error) {
    return '';
  }
};
