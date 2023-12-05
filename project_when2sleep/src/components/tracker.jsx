import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react'



function Tracker() {

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    const userObject = jwtDecode(credentialResponse.credential);
    console.log(userObject);
    setUser(userObject);
    sessionStorage.setItem('user', JSON.stringify(userObject)); 
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

 
return (
    <div className='cdiv'>
    <h2>Sleep Tracker</h2>
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
          fontSize: '20px'
        }}>
          {generateAvatar(user.name).letter}
        </div>
        <h3>{user.name}</h3>

      </>
    }

    {!user.name && (
      <p>Please log in to continue.</p>
    )}
    </div>
    <img id='preview' src="../../images/clearpreview.png"/>
  </div>
    
);
}
export default Tracker;