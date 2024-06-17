import React, { useState } from "react";
import { useNavigate } from "react-router";

import ICONS from "../../../models/icons";
import {addUserCall} from '../../../api/usersApi';
import { FORM_INPUTS_EMPTY } from "../../../models/constants";

import FormInput from "../../ShoeGenericForm/FormInput/FormInput";
import Loader from "../../Loader/Loader";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

import './ContactForm.css'; 

const ContactForm = ({ onSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setError(FORM_INPUTS_EMPTY)
      return;
    }

    const newCall = {
      fullName,
      message,
      email
    }
    setIsLoading(true);
    try {
      await addUserCall(newCall);
      onSuccess(); 
      setTimeout(() => {
        navigate('/shoes');
      }, 5000);
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h1>Get in Touch</h1>
      {error && <ErrorMessage error={error} />}
      <FormInput label={'FullName'} type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <FormInput label={'Email'} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormInput label={'Write Us '} type="textarea" value={message} onChange={(e) => setMessage(e.target.value)} />
      {isLoading ? (
        <Loader />
      ) : (
          <button className="contact-form-button" type="submit">
          Send Me Message <ICONS.MailSend />
        </button>
      )}
    </form>
  );
};

export default ContactForm;