import { AuthContext } from './signIn';
import React, { useContext, useEffect, useState } from 'react'; 
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';


function Login() {

  useEffect(() => {
   const storedUser = sessionStorage.getItem('user');
   if (storedUser) {
     setUser(JSON.parse(storedUser));
   }
 }, []);

 const handleLoginSuccess = async (credentialResponse) => {
  const userObject = jwtDecode(credentialResponse.credential);
  setUser(userObject);
  sessionStorage.setItem('user', JSON.stringify(userObject)); 
  console.log(userObject.name);

  const apiEndpoint = 'http://localhost:3000/login'; 

  console.log("Sending data:", { name: userObject.name });
    await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: userObject.name }),
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => {
      console.error('Error:', error);
    });
};
 const login = useGoogleLogin({
   onSuccess: tokenResponse => console.log(tokenResponse),
 });

 const [user, setUser] = useState({})

 const generateAvatar = (username) => {
   const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33F5', '#F5FF33'];
   const firstLetter = username ? username[0].toUpperCase() : '';
   const colorIndex = username ? username.charCodeAt(0) % colors.length : 0;
   return { letter: firstLetter, color: colors[colorIndex] };
 }

    return(

       <div className="logindiv">
        <h2>Welcome Back to<br/> When2Sleep!</h2>

        <div className="containerLogin">
       <input name="email" type="email" className="loginform" id="exampleFormControlInput1" placeholder="Email" required></input><br/>
       <input name="password" type="password" className="loginform" id="exampleFormControlInput2" placeholder="Password" required></input><br/>
       <a className="resetpassword" href="/reset">Forgot Your Password?</a><br/>

       
       <button type="submit" className="btn btn-primary">Log In</button><br/>
       
       <div className='App'>
    {!user.name && (
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    )}

    {user && user.name &&
      <>
        <div style={{ 
          width: '50px', 
          height: '50px', 
          backgroundColor: generateAvatar(user.name).color, 
          borderRadius: '25px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'white',
          fontSize: '20px',
        }}>
          {generateAvatar(user.name).letter}
        </div>
        <h3 style={{fontSize:'30px'}}>{user.name}</h3>
      </>
    }
  </div>


       <a className="resetpassword" href="/signup">New? Sign up here!</a>
       </div>
       <img className="light" src="../../images/starMoon.png"/>
       </div>);
    }
    
    export default Login;