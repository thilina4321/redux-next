import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Auth from "../../auth/Auth";
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";
import Checkout from "../Checkout/Checkout";
import Order from "../Order/Order";
import "./Appbar.css";

const Appbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <NavLink className="toolbar" style={{ flex: 1 }} to="/">
            Logo
          </NavLink>
          
          <NavLink className="toolbar" to="/checkout">
            Checkout
          </NavLink>
          <NavLink className="toolbar" to="/login">
            Login
          </NavLink>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/orders" component={Order} />
        <Route path="/login" component={Auth} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={BurgerBuilder} />
      </Switch>
    </div>
  );
};

export default Appbar;
