
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { signIn, signInGoogle } from '../../firebase/firebase'
import LoginStyle from "./login.module.scss"

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
  const handleGoogle = (e) =>{
    e.preventDefault();
    signInGoogle(navigate);
    
  }

  return (
    <div className={LoginStyle.loginContainer}>
      <div className={LoginStyle.loginFormContainer}>
        <h2 className={LoginStyle.formTitle}>Sign in</h2>
        <form onSubmit={handleSubmit}>
            <div className={LoginStyle.userInfo}>
                <div className={ `${LoginStyle.email} ${LoginStyle.inputBox}`} >
                    <label htmlFor="email" className={LoginStyle.labels}>Email</label><br/>
                    <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter Your Email" className={LoginStyle.inputArea} id="email" required />
                </div>

                <div className={`${LoginStyle.password} ${LoginStyle.inputBox}` }>
                    <label htmlFor="password" className={LoginStyle.labels}>Password</label><br/>
                    <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Enter Your Password" className={LoginStyle.inputArea} id="password" required />
                </div>
            </div>

            <div className={LoginStyle.buttonSubmitDiv}>
                <input className={`${LoginStyle.buttonSubmit} ${LoginStyle.btn1}`} type="submit" value="Sign in" />
                <input className={`${LoginStyle.buttonSubmit} ${LoginStyle.btn1}`} type="submit" value="Sign in with google"  onClick={handleGoogle}/>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login