import React from "react";
import PropTypes from "prop-types";
import RadioInput from "./RadioInput";

const RadioInputGroup = ({ data }) => {
  console.log(data);
  return (
    <div>
      <p>{data?.title}</p>
      {data?.options.map((c, key) => (
        <RadioInput name={data.title} key={key} value={c?.value}>
          {c?.label}
        </RadioInput>
      ))}
    </div>
  );
};

RadioInputGroup.propTypes = {};

export default RadioInputGroup;
