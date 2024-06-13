import React, { createContext, useState, useContext } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  
  const loginAsAdmin = () => setIsAdmin(true);
  const logout = () => setIsAdmin(false);
  
  return (
    <AdminContext.Provider value={{ isAdmin, loginAsAdmin, logout }}>
      {children}
    </AdminContext.Provider>
  );
  };


export const useAdmin = () => useContext(AdminContext);