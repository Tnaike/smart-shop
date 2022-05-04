import productReducer from './productReducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  productReducer,
});

export default rootReducers;
