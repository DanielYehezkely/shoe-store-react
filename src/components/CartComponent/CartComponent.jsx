import React, { useState } from "react";

import { useCart } from '../../context/CartContext';
import Loader from "../Loader/Loader";

import './CartComponent.css';

const CartComponent = () => {
  const { cartItems, removeFromCart } = useCart();
  const [removingIndexes, setRemovingIndexes] = useState([]);

  const handleRemoveClick = (index) => {
    setRemovingIndexes([...removingIndexes, index]); 
    setTimeout(() => {
      removeFromCart(index);
      setRemovingIndexes((currentIndexes) => currentIndexes.filter(i => i !== index)); 
    }, 3000);
  };

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-message">Your cart is empty... Go and get you self some nice shoes !</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-info">{item.info}</p>
              <p className="cart-item-price">${item.price}</p>
              {removingIndexes.includes(index) ? (
                <Loader />
              ) : (
                <div className="item-buttons-container">
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleRemoveClick(index)}
                  >
                    Remove
                  </button>
                  <button className="add-to-cart-btn buy">Buy Now</button>
                </div> 
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartComponent;
