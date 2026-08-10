function SignUp() {
    
    return(
       <div className="logindiv">
        <h2>Welcome to<br/> When2Sleep!</h2>

        <div className="containerLogin">
       <input name="email" type="email" className="loginform" id="exampleFormControlInput1" placeholder="Email" required></input><br/>
       <input name="password" type="password" className="loginform" id="exampleFormControlInput2" placeholder="Password" required></input><br/>
       <input name="password" type="password" className="loginform" id="exampleFormControlInput3" placeholder="Confirm Password" required></input><br/>
       <a className="resetpassword" href="/login">Already have an account? <br/> &nbsp;Log in here!</a>
       <button type="submit" className="btn btn-primary">Sign Up</button><br/>
       </div>
       <img className="light" src="../../images/starMoon.png"/>
       </div>);
    }
    
    export default SignUp;
