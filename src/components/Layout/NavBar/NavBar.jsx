import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { useAdmin } from "../../../context/CheckAdminContext";
import ICONS from "../../../models/icons";

import './NavBar.css'

const NavBar = () => {
  const { isAdmin, logout } = useAdmin();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar-logo">
          Shoes <ICONS.Shoes />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <ICONS.Bars /> : <ICONS.CloseX />}
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
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
          {!isAdmin && (
            <li>
              <NavLink to="/shoes/contact" className={({ isActive }) => (isActive ? 'isActive' : '')} end>
                Contact
              </NavLink>
            </li>
          )}
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


