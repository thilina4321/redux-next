import { AppBar, Toolbar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Auth from "../../auth/Auth";
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";
import Checkout from "../Checkout/Checkout";
import Order from "../Order/Order";
import "./Appbar.css";
import { auth } from "../../auth/firebase";
import Logout from "../../auth/Logout";

const Appbar = () => {
  const [userId, setUserId] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUserId(currentUser.uid);
      }
    });
  }, []);
  console.log(userId);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <NavLink
            className="toolbar"
            style={{ flex: 1 }}
            to={{
              pathname: "/",
              search: "?userId=" + userId,
            }}
          >
            Food Shop
          </NavLink>

          {userId ? (
            <div>
              <NavLink
                className="toolbar"
                to={{
                  pathname: "/checkout",
                  search: "?userId=" + userId,
                }}
              >
                Checkout
              </NavLink>
              <NavLink className="toolbar" to="/logout">
                Logout
              </NavLink>
            </div>
          ) : (
            <NavLink className="toolbar" to="/login">
              Login
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path="/orders" component={Order} />
        <Route path="/login" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={BurgerBuilder} />
      </Switch>
    </div>
  );
};

export default Appbar;
