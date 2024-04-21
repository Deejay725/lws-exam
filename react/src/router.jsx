import { Navigate, createBrowserRouter }  from "react-router-dom";

import Login from "./views/Login";
import Signup from "./views/Signup";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import DefaultLayout from "./component/DefaultLayout";
import Guestlayout from "./component/Guestlayout";
import Dashboard from "./views/Dashboard";


const router = createBrowserRouter([

  {
    path: '/',
    element:<DefaultLayout/>,
    children:
    [
      {
        path: '/',
        element: <Navigate to="/users"/>
      },
      {
        path:'dashboard',
        element: <Dashboard/>

      },
      {
        path:'/',
        element: <Users/>

      },
      {
        path: '/users',
        element: <Users/>,

       },

    ]
  },
  {
    path: '/',
    element:<Guestlayout/>,
    children:
    [
      {
        path: '/Login',
        element: <Login/>,

      },
      {
        path: '/Signup',
        element: <Signup/>,

       },

    ]
  },



   {
    path: '*',
    element: <NotFound/>
},





]);
export default router;
