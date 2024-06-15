import React from "react";
import { NavLink } from "react-router-dom";
import { GiSonicShoes } from "react-icons/gi";

import { useAdmin } from "../../../context/CheckAdminContext";

import './NavBar.css'

const NavBar = () => {
  const { isAdmin, logout } = useAdmin();

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar-logo">Shoes <GiSonicShoes /></div>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'isActive' : '')} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shoes" className={({ isActive }) => (isActive ? 'isActive' : '')} end>
              Shoes
            </NavLink>
          </li>
          {isAdmin && (
            <>
              <li>
                <NavLink to="/shoes/add" className={({ isActive }) => (isActive ? 'isActive' : '')}>
                  Add Shoe
                </NavLink>
              </li>
              <li>
                <NavLink to="/shoes/panel" className={({ isActive }) => (isActive ? 'isActive' : '')}>
                  Panel
                </NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={() => logout()} className={({ isActive }) => (isActive ? 'isActive' : '')}>
                  Log out
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;

