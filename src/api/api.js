import axios from "axios";

import { BASE_URL } from "../models/constants"; // i changed this to constansts

export const getShoes = async () => {
  try {
    const response = await axios(BASE_URL);
    return response.data
  } catch (error) {
    throw new Error(error); // make this constants errors 
  }
}

export const addShoe = async (shoe) => {
  try {
    const response = await axios.post(BASE_URL, shoe )
  } catch (error) {
    throw new Error("Unable to add shoe to db")// make this constants errors 
  }

}

export const deleteShoe = async (shoe) => {
  try {
    const response = await axios.delete(BASE_URL, shoe);
  } catch (error) {
    throw new Error("Unable to delete shoe.")// make this constants errors 
  }
}

export const updateShoe = async (shoe) => {
  try {
    const response = await axios.put(BASE_URL, shoe);
  } catch (error) {
    throw new Error("Unable to delete shoe.")// make this constants errors 
  }
}