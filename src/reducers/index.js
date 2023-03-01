const initialState = {
  cart: [],
  coffeeMenu: [],
};

function rootReducer(state = initialState, action) {
  console.log(state.cart);
  switch (action.type) {
    case 'ADD_CART_ITEM':
      const itemExistsInCart = state.cart.find((item) => {
        if (item.id === action.payload.id) {
          return item;
        }
      });

      if (itemExistsInCart) {
        const updateExistingItemQuantity = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return { ...state, cart: updateExistingItemQuantity };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload }],
        };
      }

    case 'ADD_COFFEE_MENU':
      return {
        ...state,
        coffeeMenu: [...action.payload],
      };

    default:
      return state;
  }
}

export default rootReducer;
