import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
  const isAuthenticate = useSelector((state) => state.auth.token !== null);

  return (
    <div className="main__navigation">
      {!isAuthenticate && <NavLink exact className="main__nav__links" to="/">
        Sign Up
      </NavLink>}
      <NavLink className="main__nav__links" to="/songs">
        Songs List
      </NavLink>
      {isAuthenticate && (
        <NavLink className="main__nav__links" to="/logout">
          Logout
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
