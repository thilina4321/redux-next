import * as actionType from "../actionCreators/userActions";

const initialState = {
  user: null,
  userOrders: [],
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD__USERDATA:
      return {
        ...state,
        user:  action.user,
      };

      
    case actionType.USER__ORDERS:
      return {
        ...state,
        userOrders: state.userOrders.concat(action.orderData)
}

 
    default:
      return state;
  }
};

export default userDataReducer;
