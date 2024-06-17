import React, { useState } from "react";

import { Loader, ErrorMessage, ShoesTable } from "../../components";
import { useFetchShoes } from "../../context/FetchShoesContext";
import { useFetchUsers } from "../../context/FetchUsersContext";
import ICONS from "../../models/icons";
import UsersTable from "../../components/Panel/UsersTable/UsersTable";


import './PanelPage.css'

const PanelPage = () => {
  const [showShoesTable, setShowShoesTable] = useState(false);
  const [showUsersTable, setShowUsersTable] = useState(false);

  const { shoes, isLoading, error } = useFetchShoes();
  const { usersCalls, isLoadingUsers, usersError } = useFetchUsers();

  const handleShoesClick = () => {
    setShowShoesTable((prev) => !prev);
  };
  const handleUsersClick = () => {
    setShowUsersTable((prev) => !prev);
  };

  return (
    <div className='PanelPage'>
      <div className="panel-buttons-container">
        <button className="panel-button" role="button" onClick={handleShoesClick}>
          {showShoesTable ? 'Close Shoes Table' : 'Show Shoes Table'} {showShoesTable ? <ICONS.Minus /> : <ICONS.Plus />}
        </button>
        <button className="panel-button" role="button" onClick={handleUsersClick}>
          {showUsersTable ? 'Close Users Table' : 'Show Users Table'} {showUsersTable ? <ICONS.Minus /> : <ICONS.Plus />}
        </button>
      </div>
      <div className="panel-page-container">
        {showShoesTable && (
          <>
            {isLoading ? (
              <Loader />
            ) : error ? (
              <ErrorMessage error={error.message} />
            ) : (
              <ShoesTable shoes={shoes} />
            )}
          </>
        )}
        {showUsersTable && (
          <>
            {isLoadingUsers ? (
              <Loader />
            ) : usersError ? (
              <ErrorMessage error={usersError} />
            ) : (
              <UsersTable users={usersCalls}  />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PanelPage;
