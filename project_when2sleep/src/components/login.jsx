import { AuthContext } from './signIn';
import React, { useContext, useEffect, useState } from 'react'; 


function Login() {

    return(
      
       <div className="logindiv">
        <h2>Welcome Back to<br/> When2Sleep!</h2>

        <div className="containerLogin">
       <input name="email" type="email" className="loginform" id="exampleFormControlInput1" placeholder="Email" required></input><br/>
       <input name="password" type="password" className="loginform" id="exampleFormControlInput2" placeholder="Password" required></input><br/>
       <a className="resetpassword" href="/reset">Forgot Your Password?</a><br/>

       

       <a className="resetpassword" href="/signup">New? Sign up here!</a>
       </div>
       <img className="light" src="../../images/starMoon.png"/>
       </div>);
    }
    
    export default Login;