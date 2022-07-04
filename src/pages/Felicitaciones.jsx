import React from "react";
import { useSelector } from "react-redux";
import renderPreviwMachine from "../utils/renderPreviewMachine";
import "../static/styles/pages/felicitaciones.scss";

const Felicitaciones = () => {
  const stepsState = useSelector((state) => state.steps);
  const { steps } = stepsState;

  return (
    <div className="felicitaciones">
      <h1 className="felicitaciones__title">Felicitaciones!</h1>
      <p className="felicitaciones__subtitle">tus datos enviados son estos:</p>
      {renderPreviwMachine(steps)}
    </div>
  );
};

export default Felicitaciones;
