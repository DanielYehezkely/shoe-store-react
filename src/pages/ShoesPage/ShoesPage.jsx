import React from "react";

import { Loader, ShoeCard, ErrorMessage } from "../../components";

import { useFetchShoes } from "../../context/FetchShoesContext";

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
