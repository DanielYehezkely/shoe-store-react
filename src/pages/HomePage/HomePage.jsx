import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ErrorMessage, HomePageForm } from '../../components';
import { useAdmin } from '../../context/CheckAdminContext';
import { ADMIN } from '../../models/constants';
import ICONS from '../../models/icons';

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
        <h1 className="home-page-title">Welcome to Shoes </h1>
        <ICONS.Shoes className='shoes-icon' />
        <Link to="/shoes" className='btn'>{isAdmin ? 'Welcome Admin' : 'Start Shopping'}<ICONS.ArrowRight /> </Link>
        {!isAdmin && (
          <HomePageForm handleLogin={handleLogin} error={error} />
        )}
        {error && <ErrorMessage error={'One of the credentials is incorrect.'} />}
      </main>
    </div>
  );
};

export default HomePage;


