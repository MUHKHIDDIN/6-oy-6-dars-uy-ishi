import React from "react";
import "./input.css";

export const MainInput = ({ value, onChange, placeholder }) => {
  return (
    <div className="input-wrapper">
      <input
        className="input-element"
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};
