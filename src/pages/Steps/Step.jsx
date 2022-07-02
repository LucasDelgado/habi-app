import React from "react";
import PropTypes from "prop-types";
import renderMachine from "../../utils/renderMachine";

const Step = ({ step }) => {
  return (
    <>
      <div>{step.description}</div>
      <div>{renderMachine(step.component)}</div>
    </>
  );
};

Step.propTypes = {};

export default Step;
