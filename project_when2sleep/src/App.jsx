import { useEffect, useState } from 'react'
import './App.css'
import Navigate from './components/navigate';
import MainPage from './components/mainPage';
import Login from './components/login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './components/signUp';
import Reset from './components/reset';
import Tracker from './components/tracker';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';



function App() {

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

  const router = createBrowserRouter([{
    path: '/',
    element: <MainPage/>,
  },{
    path: "/login",
    element: <Login/>,
  },{
    path: "/signup",
    element: <SignUp/>,
  },{
    path: "/reset",
    element: <Reset/>,
  },{
    path: "/tracker",
    element: <Tracker/>,
  }
])

return (
      <>
        <Navigate title="When2Sleep" />
        <RouterProvider router={router} />
     </>
);
}

export default App
