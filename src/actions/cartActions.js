export const addCartItem = (data) => {
  return {
    type: 'ADD_CART_ITEM',
    payload: data,
  };
};

export const clearCartItems = () => {
  return {
    type: 'CLEAR_CART_ITEMS'
  }
};

export const removeCartItem = (data) => {
  return {
    type: 'REMOVE_CART_ITEM',
    payload: data
  }
}