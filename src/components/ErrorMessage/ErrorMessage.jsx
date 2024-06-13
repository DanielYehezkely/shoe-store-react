import React from "react";

import './ErrorMessage.css'


const ErrorMessage = ({error}) => {
  return <div className="ErrorMessage">{`Error: ${error}`}</div>;
};

export default ErrorMessage;
