import { useContext, useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { AuthContext } from './authContext';


function Login() {
 const { user, setUser } = useContext(AuthContext);
 const [loginError, setLoginError] = useState('');

 const handleLoginSuccess = async (credentialResponse) => {
  const credential = credentialResponse.credential;
  if (!credential) {
    setLoginError('Google did not return a valid credential.');
    return;
  }

  const apiEndpoint = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  try {
    const response = await fetch(`${apiEndpoint.replace(/\/$/, '')}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ credential }),
    });

    if (!response.ok) {
      throw new Error('The server rejected the Google sign-in.');
    }

    const userObject = jwtDecode(credential);
    setUser(userObject);
    sessionStorage.setItem('user', JSON.stringify(userObject));
    setLoginError('');
  } catch (error) {
    console.error('Login failed:', error);
    setLoginError('Unable to sign in. Please try again.');
  }
};

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
          setLoginError('Google sign-in failed.');
        }}
      />
    )}
    {loginError && <p role="alert">{loginError}</p>}

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
