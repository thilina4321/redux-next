import { Button, Dialog } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {withRouter} from 'react-router-dom'
import * as userActionType from '../../Store/actionCreators/userActions'

const OrderDialog = (props) => {

  const orderData = useSelector(state => state.user.currentOrder)
  const orderPrice = useSelector(state => state.user.currentOrderPrice)

  const dispatch = useDispatch()
  const onOrderHandler = ()=>{
    dispatch(userActionType.addToUserOrder(orderData, orderPrice))
    dispatch(userActionType.clearCurrentOrder())
    props.history.push('/checkout')
  }


  return (

    <Dialog open={props.open} onClose={props.onCloseHandler}>
      <div className="dialog__modal">
        <h3 style={{ textAlign: "center" }}> Your Order</h3>
        {props.meals.map((meal, i) => {
          return (
            <div key={i} className="modal available__item">
              <h3 style={{ margin: 0 }}> {meal.item} </h3>
              <h4 style={{ margin: "5px" }}> -- {meal.count} </h4>
            </div>
          );
        })}
        <h3> Do you want to continue </h3>
        <Button onClick={props.onCloseHandler}
        color="secondary"> Cancel </Button>
        <Button onClick={onOrderHandler}
        color="primary"> Yes </Button>
      </div>
    </Dialog>
  );
};

export default withRouter(OrderDialog);
