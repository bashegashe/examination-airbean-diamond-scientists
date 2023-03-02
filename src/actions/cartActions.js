export const addCartItem = (data) => {
  return {
    type: 'ADD_CART_ITEM',
    payload: data,
  };
};

export const addNewOrder = (data) => {
  return {
    type: 'ADD_NEW_ORDER',
    payload: data
  }
};

export const clearCartItems = () => {
  return {
    type: 'CLEAR_CART_ITEMS'
  }
};