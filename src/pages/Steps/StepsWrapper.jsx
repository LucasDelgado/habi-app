import React, { useState } from "react";
import PropTypes from "prop-types";
import Step from "./Step";
import Steps from "./Steps";

const StepsWrapper = ({ pageDataOrdened }) => {
  const [pageStep, setPageStep] = useState(1);
  const page = pageDataOrdened[pageStep] || "final";

  const handleProxPage = () => {
    setPageStep(pageStep + 1);
  };

  return (
    <>
      <div>mostrar pasos</div>
      <Steps page={page} onProxPage={handleProxPage} />
    </>
  );
};

StepsWrapper.propTypes = {};

export default StepsWrapper;
