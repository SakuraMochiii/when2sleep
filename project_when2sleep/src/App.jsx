import { useState } from 'react'
import './App.css'
import Navigate from './components/navigate';
import MainPage from './components/mainPage';
//import Track from './components/Track';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function App() {
  //const [count, setCount] = useState(0)
  const router = createBrowserRouter([{
    path: '/',
    element: <MainPage/>,
  }//,{
   // path: "/track",
   // element: <Track/>,
  //}
])

  return (
    <>
      <Navigate title="When2Sleep"/>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App
