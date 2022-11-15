
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logOut } from "../firebase/firebase";
import "./navbar.css"

const NavBar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <>
   
    <nav className="navBar">
      <div>
        <NavLink className="navLink" to="/">Nomadr Movie Store</NavLink>
      </div>
      <div className="navBarLink">
        <div>
        {currentUser ? (<NavLink className="navLink" to="/login" onClick={() => logOut()}>Log Out</NavLink>): <NavLink className="navLink" to="/login">Login</NavLink>}
        </div>
        
        <div><NavLink className="navLink" to="/register">Register</NavLink></div>
        
       {/* {currentUser && ( <div> <span> Welcome {currentUser.displayName} </span></div>)} */}
      </div>
      
    </nav>
    <div className="belowFixedDiv"></div>
    </>
  );
};

export default NavBar;
