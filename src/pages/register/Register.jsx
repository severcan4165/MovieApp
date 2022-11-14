import React, { useState } from "react";
import RegisterStyle from"./register.module.scss";
import { createUser, signInGoogle} from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

const navigate = useNavigate();
const displayName = `${firstName} ${lastName}`;
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email, password,firstName, lastName );
    createUser(email, password, navigate, displayName);
  }

const handleGoogle = (e) =>{
  e.preventDefault();
  signInGoogle(navigate);
  
}
  return (
    <div className={RegisterStyle.registerContainer}>
     
    
     
      <div className={RegisterStyle.formContainer}>
        <h2 className={RegisterStyle.formTitle}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className={RegisterStyle.userInfo}>
            <div className={`${RegisterStyle.firstName} ${RegisterStyle.inputBox}`}>
              <label htmlFor="firstname" className={RegisterStyle.labels}>
                First Name
              </label>
              <br />
              <input
                onChange={(e)=>setFirstName(e.target.value)}
                type="text"
                placeholder="Enter Your First Name"
                className={RegisterStyle.inputArea}
                id="firstname"
                required
              />
            </div>
            <div className={`${RegisterStyle.LastName} ${RegisterStyle.inputBox}`}>
              <label htmlFor="lastname" className={RegisterStyle.labels}>
                Last Name
              </label>
              <br />
              <input
              onChange={(e)=>setLastName(e.target.value)}
                type="text"
                placeholder="Enter Your Last Name"
                className={RegisterStyle.inputArea}
                id="lastname"
                required
              />
            </div>
            <div className={`${RegisterStyle.email} ${RegisterStyle.inputBox}`}>
              <label htmlFor="email" className={RegisterStyle.labels}>
                Email
              </label>
              <br />
              <input
              onChange={(e)=>setEmail(e.target.value)}
                type="text"
                placeholder="Enter Your Email"
                className={RegisterStyle.inputArea}
                id="email"
                required
              />
            </div>

            <div className={`${RegisterStyle.password} ${RegisterStyle.inputBox}`}>
              <label htmlFor="password" className={RegisterStyle.labels}>
                Password
              </label>
              <br />
              <input
              onChange={(e)=>setPassword(e.target.value)}
                type="text"
                placeholder="Enter Your Password"
                className={RegisterStyle.inputArea}
                id="password"
                required
              />
            </div>
          </div>

          <div className={RegisterStyle.buttonSubmitDiv}>
            <input className={`${RegisterStyle.buttonSubmit} ${RegisterStyle.btn1}`} type="submit" value="Register" />
            <input
              className={`${RegisterStyle.buttonSubmit} ${RegisterStyle.btn2}`}
              type="button"
              value="Register with google"
              onClick={handleGoogle}
              />
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
