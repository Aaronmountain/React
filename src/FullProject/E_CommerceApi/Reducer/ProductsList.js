const initState = {
  list: [],
};

const ProductsList = (state = initState, action) => {
  switch (action.type) {
    case 'fetch_products':
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default ProductsList;
