const ProductsDetail = (state = {}, action) => {
  switch (action.type) {
    case 'fetch_product':
      return { ...state, ...action.payload };
    case 'remove_product': // 離開單品頁後清空 product
      return {};
    default:
      return state;
  }
};

export default ProductsDetail;
