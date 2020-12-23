import "./BurgerBuilder.css";
import {  useReducer, useState } from "react";
import AvailableItem from "../AvailableItem/AvailableItem";
import OrderMenu from "../OrderDetails/OrderMenu";
import OrderDialog from "../OrderDetails/OrderDialog";
import Burger from "../Burger/Burger";
import { useDispatch, useSelector } from "react-redux";
import * as userActionType from "../../Store/actionCreators/userActions";
import { currentOrderReducer } from "./CurrentOrderReducer";
import { ADD, REMOVE, CLEAR } from "./CurrentOrderReducer";
import { Button, Dialog } from "@material-ui/core";
import db from "../../auth/firebase";

const BurgerBuilder = (props) => {
  const [open, setOpen] = useState(false);
  const [checkUserDialog, setCheckUserDialog] = useState(false);
  const meals = useSelector((state) => state.meals.meals);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [currentOrder, curOrderDispatch] = useReducer(currentOrderReducer, {
    items: [],
    price: 0,
    userId:null
  });

  let isMeals = false;

  if (currentOrder.items.length > 0) {
    isMeals = true;
  }

  const onAddMealHandler = (mealIndex) => {
    if (!user) {
      setOpen(false);
      setCheckUserDialog(true);
    } else {
      const selectedMeal = meals[mealIndex];
      curOrderDispatch({
        type: ADD,
        name: selectedMeal.name,
        price: selectedMeal.price,
        userId:null
      });
    }
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

  const onOrderHandler = () => {
    db.collection("userData")
      .add(currentOrder)
      .then(() => {
        dispatch(userActionType.addToUserOrder(currentOrder ));
        curOrderDispatch({ trpe: CLEAR });
        props.history.push('/checkout')
        
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
                onOrderHandler={onOrderHandler}
                open={open}
                meals={currentOrder.items}
                onCloseHandler={onCloseHandler}
              />
            </div>
          </div>
        )}
      </div>
      {checkUserDialog && (
        <Dialog
          style={{ textAlign: "center" }}
          open={checkUserDialog}
          onClose={() => setCheckUserDialog(false)}
        >
          <div style={{ padding: "30px" }}>
            <h2> Sorry you have to Login First </h2>
            <span>
              <Button
                color="secondary"
                onClick={() => setCheckUserDialog(false)}
              >
                {" "}
                Cancel{" "}
              </Button>
              <Button
                color="primary"
                onClick={() => props.history.push("/login")}
              >
                {" "}
                Ok{" "}
              </Button>
            </span>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default BurgerBuilder;
