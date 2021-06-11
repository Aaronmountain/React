import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './Reducer/RootReducer.js';

const Store = createStore(RootReducer, composeWithDevTools());

export default Store;
