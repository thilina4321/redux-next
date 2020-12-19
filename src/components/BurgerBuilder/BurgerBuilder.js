import "./BurgerBuilder.css";
import {  useState } from "react";
import AvailableItem from "../AvailableItem/AvailableItem";
import OrderMenu from "../OrderDetails/OrderMenu";
import OrderDialog from "../OrderDetails/OrderDialog";
import Burger from "../Burger/Burger";
import { useDispatch, useSelector } from "react-redux";
import * as actionType from '../../Store/actionCreators/MealsActions'

const BurgerBuilder = () => {
  const [open, setOpen] = useState(false);
  const meals = useSelector(state => state.meals.meals)
  let totalPrice = useSelector(state=>state.meals.totalPrice)
  const dispatch = useDispatch()

  console.log('this is meals', meals);


  let isMeals = false;

  meals.forEach((meal) => {
    if (meal.amount) {
      isMeals = true;
    }
  });

  const onAddMealHandler = (mealIndex) => {
    const updatedMeals = [...meals];
    updatedMeals[mealIndex].amount = updatedMeals[mealIndex].amount + 1;
    totalPrice += updatedMeals[mealIndex].price;
    dispatch(actionType.updateMeals(updatedMeals, totalPrice))
    // setMeals(updatedMeals);
  };

  const onRemoveMealHandler = (mealIndex) => {
    const updatedMeals = [...meals];
    if (updatedMeals[mealIndex].amount > 0) {
      totalPrice -= updatedMeals[mealIndex].price;
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
             totalPrice={totalPrice}
             meals={meals} onOpenModalHandler={onOpenModalHandler} />

            <div className="order__dialog">
              <OrderDialog
                open={open}
                meals={meals}
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
