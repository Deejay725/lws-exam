/* eslint-disable react/jsx-no-undef */
import {Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Users from "../views/Users";

export default function DefaultLayout() {
  const {token} = useStateContext()

  if (!token) {
    return <Navigate to ="/Login"/>
  }

    const onLogout =(ev) => {
      ev.preventDefault()

    }

  return (
    <div id="defaultLayout">
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </aside>
   <div className="content">
      <header>
        <div>
          Header
        </div>
        <div>
          {Users.name}
          <a href="#" onClick={onLogout} className="btn-logout">Logout</a>
        </div>
      </header>
      <main>
        <Outlet/>
      </main>

    </div>
    </div>
  )
}
