import React from 'react';
import './FormInput.css';

const FormInput = ({ label, id, type = "text", value, onChange }) => (
  <div className="input-group">
    <label htmlFor={id}>{label}:</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default FormInput;
