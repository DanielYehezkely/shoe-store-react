import axios from "axios";

import { BASE_URL, DELETE_SHOE_ERROR, GET_SHOES_ERROR, GET_SHOE_ERROR, POST_SHOE_ERROR, PUT_SHOE_ERROR } from '../models/constants'; 

export const getShoes = async () => {
  try {
    const response = await axios(BASE_URL);
    return response.data
  } catch (error) {
    throw new Error(GET_SHOES_ERROR);
  }
};

export const getShoeById = async (shoeId) => {

  try {
    const response = await axios.get(`${BASE_URL}/${shoeId}`);
    if (response.status === 200 && response.data) {

    }
    return response.data;
  } catch (error) {
    throw new Error(GET_SHOE_ERROR);
  }
};

export const addShoe = async (shoe) => {
  try {
    const response = await axios.post(BASE_URL, shoe)
  } catch (error) {
    throw new Error(POST_SHOE_ERROR)
  }
};

export const deleteShoe = async (shoeId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${shoeId}`);
  } catch (error) {
    throw new Error(DELETE_SHOE_ERROR)
  }
};


export const updateShoe = async (shoe) => {
  try {
    const response = await axios.put(`${BASE_URL}/${shoe.id}`, shoe);
  } catch (error) {
    throw new Error(PUT_SHOE_ERROR);
  }
};
