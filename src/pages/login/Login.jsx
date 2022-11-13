
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { signIn } from '../../firebase/firebase'
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const {currentUser} =useContext(AuthContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email, password);
    signIn(email,password, navigate, currentUser)
  }
  return (
    <div className='loginContainer'>
      <div className="loginFormContainer">
        <h2 className="formTitle">Sign in</h2>
        <form onSubmit={handleSubmit}>
            <div className="userInfo">
                <div className="email inputBox">
                    <label htmlFor="email" className="labels">Email</label><br/>
                    <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Your Email" className="inputArea" id="email" required />
                </div>

                <div className="password inputBox">
                    <label htmlFor="password" className="labels">Password</label><br/>
                    <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Enter Your Password" className="inputArea" id="password" required />
                </div>
            </div>

            <div className="buttonSubmitDiv">
                <input className="buttonSubmit btn1" type="submit" value="Sign in" />
                <input className="buttonSubmit btn2" type="submit" value="Sign in with google" />
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login