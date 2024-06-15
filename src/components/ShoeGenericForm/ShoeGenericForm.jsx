import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { updateShoe, addShoe } from "../../api/api"; // Assume addShoe is the API call to add a new shoe
import { useFetchShoes } from "../../context/FetchShoesContext";
import FormInput from "./FormInput/FormInput";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import './ShoeGenericForm.css';

const ShoeGenericForm = ({ shoe }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { fetchShoes } = useFetchShoes();

  useEffect(() => {
    if (shoe) {
      setName(shoe.name);
      setPrice(shoe.price);
      setImage(shoe.image);
    }
  }, [shoe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (shoe) {
        const updatedShoe = {
          ...shoe,
          name,
          price,
          image
        };
        await updateShoe(updatedShoe);
        navigate(`/shoes/${shoe.id}`);
      } else {
        const newShoe = {
          name,
          price,
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

  return (
    <form className="ShoeGenericForm" onSubmit={handleSubmit}>
      <h1 className="shoe-form-title">{shoe ? "Edit Your Shoe" : "Add New Shoe"}</h1>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <div className="inputs-container">
        <FormInput
          label="Shoe Name"
          id="shoe-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          label="Shoe Price"
          id="shoe-price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <FormInput
          label="Shoe Image"
          id="shoe-image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button className="btn update-button" type="submit" disabled={isLoading}>
        {shoe ? "Update Shoe" : "Add Shoe"}
      </button>
    </form>
  );
};

export default ShoeGenericForm;
