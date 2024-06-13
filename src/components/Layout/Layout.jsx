import React from "react";
import { Outlet } from "react-router-dom";


import './Layout.css';
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

const Layout = () => {
  

  return (
    <div>
      <NavBar/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
