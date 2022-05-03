import { FETCH_ALL_PRODUCTS } from '../constants';

const initialState = {
  products: [],
};

export default function productReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_ALL_PRODUCTS: {
      return {
        ...state,
        products: payload,
      };
    }
    default: {
      return state;
    }
  }
}
