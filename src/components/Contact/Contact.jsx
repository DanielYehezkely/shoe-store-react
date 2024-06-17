import React, { useState } from "react";

import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm"; 

import './Contact.css';

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSuccess = () => {
    setIsMessageSent(true);
  };

  return (
    <div className="Contact">
      {isMessageSent ? (
        <div className="redirect-message">
          <h2>Thank you for writing us! You are now being redirected to the store...</h2>
        </div>
      ) : (
        <>
          <ContactInfo />
          <ContactForm onSuccess={handleSuccess} />
            <div className="contact-image-container">
              <img className="contact-image" src="/assets/images/shoesImage.jpg" alt="contact-image" />
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;