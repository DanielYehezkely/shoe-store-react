import React from "react";

import { useAdmin } from "../../../context/CheckAdminContext";
import { NavLink } from "react-router-dom";

import './NavBar.css'

const NavBar = () => {

  const { isAdmin, logout } = useAdmin();

  return (
     <>
      <nav className="nav-bar">
        <div className="nav-bar-logo">Shoes <i class="fa-solid fa-shoe-prints"></i></div>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/shoes">Shoes</NavLink></li>
          {isAdmin && (
            <>
              <li><NavLink to="/shoes/add">Add Shoe</NavLink></li>
              <li><NavLink to="/" onClick={() => logout()}>Log out</NavLink></li>
            </>
          )}
        </ul>
      </nav>
     </>
  )
};

export default NavBar;
