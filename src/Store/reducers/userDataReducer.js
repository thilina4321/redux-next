import * as actionType from "../actionCreators/userActions";

const initialState = null;

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADDUSERDATA:
      return action.user;

    default:return state
  }
};

export default userDataReducer;
