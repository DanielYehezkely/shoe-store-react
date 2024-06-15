import React from "react";
import { useAdmin } from "../../context/CheckAdminContext";
import DeleteButton from "./DeleteButton/DeleteButton";
import EditButton from "./EditButton/EditButton";
import './SingleShoeCard.css';


const SingleShoeCard = ({ shoe }) => {

  const { isAdmin } = useAdmin();
 
  return (
    <>
        <div className="SingleShoeCard">
          <img src={shoe.image} alt={shoe.name} className="single-shoe-image" />
          <div className="single-shoe-details">
            <h1 className="single-shoe-name">{shoe.name}</h1>
            <p className="single-shoe-info">{shoe.info}</p>
            <p className="single-shoe-price">${shoe.price}</p>
            {isAdmin ? (
              <div className="admin-shoe-buttons">
                <EditButton shoeId={shoe.id}/>
                <DeleteButton shoeId={shoe} />
              </div>
            ) : (
              <button className="btn buy-button">Buy Now</button>
            )}
          </div>
        </div>
      
    </>
  );
};

export default SingleShoeCard;
