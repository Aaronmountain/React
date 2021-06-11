import { combineReducers } from 'redux';
import ProductDetail from './ProductDetail.js';
import ProductsList from './ProductsList.js';

const RootReducer = combineReducers({
  products: ProductsList,
  product: ProductDetail,
});

export default RootReducer;
