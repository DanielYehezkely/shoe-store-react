import React from "react";

import './SingleShoeCard.css'
import { useAdmin } from "../../context/CheckAdminContext";

const SingleShoeCard = ({ shoe }) => {

  const { isAdmin } = useAdmin();

  return (
    <>
      <div className="SingleShoeCard">
        <img src={shoe.image} alt={shoe.name} className="single-shoe-image" />
        <div className="single-shoe-details">
          <h1 className="single-shoe-name">{shoe.name}</h1>
          <p className="single-shoe-info">{shoe.info}</p>
          <p className="single-shoe-price">${shoe.price.toFixed(2)}</p>
          <div className="admin-shoe-buttons">
            <button className="btn">Edit Shoe</button>
            <button className="btn delete-button">Delete Shoe</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default SingleShoeCard;
