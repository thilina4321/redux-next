import { Button, Card, CardContent } from "@material-ui/core";
import React from "react";

const OrderMenu = (props) => {
  return (
    <Card>
      <CardContent>
        <h3 style={{ textAlign: "center" }}> Your Order</h3>
        {props.meals.map((meal, i) => {
          return (
            <div key={i} className="available__item">
              <h3 style={{ margin: 0 }}> {meal.item} </h3>
              <h4 style={{ margin: "5px" }}> -- {meal.count} </h4>
            </div>
          );
        })}

        <h3> Total Price : $ {props.totalPrice} </h3>

        <Button
          onClick={props.onOpenModalHandler}
          style={{ marginTop: "5px" }}
          variant="contained"
          color="primary"
        >
          Order
        </Button>
      </CardContent>
    </Card>
  );
};

export default OrderMenu;
