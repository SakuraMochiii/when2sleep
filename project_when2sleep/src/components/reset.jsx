function Reset() {
    
    return(
       <div className="logindiv">
        <h2>Reset Your <br/>Password</h2>

        <div className="containerLogin">
        <p className="enterEmail">Enter your Email</p>
       <input name="email" type="email" className="loginform" id="exampleFormControlInput1" placeholder="Email" required></input><br/>
       <button type="submit" className="btn btn-primary">Reset Password</button><br/>
       </div>
       <img className="light" src="../../images/starMoon.png"/>
       </div>);
    }
    
    export default Reset;
