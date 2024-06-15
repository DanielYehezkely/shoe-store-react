import React from "react";

import { Loader, ErrorMessage } from "../../components";
import { useFetchShoes } from "../../context/FetchShoesContext";

import './PanelPage.css'
import PanelTable from "../../components/PanelTable/PanelTable";

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
