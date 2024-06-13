import axios from "axios";

const BASE_URL = 'https://666b107f7013419182d21eda.mockapi.io/shoes';

export const getShoes = async () => {
  try {
    const response = await axios(BASE_URL);
    return response.data
  } catch (error) {
    throw new Error(error);
  }
}

export const addShoe = async (shoe) => {
  try {
    const response = await axios.post(BASE_URL, shoe )
  } catch (error) {
    throw new Error("Unable to add shoe to db")
  }

}

export const deleteShoe = async (shoe) => {
  try {
    const response = await axios.delete(BASE_URL, shoe);
  } catch (error) {
    throw new Error("Unable to delete shoe.")
  }
}

export const updateShoe = async (shoe) => {
  try {
    const response = await axios.put(BASE_URL, shoe);
  } catch (error) {
    throw new Error("Unable to delete shoe.")
  }
}