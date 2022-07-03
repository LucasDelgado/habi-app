import React from "react";
import { useSelector } from "react-redux";
import renderPreviwMachine from "../utils/renderPreviewMachine";

const Felicitaciones = () => {
  const stepsState = useSelector((state) => state.steps);
  const { steps } = stepsState;

  return (
    <div>
      <h1>Felicitaciones!</h1>
      <p>tus datos enviados son estos:</p>
      {renderPreviwMachine(steps)}
    </div>
  );
};

export default Felicitaciones;
