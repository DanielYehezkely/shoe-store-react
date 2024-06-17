import React, { useState } from "react";

import { useFetchUsers } from "../../../context/FetchUsersContext";
import ICONS from "../../../models/icons";
import { FORM_INPUTS_EMPTY_MESSAGE } from "../../../models/constants";
import FormInput from "../../ShoeGenericForm/FormInput/FormInput";
import Loader from "../../Loader/Loader";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

import './ContactForm.css';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { addNewUserCall, isAdding, addUsersError } = useFetchUsers();
  const [localError, setLocalError] = useState(null);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSuccess = () => {
    setIsMessageSent(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setLocalError(FORM_INPUTS_EMPTY_MESSAGE);
      return;
    }

    const newCall = {
      fullName,
      message,
      email
    };

    try {
      await addNewUserCall(newCall);
      handleSuccess();
    } catch {
      setLocalError(addUsersError);
    }
  };

  return (
    <>
      {addUsersError ? (<ErrorMessage error={addUsersError} />) : (<form className="contact-form" onSubmit={handleSubmit}>
        <h1>Get in Touch</h1>
        {localError && <ErrorMessage error={localError} />}
        {isMessageSent ? (<div className="redirect-message">
          <h2>Thank you for writing us! We will contact you soon as possible</h2>
        </div>) : (<>
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
        </>)}

      </form>)}

    </>

  );
};

export default ContactForm;