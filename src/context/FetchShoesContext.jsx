import React, { createContext, useState, useContext, useEffect } from 'react';
import { getShoes, getShoeById, addShoe, updateShoe, deleteShoe } from '../api/shoeApi';

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
    setIsLoading(true);
    try {
      const shoesData = await getShoes();
      setShoes(shoesData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

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

  const addNewShoe = async (shoeData) => {
    try {
      await addShoe(shoeData);
      fetchShoes(); 
    } catch (error) {
      throw new Error(error.message); 
    }
  };

  const updateExistingShoe = async (shoeData) => {
    try {
      await updateShoe(shoeData);
      fetchShoes(); 
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const deleteExistingShoe = async (shoeId) => {
    setError(null);
    setIsLoading(true);
    try {
      await deleteShoe(shoeId);
      fetchShoes();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchShoes();
  }, []);

  return (
    <FetchShoesContext.Provider value={{
      error,
      isLoading,
      shoes,
      fetchShoes,
      fetchShoeById,
      isSingleShoeLoading,
      singleShoeError,
      singleShoe,
      addNewShoe,
      updateExistingShoe,
      deleteExistingShoe
    }}>
      {children}
    </FetchShoesContext.Provider>
  );
};

export const useFetchShoes = () => useContext(FetchShoesContext);