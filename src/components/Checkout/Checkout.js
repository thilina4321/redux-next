import { Button, Card, CardContent, Dialog } from "@material-ui/core";
import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import db, { auth } from "../../auth/firebase";
import "./Checkout.css";

const Checkout = (props) => {
  const user = useSelector((state) => state.user.user);
  const [open, setOpen] = useState(false);

  let isMeal = false;
  const [dbOrders, setdbOrders] = useState([]);

  if (dbOrders.length > 0) {
    isMeal = true;
  }
  const [id, setId] = useState();


  useEffect(() => {
    console.log(props);
    if (id) {
      db.collection("userData").onSnapshot((data) => {
        setdbOrders(
          data.docs.map((order) => {
            if (order.data().userId === id) {
              return order.data();
            } else {
              return { items: [], price: null };
            }
          })
        );
      });
    }
  }, [id]);

  const updatedDbOrders = []
  dbOrders.forEach(order=>{
    if(order.items.length > 0){
      updatedDbOrders.push(order)
    }
  })


  const onPaymentHandle = () => {
    if (user.address) {
      setOpen(true);
    } else {
      props.history.push("./orders");
    }
  };

  return (
    <div className="checkout">
      {user && <Redirect to="/checkout" />}

      {isMeal ? (
        <div className="checkout__items">
          {updatedDbOrders.map((order, i) => (
            <Card
              style={{ marginBottom: "10px", marginTop: "10px" }}
              className="checkout__item"
              key={i}
            >
              <CardContent> Your Order </CardContent>
              {order.userId && order.items.map((od, i) => {

                return (
                  <div key={i}>
                    <p className="order__data">
                      {" "}
                      {od.name} {od.amount}{" "}
                    </p>
                  </div>
                );

                
              })}

              <div className="price"> Price ${order.price} </div>
              <Button
                onClick={onPaymentHandle}
                variant="contained"
                color="primary"
              >
                {" "}
                Payment{" "}
              </Button>
              <Dialog
                open={open}
                onClose={() => {
                  setOpen(false);
                }}
              >
                <h3 style={{ margin: "50px", textAlign: "center" }}>
                  Payment section is under contruction. Will fix it soon
                </h3>
              </Dialog>
            </Card>
          ))}
        </div>
      ) : (
        <h1> No checkouts yet </h1>
      )}
    </div>
  );
};

export default Checkout;
