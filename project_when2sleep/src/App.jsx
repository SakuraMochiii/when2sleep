import { useState } from 'react'
import './App.css'
import Navigate from './components/navigate';
import MainPage from './components/mainPage';
import Login from './components/login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <MainPage/>,
  },{
    path: "/login",
    element: <Login/>,
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
