import React from "react";
import PropTypes from "prop-types";
import renderMachine from "../../utils/renderMachine";

const Step = ({ step }) => {
  return <>{renderMachine(step)}</>;
};

Step.propTypes = {
  step: PropTypes.object.isRequired,
};

export default Step;
