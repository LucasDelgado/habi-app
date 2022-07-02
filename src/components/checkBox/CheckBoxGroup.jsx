import React from "react";
import CheckBox from "./CheckBox";
import PropTypes from "prop-types";

const CheckBoxGroup = ({ data }) => {
  return (
    <div className="box-checkbox">
      <p>{data?.title}</p>
      {data?.options.map((c, key) => (
        <CheckBox name={c?.value} key={key} value={c?.label}>
          {c?.label}
        </CheckBox>
      ))}
    </div>
  );
};

CheckBoxGroup.propTypes = {};

export default CheckBoxGroup;
