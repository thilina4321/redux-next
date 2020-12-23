import "./BurgerBuilder.css";
import { useReducer, useState } from "react";
import AvailableItem from "../AvailableItem/AvailableItem";
import OrderMenu from "../OrderDetails/OrderMenu";
import OrderDialog from "../OrderDetails/OrderDialog";
import Burger from "../Burger/Burger";
import { useDispatch, useSelector } from "react-redux";
import * as userActionType from "../../Store/actionCreators/userActions";
import { currentOrderReducer } from "./CurrentOrderReducer";
import {ADD, REMOVE, CLEAR} from './CurrentOrderReducer'


const BurgerBuilder = (props) => {
  const [open, setOpen] = useState(false);
  const meals = useSelector((state) => state.meals.meals);
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch();
  const [currentOrder, curOrderDispatch] = useReducer(currentOrderReducer, {
    items: [],
    price: 0,
  });


  let isMeals = false;

  if (currentOrder.items.length > 0) {
    isMeals = true;
  }

  const onAddMealHandler = (mealIndex) => {
    const selectedMeal = meals[mealIndex];
    curOrderDispatch({
      type: ADD,
      name: selectedMeal.name,
      price: selectedMeal.price,
    });
    
  };

  const onRemoveMealHandler = (mealIndex) => {
    const selectedMeal = meals[mealIndex];
    curOrderDispatch({
      type: REMOVE,
      name: selectedMeal.name,
      price: selectedMeal.price,
    });

    
  };

  const onOpenModalHandler = () => {
    setOpen(true);
  };

  const onCloseHandler = () => {
    setOpen(false);
  };

  const onOrderHandler = ()=>{
    dispatch(userActionType.addToUserOrder(currentOrder))
    curOrderDispatch({trpe:CLEAR})
    if(user){

      props.history.push('/checkout')
    }else{
      props.history.push('/orders')

    }
  }


  return (
    <div className="burger__main__app">
      <Burger />
      <div className="burger__builder">
        <AvailableItem
          onAddMealHandler={onAddMealHandler}
          onRemoveMealHandler={onRemoveMealHandler}
          meals={meals}
        />

        {isMeals && (
          <div className="order__details">
            <OrderMenu
              totalPrice={currentOrder.price}
              meals={currentOrder.items}
              onOpenModalHandler={onOpenModalHandler}
            />

            <div className="order__dialog">
              <OrderDialog
              onOrderHandler = {onOrderHandler}
                open={open}
                meals={currentOrder.items}
                onCloseHandler={onCloseHandler}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerBuilder;
