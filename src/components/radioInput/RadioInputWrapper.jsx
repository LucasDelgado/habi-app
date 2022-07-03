import React from "react";
import PropTypes from "prop-types";
import RadioInput from "./RadioInput";

const RadioInputWrapper = ({ options, name }) => {
  return (
    <>
      {options?.map((c, key) => (
        <RadioInput name={name} key={key} value={c?.value}>
          {c?.label}
        </RadioInput>
      ))}
    </>
  );
};

RadioInputWrapper.propTypes = {};

export default RadioInputWrapper;
