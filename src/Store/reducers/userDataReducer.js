import * as actionType from "../actionCreators/userActions";

const initialState = {
  user: null,
  userOrders: [],
  currentOrder: [],
  currentOrderPrice: 0,
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD__USERDATA:
      return {
        ...state,
        user: action.user,
      };

    case actionType.CURRENT_ORDER: {
      let updatedPrice = state.currentOrderPrice + action.itemData.price;
      const updatedCurrentOrder = [...state.currentOrder];
      const foodIndex = updatedCurrentOrder.findIndex(
        (item) => item.item === action.itemData.item
      );

      if (foodIndex >= 0) {
        updatedCurrentOrder[foodIndex].count += 1;
      } else {
        updatedCurrentOrder.push({ item: action.itemData.item, count: 1 });
      }

      return {
        ...state,
        currentOrderPrice: updatedPrice,
        currentOrder: updatedCurrentOrder,
      };
    }

    case actionType.USER__ORDERS:
      return {
        ...state,
        userOrders: state.userOrders.concat(action.orderData)
}

 case actionType.CLEAR_CURRENT_ORDER:return {
   ...state,
   currentOrder:[],
   currentOrderPrice:0
 }
    default:
      return state;
  }
};

export default userDataReducer;
