import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStep, nextStep } from "../../store/states/steps";
import PreviewSteps from "../../components/previewSteps/PreviewSteps";
import localStorageService from "../../service/localStorageService";
import PropTypes from "prop-types";
import "./steps.scss";

const Steps = ({ pageDataOrdened }) => {
  const [inputState, setInputState] = useState({});
  const dispatch = useDispatch();
  const stepsState = useSelector((state) => state.steps);
  const page = pageDataOrdened[stepsState.page] || "final";
  const totalSteps = pageDataOrdened?.length;
  let navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //add store
    dispatch(nextStep());
    dispatch(
      addStep({
        ...inputState,
      })
    );

    //service localstorage
    localStorageService.set("steps", {
      steps: [...stepsState.steps, inputState],
      page: stepsState.page + 1,
    });

    //clean states inputs
    setInputState({});

    //navigate to next page
    if (page === "final") {
      navigate("/resumen");
    } else {
      navigate(`/steps/${page.path}`);
    }
  };

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
