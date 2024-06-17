import React, { useState } from "react";
import { useNavigate } from "react-router";

import { useFetchUsers } from "../../../context/FetchUsersContext";
import ICONS from "../../../models/icons";
import { FORM_INPUTS_EMPTY } from "../../../models/constants";
import FormInput from "../../ShoeGenericForm/FormInput/FormInput";
import Loader from "../../Loader/Loader";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

import './ContactForm.css';

const ContactForm = ({ onSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { addNewUserCall, isAdding, addUsersError } = useFetchUsers(); 

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setLocalError(FORM_INPUTS_EMPTY);
      return;
    }

    const newCall = {
      fullName,
      message,
      email
    };

    try {
      await addNewUserCall(newCall); 
      onSuccess();
      setTimeout(() => {
        navigate('/shoes');
      }, 5000);
    } catch {
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h1>Get in Touch</h1>
      {addUsersError && <ErrorMessage error={addUsersError} />}
      <FormInput label={'FullName'} type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <FormInput label={'Email'} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormInput label={'Write Us '} type="textarea" value={message} onChange={(e) => setMessage(e.target.value)} />
      {isAdding ? (
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