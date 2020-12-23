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
import * as userActionType from '../../Store/actionCreators/userActions'
import { useDispatch, useSelector } from "react-redux";

const Appbar = () => {
  const [userId, setUserId] = useState();
  const user = useSelector(state => state.user.user)
  const userDispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        userDispatch(userActionType.userData(currentUser.uid))
        setUserId(currentUser.uid);
      }
    });
  });

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <NavLink
            className="toolbar"
            style={{ flex: 1 }}
            to="/"
          >
            Food Shop
          </NavLink>

          {user ? (
            <div>
              <NavLink
                className="toolbar"
                to={"/checkout/" }
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
