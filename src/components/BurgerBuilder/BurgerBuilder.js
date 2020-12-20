import "./BurgerBuilder.css";
import {  useState } from "react";
import AvailableItem from "../AvailableItem/AvailableItem";
import OrderMenu from "../OrderDetails/OrderMenu";
import OrderDialog from "../OrderDetails/OrderDialog";
import Burger from "../Burger/Burger";
import { useDispatch, useSelector } from "react-redux";
import * as actionType from '../../Store/actionCreators/MealsActions'
import * as userActionType from '../../Store/actionCreators/userActions'


const BurgerBuilder = () => {
  const [open, setOpen] = useState(false);
  const meals = useSelector(state => state.meals.meals)
  const dispatch = useDispatch()

  const orderData = useSelector(state=>state.user.currentOrder)
  const orderPrice = useSelector(state=>state.user.currentOrderPrice)

  let isMeals = false;

  if(orderData.length > 0){
    isMeals = true
  }

  const onAddMealHandler = (mealIndex) => {
    const selectedMeal = meals[mealIndex]
    
    dispatch(userActionType.addToCurrentOrder(selectedMeal.name, selectedMeal.price))
  };

  const onRemoveMealHandler = (mealIndex) => {
    const updatedMeals = [...meals];
    if (updatedMeals[mealIndex].amount > 0) {
      updatedMeals[mealIndex].amount = updatedMeals[mealIndex].amount - 1;
      dispatch(actionType.updateMeals(updatedMeals))
    }
  };

  const onOpenModalHandler = () => {
    setOpen(true);
  };

  const onCloseHandler = () => {
    setOpen(false);
  };

  return (
    <div className="burger__main__app">
    
     <Burger/>
      <div className="burger__builder">
      
        <AvailableItem
          onAddMealHandler={onAddMealHandler}
          onRemoveMealHandler={onRemoveMealHandler}
          meals={meals}
        />

        {isMeals && (
          <div className="order__details">
            <OrderMenu
             totalPrice={orderPrice}
             meals={orderData} onOpenModalHandler={onOpenModalHandler} />

            <div className="order__dialog">
              <OrderDialog
                open={open}
                meals={orderData}
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
