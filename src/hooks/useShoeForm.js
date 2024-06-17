import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useFetchShoes } from "../context/FetchShoesContext";
import { validateImageUrl } from "../utils/validateImageUrl";
import { FORM_INPUTS_EMPTY_MESSAGE } from "../models/constants";

const useShoeForm = (initialShoe) => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [invalidImage, setInvalidImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { addNewShoe, updateExistingShoe } = useFetchShoes();
  const navigate = useNavigate();

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
      setError(FORM_INPUTS_EMPTY_MESSAGE);
      return;
    }

    if (invalidImage) {
      setError("Invalid image URL.");
      return;
    }

    setIsLoading(true);
    const shoeData = { name, id, price, info, image };

    try {
      if (initialShoe) {
        await updateExistingShoe(shoeData);
        navigate(`/shoes/${initialShoe.id}`);
      } else {
        await addNewShoe(shoeData);
        navigate('/shoes');
      }
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

