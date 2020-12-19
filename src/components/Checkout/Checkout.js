import { Card, CardContent } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./Checkout.css";

const Checkout = () => {
  const user = useSelector((state) => state.user.user);
  const orders = useSelector((state) => state.meals.meals);

  const orderss = useSelector(state => state.user.userOrders)
  console.log(orderss);
  let isMeal = false;

  // if (orders.length > 0) {
  //   isMeal = true;
  // }

  return (
    <div className="checkout">
      {user && <h1> Hello {user.username} </h1>}
      {isMeal ? (
        <Card style={{ width: "250px", margin: "auto" }}>
          <CardContent style={{ textAlign: "center" }}>Your Foods</CardContent>
          <div className="checkout__items">
            {orders.map((meal, i) => {
              return (
                meal.amount > 0 && (
                  <div className="checkout__item" key={i}>
                    <p> {meal.name} </p>
                    <p> {meal.amount} </p>
                  </div>
                )
              );
            })}
          </div>
        </Card>
      ) : (
        <h1> No checkouts yet </h1>
      )}
    </div>
  );
};

export default Checkout;
