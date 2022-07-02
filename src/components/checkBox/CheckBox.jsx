import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ children, ...r }) => {
  return (
    <label className="checkbox">
      {children}
      <input type="checkbox" {...r} />
    </label>
  );
};

Checkbox.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Checkbox;
