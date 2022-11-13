import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logOut } from "../firebase/firebase";
import "./navbar.css";

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <nav className="navBar">
        <div>
          <NavLink className="navLink" to="/">
            Nomadr Movie Store
          </NavLink>
        </div>
        <div>
          <span role="button" onClick={() => logOut()}>
            Logout
          </span>
          <NavLink className="navLink" to="/login">
            Login
          </NavLink>

          <NavLink className="navLink" to="/register">
            Register
          </NavLink>
        </div>
      </nav>
      <div className="belowFixedDiv"></div>
    </>
  );
};

export default NavBar;
