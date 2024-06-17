import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { ShoeGenericForm, ErrorMessage, Loader } from "../../components";

import './EditPage.css';
import { useFetchShoes } from "../../context/FetchShoesContext";

const EditPage = () => {

  const { shoeId } = useParams();
  const { singleShoe, isSingleShoeLoading, singleShoeError, fetchShoeById } = useFetchShoes();

  useEffect(() => {
    if (shoeId) {
      fetchShoeById(shoeId);
    }

  }, [shoeId]);


  return (
    <div className="EditPage">
      {isSingleShoeLoading ? (
        <Loader />
      ) : singleShoeError ? (
        <ErrorMessage message={error} />
      ) : (
        <ShoeGenericForm shoe={singleShoe} />
      )}
    </div>
  );
};

export default EditPage;