import React from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import RadioInput from "./RadioInput";
import RadioInputWrapper from "./RadioInputWrapper";

const RadioInputGroup = ({ data }) => {
  const { component, payloadRef, description } = data;

  const [inputState, setInputState] = useOutletContext();

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      val: e.target.value,
      ref: payloadRef,
      nameComponent: component.name,
      description,
    });
  };

  return (
    <div onChange={handleChange}>
      <p>{description}</p>
      <RadioInputWrapper name={payloadRef} options={component.options} />
    </div>
  );
};

RadioInputGroup.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    payloadRef: PropTypes.string.isRequired,
    component: PropTypes.shape({
      name: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        })
      ),
    }).isRequired,
  }).isRequired,
};

export default RadioInputGroup;
