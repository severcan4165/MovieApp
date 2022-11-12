import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"

const NavBar = () => {
  return (
    <>
   
    <nav className="navBar">
      <div>
        <NavLink className="navLink" to="/">Nomadr Movie Store</NavLink>
      </div>
      <div>
        <NavLink className="navLink" to="/login">Login</NavLink>
        <NavLink className="navLink" to="/register">Register</NavLink>
      </div>
    </nav>
    <div className="belowFixedDiv"></div>
    </>
  );
};

export default NavBar;
