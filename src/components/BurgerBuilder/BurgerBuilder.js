import "./BurgerBuilder.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { CardActions } from "@material-ui/core";

const BurgerBuilder = () => {
  const [meals, setMeals] = useState([
    { name: "Burger", amount: 0 },
    { name: "Pepsi", amount: 0 },
    { name: "Chips", amount: 0 },
  ]);

  const [open, setOpen] = useState(false);

  let isMeals = false;

  meals.forEach((meal) => {
    if (meal.amount) {
      isMeals = true;
    }
  });

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  const onAddMealHandler = (mealIndex) => {
    const updatedMeals = [...meals];
    updatedMeals[mealIndex].amount = updatedMeals[mealIndex].amount + 1;

    setMeals(updatedMeals);
  };

  const onRemoveMealHandler = (mealIndex) => {
    const updatedMeals = [...meals];
    if (updatedMeals[mealIndex].amount > 0) {
      updatedMeals[mealIndex].amount = updatedMeals[mealIndex].amount - 1;
      setMeals(updatedMeals);
    }
  };

  return (
    <div className="burger__builder">
      <div className="available__items">
        <Card>
          <CardContent>
            <h3 style={{ textAlign: "center" }}> Enjoy The Meals </h3>
            {meals.map((meal, i) => {
              return (
                <div key={i} className="available__item">
                  <h3 style={{ margin: 0 }}> {meal.name} </h3>
                  <Button onClick={() => onAddMealHandler(i)} color="primary">
                    ADD
                  </Button>
                  <Button
                    onClick={() => onRemoveMealHandler(i)}
                    color="secondary"
                  >
                    REMOVE
                  </Button>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {isMeals && (
        <div className="order__details">
          <Card>
            <CardContent>
              <h3 style={{ textAlign: "center" }}> Your Order</h3>
              {meals.map((meal, i) => {
                return (
                  <div key={i} className="available__item">
                    <h3 style={{ margin: 0 }}> {meal.name} </h3>
                    <h4 style={{ margin: "5px" }}> -- {meal.amount} </h4>
                  </div>
                );
              })}

              <Button onClick={()=>setOpen(true)}
                style={{ marginTop: "5px" }}
                variant="contained"
                color="primary"
              >
                Order
              </Button>

              <div className="order__dialog">
              <Dialog open={open} onClose={() => setOpen(false)}>
                <h3 style={{ textAlign: "center" }}> Your Order</h3>
                {meals.map((meal, i) => {
                  return (
                    <div key={i} className="modal available__item">
                      <h3 style={{ margin: 0 }}> {meal.name} </h3>
                      <h4 style={{ margin: "5px" }}> -- {meal.amount} </h4>
                    </div>
                  );
                })}
                <CardActions>
                    <h3> Do you want to continue </h3>
                    <Button color="secondary"> Cancel </Button>
                    <Button color="primary"> Yes </Button>
                </CardActions>
              </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default BurgerBuilder;
