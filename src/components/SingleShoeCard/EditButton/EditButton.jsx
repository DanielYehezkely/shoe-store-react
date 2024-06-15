import React from "react";
import { useNavigate } from "react-router-dom";

const EditButton = ({ shoeId }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/shoes/${shoeId}/edit`);
  };

  return (
    <button className="btn EditButton" onClick={handleEditClick}>
      Edit Shoe
    </button>
  );
};

export default EditButton;