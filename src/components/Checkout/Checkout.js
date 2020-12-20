import { Card, CardContent } from "@material-ui/core";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";

const Checkout = () => {
  const user = useSelector((state) => state.user.user);

  const orders = useSelector((state) => state.user.userOrders);
  console.log(orders);
  let isMeal = false;

  orders.map((order)=>{
    for(let i in order){
      console.log(i, order[i]);
    }
  })
  

  if (orders.length > 0) {
    isMeal = true;
  }

  return (
    <div className="checkout">
      {user && <h1> Hello {user.username} </h1>}
      <CardContent style={{ textAlign: "center" }}>Your Foods</CardContent>
      
      {isMeal ? (
        <Card style={{ width: "250px", margin: "auto" }}>
          <div className="checkout__items">
            {orders.map((order) => {
                 return  (
                   Object.keys(order).map((items, i)=>{
                    <p className="checkout__item"
                    key={i}> {items} {order[items]} </p>
                 })

                 
              )
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
