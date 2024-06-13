import React from 'react';

import './HomePageForm.css';

const HomePageForm = ({ username, password, setUsername, setPassword, handleLogin }) => {
  return (
    <>
      <form onSubmit={handleLogin} className='HomePageForm'>
      <h1>Admin Log-in</h1>
        <div className='form-group'>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className='enter-store-button'>Login</button>
      </form>
      
    </>
  );
};

export default HomePageForm;
