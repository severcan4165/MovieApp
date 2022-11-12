import React from 'react'
import "./register.css"

const Register = () => {
  return (
    <div class="formContainer">
    <h2 class="formTitle">Register</h2>
    <form action="#">
        <div class="userInfo">
            <div class="firstName inputBox">
                <label htmlFor="firstname" class="labels">First Name</label><br/>
                <input type="text" placeholder="Enter Your First Name" class="inputArea" id="firstname" required />
            </div>
            <div class="LastName inputBox">
                <label htmlFor="lastname" class="labels">Last Name</label><br/>
                <input type="text" placeholder="Enter Your Last Name" class="inputArea" id="lastname" required />
            </div>
            <div class="email inputBox">
                <label htmlFor="email" class="labels">Email</label><br/>
                <input type="text" placeholder="Enter Your Email" class="inputArea" id="email" required />
            </div>

            <div class="password inputBox">
                <label htmlFor="password" class="labels">Password</label><br/>
                <input type="text" placeholder="Enter Your Password" class="inputArea" id="password" required />
            </div>
        </div>

        <div class="buttonSubmitDiv">
            <input class="buttonSubmit btn1" type="submit" value="Sign in" />
            <input class="buttonSubmit btn2" type="submit" value="Sign in with google" />
        </div>
    </form>
</div>
  )
}

export default Register