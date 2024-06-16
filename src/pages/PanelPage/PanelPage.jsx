import React from "react";

import { Loader, ErrorMessage } from "../../components";
import { useFetchShoes } from "../../context/FetchShoesContext";

import {PanelTable} from "../../components";

import './PanelPage.css'


const PanelPage = () => {
  const { shoes, isLoading, error } = useFetchShoes();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='PanelPage'>
          {error ? (
            <ErrorMessage error={error.message} />
          ) : (
           <PanelTable shoes={shoes}/>
          )}
        </div>
      )}
    </>
  );
};

export default PanelPage;
