import React from "react";
import { Outlet } from "react-router-dom";

import './Layout.css';
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <div className="layout-container">
      <NavBar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;