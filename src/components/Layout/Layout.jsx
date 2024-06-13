import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import { useAdmin } from "../../context/CheckAdminContext";

import './Layout.css';

const Layout = () => {
  const { isAdmin, logout } = useAdmin();

  return (
    <div>
      <nav className="nav-bar">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/shoes">Shoes</NavLink></li>
          {isAdmin &&
            (<li><NavLink to="/shoes/add">Add Shoe</NavLink></li>) &&
            (<li><NavLink to="/" onClick={() => logout()}>Log out</NavLink></li>)}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
