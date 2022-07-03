import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";

const ImageInput = ({ data }) => {
  const { payloadRef, component, description } = data;

  const [inputState, setInputState] = useOutletContext();

  const handleChange = (e) =>
    setInputState({
      ...inputState,
      val: URL.createObjectURL(e.target.files[0]),
      ref: payloadRef,
      nameComponent: component.name,
      description,
    });

  return (
    <div>
      <input
        type="file"
        name="myImage"
        onChange={handleChange}
        required={component.required}
        title="imagen"
      />
    </div>
  );
};

ImageInput.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    payloadRef: PropTypes.string.isRequired,
    component: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ImageInput;
