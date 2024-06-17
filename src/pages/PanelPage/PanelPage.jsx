import React, { useState } from "react";

import { Loader, ErrorMessage, ShoesTable, UsersTable, PanelButton } from "../../components";
import { useFetchShoes } from "../../context/FetchShoesContext";
import { useFetchUsers } from "../../context/FetchUsersContext";

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
        <PanelButton booleanState={showShoesTable} handleClick={handleShoesClick} label={'shoes'}/>
        <PanelButton booleanState={showUsersTable} handleClick={handleUsersClick} label={'users'}/>
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
