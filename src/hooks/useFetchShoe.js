import { useState, useEffect } from "react";

import { getShoeById } from "../api/api"; 

const useFetchShoe = (shoeId) => {
  
  const [shoe, setShoe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchShoe = async () => {
      try {
        const shoeData = await getShoeById(shoeId);
        setShoe(shoeData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (shoeId) {
      fetchShoe();
    }
  }, [shoeId]);

  return { shoe, isLoading, error };
};

export default useFetchShoe;