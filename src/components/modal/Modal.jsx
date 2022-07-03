import React, { useState } from "react";
import { useSelector } from "react-redux";
import renderPreviwMachine from "../../utils/renderPreviewMachine";
import "./modal.scss";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const stepsState = useSelector((state) => state.steps);
  const { steps } = stepsState;
  return (
    <>
      <button className="modal__open" onClick={() => setIsOpen(true)}>
        Preview
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" onClick={() => setIsOpen(false)}>
              Cerrar
            </button>
            <div>
              {" "}
              {steps?.length === 0 ? (
                <p>Por ahora no hay ningun dato por aqui!</p>
              ) : (
                <div>{renderPreviwMachine(steps)}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
