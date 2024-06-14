import React from "react";

import { truncateText } from "../../utils/limitWords";
import { useNavigate } from "react-router";

import './ShoeCard.css';


const ShoeCard = ({ shoe }) => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/shoes/${shoe.id}`); 
  };

  return (
    <div className="ShoeCard" onClick={handleNavigate}>
      <img src={shoe.image} alt={shoe.name} className="shoe-image" />
      <div className="shoe-description">
        <h3 className="shoe-name">{shoe.name}</h3>
        <p className="shoe-info">{truncateText(shoe.info, 20)}</p>
        <p className="shoe-price">${shoe.price.toFixed(2)}</p>
      </div>
      <button className="btn buy-button">Buy Now</button>
    </div>
  );
};

export default ShoeCard;