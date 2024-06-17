import axios from "axios";

import { USERS_URL } from "../models/constants";

export const addUserCall = async (userCall) => {
  try {
    const response = await axios.post(USERS_URL, userCall)
  } catch (error) {
    throw new Error('ccouldnt post the user call')
  }
};

export const getUsersCalls = async () => {
  try {
    const response = await axios(USERS_URL);
    return response.data
  } catch (error) {
    throw new Error('couldnt get the users calls.');
  }
};