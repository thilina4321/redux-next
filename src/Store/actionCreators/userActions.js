export const ADD__USERDATA = "ADD_USERDATA";
export const USER_CART = "USER_CART";
export const USER__ORDERS = "USER_ORDERS";
export const ADD_TO_CURRENT_ORDER = "CURRENT_ORDER";
export const REMOVE_FROM_CURRENT_ORDER = 'REMOVE_FROM_CURRENT_ORDER'
export const CLEAR_CURRENT_ORDER = "CLEAR_CURRENT_ORDER";

export const userData = (data) => {
  return {
    type: ADD__USERDATA,
    user: data,
  };
};

export const addToUserOrder = (orderData) => {
  

  return {
    type: USER__ORDERS,
    orderData
  };
};
