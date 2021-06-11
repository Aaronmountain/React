import { FETCH_PRODUCTS, FETCH_PRODUCT, REMOVEP_RODUCT } from './Contants.js';

export const ProductsList = (data) => ({
  type: FETCH_PRODUCTS,
  payload: data,
});

export const ProductDetail = (data) => ({
  type: FETCH_PRODUCT,
  payload: data,
});

export const RemoveProduct = () => ({
  type: REMOVEP_RODUCT,
});
