import * as actionType from "../actionCreators/MealsActions";

const initialReducer = 
   [ 
    { name: "Burger", amount: 0 },
    { name: "Pepsi", amount: 0 },
    { name: "Chips", amount: 0 },
  ]


const MealsReducer = (state = initialReducer, action) => {
  switch (action.type) {
    case actionType.ADD_MEALS:
      return action.meals

    default: 
      return state;
  }
};

export default MealsReducer;
