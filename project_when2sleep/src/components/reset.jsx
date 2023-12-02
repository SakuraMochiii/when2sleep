function Reset() {
    
    return(
       <div class="logindiv">
        <h2>Reset Your <br/>Password</h2>

        <div class="containerLogin">
        <p class="enterEmail">Enter your Email</p>
       <input name="email" type="email" class="loginform" id="exampleFormControlInput1" placeholder="Email" required></input><br/>
       <button type="submit" class="btn btn-primary">Reset Password</button><br/>
       </div>
       <img class="light" src="../../images/starMoon.png"/>
       </div>);
    }
    
    export default Reset;