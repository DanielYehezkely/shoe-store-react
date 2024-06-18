import React, { createContext, useState, useEffect, useContext } from 'react';

import { getUsersCalls, addUserCall, deleteUserCallObj } from '../api/usersApi'; 

const FetchUsersContext = createContext();

export const FetchUsersProvider = ({ children }) => {
  const [usersCalls, setUsersCalls] = useState([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const [usersError, setUsersError] = useState(null);
  const [addUsersError, setAddUsersError] = useState(null);
  const [deleteUsersError, setDeleteUsersError] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchUsersCalls = async () => {
      setIsLoadingUsers(true);
      setUsersError(null);
      try {
        const usersCallsData = await getUsersCalls();
        setUsersCalls(usersCallsData);
      } catch (err) {
        setUsersError(err.message);
      } finally {
        setIsLoadingUsers(false);
      }
    };

    fetchUsersCalls();
  }, []);

  
  const addNewUserCall = async (newCall) => {
    setIsAdding(true);
    setAddUsersError(null);
    try {
      await addUserCall(newCall);
      const updatedUsersCalls = await getUsersCalls();
      setUsersCalls(updatedUsersCalls);``
    } catch (error) {
      setAddUsersError(error.message);
    } finally {
      setIsAdding(false);
    }
  };
  
  const deleteUserCall = async (userId) => {
    setIsDeleting(true);
    setDeleteUsersError(null);
    try {
      await deleteUserCallObj(userId);
      setUsersCalls((prevCalls) => prevCalls.filter((call) => call.id !== userId));
    } catch (error) {
      setDeleteUsersError(error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <FetchUsersContext.Provider value={{
      usersCalls,
      isLoadingUsers,
      usersError,
      addUsersError,
      isAdding,
      addNewUserCall,
      deleteUserCall,
      deleteUsersError,
      isDeleting
    }}>
      {children}
    </FetchUsersContext.Provider>
  );
};

export const useFetchUsers = () =>  useContext(FetchUsersContext);