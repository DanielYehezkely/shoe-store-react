import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Loader, SingleShoeCard } from "../../components";

import useFetchShoe from "../../hooks/useFetchShoe";

import './ShoePage.css';

const ShoePage = () => {
  const { shoeId } = useParams(); 
  const { shoe, isLoading, error } = useFetchShoe(shoeId);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate('/not-found');
    }
  }, [error, navigate]);

  return (
    <div className="ShoePage">
      {isLoading ? (
        <Loader />
      ) : (
        shoe ? (
          <SingleShoeCard shoe={shoe} />
        ) : (
          <p>{error}</p>
        )
      )}
    </div>
  );
};

export default ShoePage;