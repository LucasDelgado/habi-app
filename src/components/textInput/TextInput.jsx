import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ title, ...r }) => {
  return (
    <label>
      {title}
      <input className={"st--textInput"} {...r} />;
    </label>
  );
};

TextInput.propTypes = {};

export default TextInput;
