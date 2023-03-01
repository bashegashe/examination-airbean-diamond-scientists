const initialState = {
  cart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload }],
      };
    default:
      return state;
  }
}

export default rootReducer;
