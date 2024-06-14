import React from "react";

import { useFetchShoes } from "../../context/FetchShoesContext";
import Loader from '../../components/Loader/Loader';
import ShoeCard from "../../components/ShoeCard/ShoeCard";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import './ShoesPage.css';

const ShoesPage = () => {

  const { error, isLoading, shoes } = useFetchShoes();

  return (
    <>
      <div className="ShoesPage">
        <div className="shoes-gallery">
          {isLoading ? <Loader /> : (
            shoes.map(shoe => (
              <ShoeCard key={shoe.id} shoe={shoe} />
            ))
          )}
        </div>
        {error && <ErrorMessage error={error}/>} 
      </div>
    </>
  );
};

export default ShoesPage;
