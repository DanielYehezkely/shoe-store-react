import React from 'react';
import './FormInput.css';

const FormInput = ({ label, id, type = "text", value, onChange }) => (
  <div className="input-group">
    <label htmlFor={id}>{label}:</label>
    {type === "textarea" ? (
      <textarea
        id={id}
        value={value}
        onChange={onChange}
      />
    ) : (
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
    )}
  </div>
);

export default FormInput;