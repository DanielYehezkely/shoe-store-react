import React, { createContext, useState, useContext, useEffect } from 'react';

import { getShoeById, getShoes } from '../api/shoeApi'

const FetchShoesContext = createContext();

export const FetchShoesProvider = ({ children }) => {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [shoes, setShoes] = useState([]);
  const [singleShoe, setSingleShoe] = useState(null);
  const [isSingleShoeLoading, setIsSingleShoeLoading] = useState(false);
  const [singleShoeError, setSingleShoeError] = useState(null);

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
  
  const fetchShoeById = async (shoeId) => {
    setSingleShoeError(null);
    setIsSingleShoeLoading(true);
    try {
      const shoeData = await getShoeById(shoeId);
      setSingleShoe(shoeData);
    } catch (error) {
      setSingleShoeError(error.message);
    } finally {
      setIsSingleShoeLoading(false);
    }
  };



  return (
    <FetchShoesContext.Provider value={{error, isLoading, shoes, fetchShoes, fetchShoeById, isSingleShoeLoading, singleShoeError, singleShoe}}>
      {children}
    </FetchShoesContext.Provider>
  );
};


export const useFetchShoes = () => useContext(FetchShoesContext);