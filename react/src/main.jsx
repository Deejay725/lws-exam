import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
import Nav from './pages/Nav.jsx'
import Aboutus from './pages/Aboutus.jsx'
import NotFound from './pages/NotFound.jsx'
import Discover from './pages/Discover.jsx'
import './index.css'



const router= createBrowserRouter([
    {
    path: '/',
    element: <Nav />,
    errorElement:<NotFound />,
    },
    {
        path: '/Discover',
        element: <Discover />,
    },
    {
        path: '/Aboutus',
        element: <Aboutus />,
    },



]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
