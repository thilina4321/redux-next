import { Card } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./Checkout.css";
const Checkout = () => {
  const user = useSelector((state) => state.user);
  const meals = useSelector((state) => state.meals);

  let isMeal = false
  meals.forEach(meal => {
      if(meal.amount > 0 ){
          return isMeal = true
      }
      return isMeal
  });

  return (
    <div className="checkout">
      {user && <h1> Hello {user.username} </h1>}
      No checkouts yet
      {isMeal && <Card style={{width:'90%', margin:'auto'}}>
      <div className="checkout__items">
      {meals.map((meal, i) => {
          return (
              <div key={i}>
              <p> {meal.name} </p>
              <p> {meal.amount} </p>
              </div>
              );
            })}
            </div>
      </Card>}
    </div>
  );
};

export default Checkout;
