import React from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import RadioInputWrapper from "../radioInput/RadioInputWrapper";

const HasParcadero = ({ data }) => {
  const { payloadRef, component } = data;

  const firstQuestion = component.questions[0] || {};
  const secondQuestion = component.questions[1] || {};

  const [inputState, setInputState] = useOutletContext();

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      val: {
        ...inputState.val,
        [e.target.name]: e.target.value,
      },
      ref: payloadRef,
      nameComponent: component.name,
    });
  };

  const isTrueFirstQuestion = inputState?.val?.[firstQuestion?.id] === "si";

  return (
    <div onChange={handleChange}>
      <p>{firstQuestion?.description}</p>
      <RadioInputWrapper
        name={firstQuestion.id}
        options={firstQuestion.options}
      />
      {isTrueFirstQuestion && (
        <>
          <p>{secondQuestion?.description}</p>
          <RadioInputWrapper
            name={secondQuestion.id}
            options={secondQuestion.options}
          />
        </>
      )}
    </div>
  );
};

HasParcadero.propTypes = {
  data: PropTypes.shape({
    payloadRef: PropTypes.string.isRequired,
    component: PropTypes.shape({
      name: PropTypes.string.isRequired,
      questions: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          options: PropTypes.arrayOf(
            PropTypes.shape({
              label: PropTypes.string.isRequired,
              value: PropTypes.string.isRequired,
            })
          ).isRequired,
        })
      ),
    }).isRequired,
  }).isRequired,
};

export default HasParcadero;
