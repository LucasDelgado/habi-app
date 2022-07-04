import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import localStorageService from "../service/localStorageService";
import { nextStep, addStep } from "../store/states/steps";

const useSteps = (pageDataOrdened, inputState, setInputState) => {
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

  return [handleOnSubmit, page, stepsState, totalSteps];
};

export default useSteps;
