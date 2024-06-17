import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { updateShoe, addShoe } from "../api/shoeApi";

import { useFetchShoes } from "../context/FetchShoesContext";
import { validateImageUrl } from "../utils/validateImageUrl";
import { FORM_INPUTS_EMPTY } from "../models/constants";

const useShoeForm = (initialShoe) => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [invalidImage, setInvalidImage] = useState(false);

  const navigate = useNavigate();
  const { fetchShoes } = useFetchShoes();

  useEffect(() => {
    if (initialShoe) {
      setName(initialShoe.name);
      setPrice(initialShoe.price);
      setImage(initialShoe.image);
      setInfo(initialShoe.info);
      setId(initialShoe.id);
    }
  }, [initialShoe]);

  const handleImageChange = (e) => {
    const url = e.target.value;
    setImage(url);
    setInvalidImage(!validateImageUrl(url));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !id.trim() || !info.trim() || !price.trim() || !image.trim()) {
      setError(FORM_INPUTS_EMPTY);
      return;
    }

    if (invalidImage) {
      setError("Invalid image URL.");
      return;
    }

    setIsLoading(true);

    try {
      if (initialShoe) {
        const updatedShoe = {
          ...initialShoe,
          name,
          id,
          price,
          info,
          image
        };
        await updateShoe(updatedShoe);
        navigate(`/shoes/${initialShoe.id}`);
      } else {
        const newShoe = {
          name,
          id,
          price,
          info,
          image
        };
        await addShoe(newShoe);
        navigate(`/shoes`);
      }
      fetchShoes();
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    name,
    setName,
    info,
    setInfo,
    id,
    setId,
    price,
    setPrice,
    image,
    setImage,
    isLoading,
    error,
    invalidImage,
    handleImageChange,
    handleSubmit,
  };
};

export default useShoeForm;
