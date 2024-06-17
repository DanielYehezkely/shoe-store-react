import React from "react";

import useShoeForm from "../../hooks/useShoeForm";
import FormInput from "../ShoeGenericForm/FormInput/FormInput"; 
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import './ShoeGenericForm.css';

const ShoeGenericForm = ({ shoe }) => {
  const {
    name,
    setName,
    info,
    setInfo,
    id,
    setId,
    price,
    setPrice,
    image,
    isLoading,
    error,
    invalidImage,
    handleImageChange,
    handleSubmit,
  } = useShoeForm(shoe);

  return (
    <form className="ShoeGenericForm" onSubmit={handleSubmit}>
      <h1 className="shoe-form-title">{shoe ? "Edit Your Shoe" : "Add New Shoe"}</h1>
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <div className="inputs-container">
        <FormInput
          label="Shoe Name"
          id="shoe-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          label="Shoe Id"
          id="shoe-id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <FormInput
          label="Shoe Info"
          id="shoe-info"
          type="textarea"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
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
          onChange={handleImageChange}
          className={invalidImage ? 'invalid' : ''}
        />
        {invalidImage && <p className="error-text">Please provide a valid image URL.</p>}
      </div>
      <button className="btn update-button" type="submit" disabled={isLoading}>
        {shoe ? "Update Shoe" : "Add Shoe"}
      </button>
    </form>
  );
};

export default ShoeGenericForm;
