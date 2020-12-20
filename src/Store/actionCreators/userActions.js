export const ADD__USERDATA = "ADD_USERDATA";
export const USER_CART = "USER_CART";
export const USER__ORDERS = "USER_ORDERS";
export const CURRENT_ORDER = "CURRENT_ORDER";
export const CLEAR_CURRENT_ORDER = "CLEAR_CURRENT_ORDER";

export const userData = (user) => {
  return {
    type: ADD__USERDATA,
    user: user,
  };
};

export const addToCurrentOrder = (item, price) => {
  return {
    type: CURRENT_ORDER,
    itemData: {
      item,
      price,
    },
  };
};

export const clearCurrentOrder = () => {
  return {
    type: CLEAR_CURRENT_ORDER,
  };
};

export const addToUserOrder = (orderItems, orderPrice) => {
    
    let data = orderItems.reduce((result, item, next)=>{
      result[item.item] = item.count
      return result
    }, {})

    data = {...data, price:orderPrice}

  return {
    type: USER__ORDERS,
    data
  };
};
