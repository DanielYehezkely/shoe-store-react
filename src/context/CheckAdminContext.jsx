import React, { createContext, useState, useContext, useEffect } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const loginAsAdmin = () => {
    setIsAdmin(true);
    localStorage.setItem('isAdmin', 'true'); 
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin'); 
  };

  useEffect(() => {
    
    const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';
    if (storedIsAdmin) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <AdminContext.Provider value={{ isAdmin, loginAsAdmin, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);