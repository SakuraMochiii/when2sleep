import { useState } from 'react'
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



function App() {
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
  }
])

  return (
    <>
      <Navigate title="When2Sleep"/>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App
