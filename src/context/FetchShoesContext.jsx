import React, { createContext, useState, useContext, useEffect } from 'react';

import {getShoes} from '../api/api'

const FetchShoesContext = createContext();

export const FetchShoesProvider = ({ children }) => {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [shoes, setShoes] = useState([]);

  const fetchShoes = async () => {
    setError(null);
    try {
      const shoes = await getShoes();
      setShoes(shoes)
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
  
    fetchShoes();
  }, []);




  return (
    <FetchShoesContext.Provider value={{error, isLoading, shoes}}>
      {children}
    </FetchShoesContext.Provider>
  );
};


export const useFetchShoes = () => useContext(FetchShoesContext);