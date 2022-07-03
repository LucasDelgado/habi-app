import React from "react";

const renderPreviwMachine = (steps) => {
  return steps.map((step, key) => {
    switch (step?.nameComponent) {
      case "text-input":
        return (
          <div key={key} className="st--mb-20">
            <p className="st--f-bold">{step.description}:</p>
            <p>{step.val}</p>
          </div>
        );
      case "image-input":
        return (
          <div key={key} className="st--mb-20">
            <p className="st--f-bold">{step.description}:</p>
            <img src={step.val} alt="image Preview" width={50} />
          </div>
        );
      case "checkbox-group":
        return (
          <div key={key} className="st--mb-20">
            <p className="st--f-bold">{step.description}:</p>
            {step?.val?.map((item, key) => {
              return <p key={key}>{item}</p>;
            })}
          </div>
        );
      case "moneda-input":
        return (
          <div key={key} className="st--mb-20">
            <p className="st--f-bold">{step.description}:</p>
            <p>
              {step.currency} {step.val}
            </p>
          </div>
        );
      case "radioinput-group":
        return (
          <div key={key} className="st--mb-20">
            <p className="st--f-bold">{step.description}:</p>
            <p>{step.val}</p>
          </div>
        );
      case "has-parcadero":
        // ["parcadero", "si"]
        let validarArr = step.val || [];
        let arrResult = Object.entries(validarArr);
        return (
          <div key={key} className="st--mb-20">
            {arrResult?.map((item, index) => {
              return (
                <div key={index} className="st--mb-10">
                  <p>
                    <span className="st--f-bold">{item[0]}:</span> {item[1]}
                  </p>
                </div>
              );
            })}
          </div>
        );
      default:
        return (
          <div className="st--mb-20">
            <p>No encontramos como mostrarte los datos</p>
          </div>
        );
    }
  });
};

export default renderPreviwMachine;
