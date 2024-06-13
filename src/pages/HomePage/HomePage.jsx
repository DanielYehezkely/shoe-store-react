import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { useAdmin } from '../../context/CheckAdminContext';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import HomePageForm from '../../components/HomePageForm/HomePageForm';
import { ADMIN } from '../../models/constants';

import './HomePage.css';

const HomePage = () => {
  
  const { isAdmin, loginAsAdmin } = useAdmin();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleLogin = (username, password) => {
    setError(false);
    if (username === ADMIN.username && password === ADMIN.password) {
      loginAsAdmin();
      navigate('/shoes');
    } else {
      setError(true);
    }
  };

  return (
    <div className="page HomePage">
      <div className="home-page-image1"></div>
      <div className="home-page-image2"></div>
      <main className="home-page-main">
        <h1 className="home-page-title">Welcome to Shoes</h1>
        <button className='enter-store-button'>
          <NavLink to="/shoes">Running in!</NavLink>
        </button>
        {!isAdmin && (
          <HomePageForm handleLogin={handleLogin} error={error} />
        )}
        {error && <ErrorMessage error={'One of the credentials is incorrect.'} />}
      </main>
    </div>
  );
};

export default HomePage;


