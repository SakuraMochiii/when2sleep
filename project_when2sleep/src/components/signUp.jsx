function SignUp() {
    
    return(
       <div class="logindiv">
        <h2>Welcome to<br/> When2Sleep!</h2>

        <div class="containerLogin">
       <input name="email" type="email" class="loginform" id="exampleFormControlInput1" placeholder="Email" required></input><br/>
       <input name="password" type="password" class="loginform" id="exampleFormControlInput2" placeholder="Password" required></input><br/>
       <input name="password" type="password" class="loginform" id="exampleFormControlInput3" placeholder="Confirm Password" required></input><br/>
       <a class="resetpassword" href="/login">Already have an account? <br/> &nbsp;Log in here!</a>
       <button type="submit" class="btn btn-primary">Sign Up</button><br/>
       </div>
       <img src="../../images/starMoon.png"/>
       </div>);
    }
    
    export default SignUp;