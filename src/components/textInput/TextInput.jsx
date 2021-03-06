import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";

const TextInput = ({ data }) => {
  const { description, payloadRef, component } = data;

  const [inputState, setInputState] = useOutletContext();

  const handleChange = (e) =>
    setInputState({
      ...inputState,
      val: e.target.value,
      ref: payloadRef,
      nameComponent: component.name,
      description,
    });

  return (
    <label>
      {description}
      <input
        className={"st--textInput"}
        type={component.type}
        name={payloadRef}
        onChange={handleChange}
        value={inputState.val || ""}
        required={component.required}
        max={component.max}
      />
    </label>
  );
};

TextInput.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    payloadRef: PropTypes.string.isRequired,
    component: PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default TextInput;
