function Login() {
    
    return(
       <div class="logindiv">
        <h2>Welcome Back to<br/> When2Sleep!</h2>

        <div class="containerLogin">
       <input name="email" type="email" class="loginform" id="exampleFormControlInput1" placeholder="Email" required></input><br/>
       <input name="password" type="password" class="loginform" id="exampleFormControlInput2" placeholder="Password" required></input><br/>
       <a class="resetpassword" href="/reset">Forgot Your Password?</a><br/>
       <button type="submit" class="btn btn-primary">Log In</button><br/>
       <a class="resetpassword" href="/signup">New? Sign up here!</a>
       </div>
       <img class="light" src="../../images/starMoon.png"/>
       </div>);
    }
    
    export default Login;