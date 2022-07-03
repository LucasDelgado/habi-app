import React from "react";
import { useSelector } from "react-redux";
import renderPreviwMachine from "../../utils/renderPreviewMachine";

function Aside({ ...r }) {
  const stepsState = useSelector((state) => state.steps);
  const { steps } = stepsState;
  // console.log(stepsState);

  return (
    <div {...r}>
      {steps?.length === 0 ? (
        <p>Por ahora no hay ningun dato por aqui!</p>
      ) : (
        <div>{renderPreviwMachine(steps)}</div>
      )}
    </div>
  );
}

export default Aside;
