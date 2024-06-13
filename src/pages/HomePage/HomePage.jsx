import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useAdmin } from '../../context/CheckAdminContext';
import { ADMIN } from '../../models/constants';
import HomePageForm from '../../components/HomePageForm/HomePageForm'; 

import './HomePage.css';

const HomePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loginAsAdmin, isAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN.username && password === ADMIN.password) {
      loginAsAdmin();
      navigate('/shoes');
    } else {
      alert("Invalid credentials. Only admin can log in.");
    }
  };

  return (
    <div className="page HomePage">
      <div className="home-page-image1"></div>
      <div className="home-page-image2"></div>
      <main className="home-page-main">
        <h1 className="home-page-title">Welcome to Shoes </h1>
        <button className='enter-store-button'>
          <NavLink to="/shoes">Runing in !</NavLink>
        </button>
        {!isAdmin && (
          <HomePageForm
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />)}
      </main>
    </div>
  );
};

export default HomePage;
