const initialState = {
  cart: JSON.parse(sessionStorage.getItem('CURRENT_CART')) || [],
  coffeeMenu: [],
  orderNr: null
};

function rootReducer(state = initialState, action) {
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

    case 'ADD_NEW_ORDER':
      return {
        ...state,
        orderNr: action.payload
      }

    case 'CLEAR_CART_ITEMS':
      return {
        ...state,
        cart: []
      }

    case 'REMOVE_CART_ITEM':
      const updatedCart = [...state.cart];

      // Om vi försöker ta bort en vanlig produkt
      if (action.payload.id) {
        const itemToRemoveIndex = updatedCart.findIndex((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return cartItem;
          }
        });

        if (updatedCart[itemToRemoveIndex].quantity > 1) {
          updatedCart[itemToRemoveIndex].quantity--;
        } else {
          updatedCart.splice(itemToRemoveIndex, 1);
        }

        return {
          ...state,
          cart: updatedCart
        }
      }

      // Om vi försöker ta bort en kombinationsprodukt
      if (!action.payload.id) {
        const itemsToRemove = action.payload.promotion.promotionItems.map((item) => item.name);

        itemsToRemove.map((itemToBeRemoved) => {
          const itemToRemoveIndex = updatedCart.findIndex((cartItem) => {
            if (cartItem.title === itemToBeRemoved) {
              return cartItem;
            }
          });

          if (updatedCart[itemToRemoveIndex].quantity > 1) {
            updatedCart[itemToRemoveIndex].quantity--;
          } else {
            updatedCart.splice(itemToRemoveIndex, 1);
          }
        });

        return {
          ...state,
          cart: updatedCart
        }
      }

    default:
      return state;
  }
}

export default rootReducer;
