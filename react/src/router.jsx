import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import DefaultLayout from "./component/DefaultLayout";
import Guestlayout from "./component/Guestlayout";
import Dashboard from "./views/Dashboard";
import Navbar from "./component/Navbar";
import HomePage from "./views/HomePage";
// Import the HomePage component

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" /> // Redirect to home by default
      },
      {
        path: 'home',
        element: <HomePage/> // This will render the HomePage component
      },
      {
        path: 'dashboard',
        element: <Dashboard/>
      },
      {
        path: 'users',
        element: <Users/>
      },
    ]
  },
  {
    path: '/',
    element: <Guestlayout/>,
    children: [
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'signup',
        element: <Signup/>
      },
    ]
  },
  {
    path: 'navbar',
    element: <Navbar/>
  },
  {
    path: '*',
    element: <NotFound/>
  },
]);

export default router;
