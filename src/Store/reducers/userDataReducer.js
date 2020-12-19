import * as actionType from "../actionCreators/userActions";

const initialState = {
  user:null,
  userCart:{price:0},
  userOrders:[],
  
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionType.ADD__USERDATA:
      return {
        ...state,
        user:action.user
      }
      
    case actionType.USER__ORDERS:return {
      ...state,
      userOrders : state.userOrders.concat(action.orderMeals)
    }

    default:return state
  }
};

export default userDataReducer;
