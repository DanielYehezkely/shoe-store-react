import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Loader, SingleShoeCard } from "../../components";
import { useFetchShoes } from "../../context/FetchShoesContext";

import './ShoePage.css';

const ShoePage = () => {
  const { shoeId } = useParams(); 
  const { singleShoe, isSingleShoeLoading, singleShoeError, fetchShoeById } = useFetchShoes();
  const navigate = useNavigate();

  useEffect(() => {
    if (singleShoeError) {
      navigate('/not-found');
    }
  }, [singleShoeError, navigate]);

  useEffect(() => {
    if (shoeId) {
      fetchShoeById(shoeId);
    }
    
  }, [shoeId]);

  return (
    <div className="ShoePage">
      {isSingleShoeLoading ? (
        <Loader />
      ) : (
        singleShoe ? (
          <SingleShoeCard shoe={singleShoe} />
        ) : (
          <p>{singleShoeError}</p>
        )
      )}
    </div>
  );
};

export default ShoePage;