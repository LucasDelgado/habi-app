import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import PreviewSteps from "../../components/previewSteps/PreviewSteps";
import PropTypes from "prop-types";
import useSteps from "../../hook/useSteps";
import "./steps.scss";

const Steps = ({ pageDataOrdened }) => {
  const [inputState, setInputState] = useState({});
  const [handleOnSubmit, page, stepsState, totalSteps] = useSteps(
    pageDataOrdened,
    inputState,
    setInputState
  );

  return (
    <div className="steps">
      <div className="steps__main">
        <form className="steps__main__form" onSubmit={handleOnSubmit}>
          <p className="st--m-20">
            {stepsState.page}/{totalSteps}
          </p>
          <Outlet context={[inputState, setInputState]} />
          <input
            className="steps__main__form__submit"
            type="submit"
            value={page === "final" ? "finalizar" : "siguiente"}
          />
        </form>
      </div>
      <PreviewSteps className="steps__aside" />
    </div>
  );
};

Steps.propTypes = {
  pageDataOrdened: PropTypes.array.isRequired,
};

export default Steps;
