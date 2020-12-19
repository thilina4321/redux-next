import * as actionType from "../actionCreators/MealsActions";


const initialReducer = 
  {meals: [ 
    { name: "Burger",  price: 2 },
    { name: "Pepsi",  price:5},
    { name: "Chips", price:6},
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
    
      
    default: 
      return state;
  }
};

export default MealsReducer;
