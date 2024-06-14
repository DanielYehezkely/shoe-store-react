import React from "react";
import { useParams } from "react-router-dom";

import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import useFetchShoe from "../../hooks/useFetchShoe";

import './ShoePage.css';
import SingleShoeCard from "../../components/SingleShoeCard/SingleShoeCard";

const ShoePage = () => {

  const { shoeId } = useParams(); 
  const { shoe, isLoading, error } = useFetchShoe(shoeId); 

  return (
    <div className="ShoePage">
      {isLoading ? <Loader/> : (
        <SingleShoeCard shoe={shoe}/>
      )}
      {error ? <ErrorMessage error={error}/> : ''}
    </div>
  );
};

export default ShoePage;