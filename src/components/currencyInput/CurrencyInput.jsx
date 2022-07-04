import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";

const CurrencyInput = ({ data }) => {
  const { description, payloadRef, component } = data;

  const [inputState, setInputState] = useOutletContext();

  const handleChange = (e) =>
    setInputState({
      ...inputState,
      val: e.target.value,
      ref: payloadRef,
      nameComponent: component.name,
      currency: component.currency,
      description,
    });

  return (
    <div>
      <p>{description}</p>
      <span>{component.currency}</span>{" "}
      <input
        type="number"
        name={payloadRef}
        onChange={handleChange}
        value={inputState.val || ""}
        required={component.required}
      />
    </div>
  );
};

CurrencyInput.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    payloadRef: PropTypes.string.isRequired,
    component: PropTypes.shape({
      name: PropTypes.string.isRequired,
      currency: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

CurrencyInput.defaultProps = {
  data: {
    component: {
      currency: "USD",
    },
  },
};

export default CurrencyInput;
