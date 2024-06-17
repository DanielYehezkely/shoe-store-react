import { useState, useEffect } from "react";

import { getUsersCalls } from "../api/usersApi";

const useFetchUsersCalls = () => {

  const [usersCalls, setUsersCalls] = useState(null);
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {

    const fetchUsersCalls = async () => {
      try {
        const usersCallsData = await getUsersCalls();
        setUsersCalls(usersCallsData);
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setIsLoadingUsers(false);
      }
    };

      fetchUsersCalls();
      
  }, []);

  return { usersCalls, isLoadingUsers, errorMessage };
};

export default useFetchUsersCalls;