import React, { useState } from "react";
import { useNavigate } from "react-router";

import { useFetchShoes } from "../../../context/FetchShoesContext";

import Loader from "../../Loader/Loader";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";


const DeleteButton = ({ shoeId }) => {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { deleteExistingShoe } = useFetchShoes();
  const navigate = useNavigate();

  const handleDelete = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await deleteExistingShoe(shoeId); 
      navigate('/shoes');
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="DeleteButtonWrapper">
      {error ? (
        <ErrorMessage error={error} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <button className="btn DeleteButton" onClick={handleDelete}>
          Delete Shoe
        </button>
      )}
    </div>
  );
};

export default DeleteButton;
