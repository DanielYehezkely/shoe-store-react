import React from "react";

import ICONS from "../../../models/icons";

import './ContactInfo.css'

const ContactInfo = () => {
  return (
    <>
      <div className="ContactInfo">
        <h2>Contact Information</h2>
        <p><span>Email <ICONS.Email/>:</span> Shoes@example.com</p>
        <p><span>Phone <ICONS.PhoneSquare />:</span> +1 (123) 456-7890</p>
        <p><span>Location <ICONS.MapLocationDot />:</span> 1234 Hidden leaf village</p>
      </div>
    </>
  );
};

export default ContactInfo;
