import React from "react";
import PropTypes from "prop-types";

const RadioInput = ({ children, ...r }) => {
  return (
    <label className="radio-input">
      <input type="radio" {...r} />
      <span>{children}</span>
    </label>
  );
};

RadioInput.propTypes = {
  children: PropTypes.string.isRequired,
};

export default RadioInput;
