import React from "react";
import { useParams } from "react-router-dom";

import ShoeGenericForm from "../../components/ShoeGenericForm/ShoeGenericForm";
import useFetchShoe from "../../hooks/useFetchShoe";
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

import './EditPage.css';

const EditPage = () => {

  const { shoeId } = useParams();
  const { shoe, isLoading, error } = useFetchShoe(shoeId);


  return (
    <div className="EditPage">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <ShoeGenericForm shoe={shoe} />
      )}
    </div>
  );
};

export default EditPage;