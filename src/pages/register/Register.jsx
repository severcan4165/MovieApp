import React, { useState } from "react";
import "./register.css";
// import { createUser } from "../../firebase/firebase";

const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email, password,firstName, lastName );
    // createUser(email, password);
  }
  return (
    <div className="registerContainer">
     
    
     
      <div className="formContainer">
        <h2 className="formTitle">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="userInfo">
            <div className="firstName inputBox">
              <label htmlFor="firstname" className="labels">
                First Name
              </label>
              <br />
              <input
                onChange={(e)=>setFirstName(e.target.value)}
                type="text"
                placeholder="Enter Your First Name"
                className="inputArea"
                id="firstname"
                required
              />
            </div>
            <div className="LastName inputBox">
              <label htmlFor="lastname" className="labels">
                Last Name
              </label>
              <br />
              <input
              onChange={(e)=>setLastName(e.target.value)}
                type="text"
                placeholder="Enter Your Last Name"
                className="inputArea"
                id="lastname"
                required
              />
            </div>
            <div className="email inputBox">
              <label htmlFor="email" className="labels">
                Email
              </label>
              <br />
              <input
              onChange={(e)=>setEmail(e.target.value)}
                type="text"
                placeholder="Enter Your Email"
                className="inputArea"
                id="email"
                required
              />
            </div>

            <div className="password inputBox">
              <label htmlFor="password" className="labels">
                Password
              </label>
              <br />
              <input
              onChange={(e)=>setPassword(e.target.value)}
                type="text"
                placeholder="Enter Your Password"
                className="inputArea"
                id="password"
                required
              />
            </div>
          </div>

          <div className="buttonSubmitDiv">
            <input className="buttonSubmit btn1" type="submit" value="Sign in" />
            <input
              className="buttonSubmit btn2"
              type="submit"
              value="Sign in with google"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
