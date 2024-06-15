import React from "react";
import { useNavigate } from "react-router-dom"; 

import './NotFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate(); 

  const goToHome = () => {
    navigate('/'); 
  };

  return (
    <div className="NotFoundPage">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-message-not-found">Oops! This Page Could Not Be Found</h2>
        <p className="error-description">
          Sorry, but the page you are looking for does not exist, has been removed, or is temporarily unavailable.
        </p>
        <button className="home-button-not-found" onClick={goToHome}>
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;