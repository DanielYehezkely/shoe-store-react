import React, { useState } from 'react';

import ICONS from '../../models/icons';

import './HomePageForm.css';

const HomePageForm = ({ handleLogin, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  const inputClass = error ? 'input-error' : '';

  return (
    <form onSubmit={onSubmit} className='HomePageForm'>
      <h1>Admin Log-in</h1>
      <div className='form-group'>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={inputClass}
        />
      </div>
      <div className='form-group'>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
        />
      </div>
      <button type="submit" className='btn'>Login <ICONS.LogIn /></button>
    </form>
  );
};

export default HomePageForm;
