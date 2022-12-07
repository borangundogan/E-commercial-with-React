import React from "react";
// react hooks functional component architecture
const TextInput = ({ name, label, onChange, placeHolder, value, error }) => {
  let wrapperClass = "form-group"; //boostrap
  if (error && error.length > 0) {
    wrapperClass += " has-error"; // boostrap
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}></label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        >
          {error && <div className="alert alert-danger">{error}</div>}
        </input>
      </div>
    </div>
  );
};

export default TextInput;