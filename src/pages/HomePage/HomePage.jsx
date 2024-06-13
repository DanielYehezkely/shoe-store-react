
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAdmin } from "../../context/CheckAdminContext"; 
import './HomePage.css';

const HomePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { loginAsAdmin, isAdmin } = useAdmin(); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin12341234') {
      loginAsAdmin(); 
      navigate('/shoes');
    } else {
      alert("Invalid credentials. Only admin can log in.");
    }
  };

  return (
    <div>
      <h1>Welcome to the Shoe Store</h1>
      {isAdmin ? '' : (<form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>)}
      
      <button>
        <NavLink to="/shoes">Go to Shoes</NavLink>
      </button>
    </div>
  );
};

export default HomePage;
