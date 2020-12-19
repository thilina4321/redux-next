import * as actionType from "../actionCreators/MealsActions";


const initialReducer = 
  {meals: [ 
    { name: "Burger", amount: 0, price: 2 },
    { name: "Pepsi", amount: 0 , price:5},
    { name: "Chips", amount: 0 , price:6},
  ], 
  totalPrice: 0
}


const MealsReducer = (state = initialReducer, action) => {
  switch (action.type) {
    
    case actionType.ADD_MEALS:
      return {
        meals:action.meals,
        totalPrice:action.totalPrice
      }
    
      case actionType.CLEAR__MEALS:{
        return {
        meals:[ 
          { name: "Burger", amount: 0, price: 2 },
          { name: "Pepsi", amount: 0 , price:5},
          { name: "Chips", amount: 0 , price:6},
        ],
        totalPrice:0
      }}

    default: 
      return state;
  }
};

export default MealsReducer;
