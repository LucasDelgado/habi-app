import React from "react";
import CheckBox from "./CheckBox";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";

const CheckBoxGroup = ({ data }) => {
  const { component, payloadRef, description } = data;

  const [inputState, setInputState] = useOutletContext();

  const handleChange = (e) => {
    let arr = inputState.val || [];
    if (e.target.checked) {
      arr.push(e.target.value);
    } else {
      arr = inputState.val.filter((item) => item !== e.target.value);
    }

    setInputState({
      ...inputState,
      val: arr,
      ref: payloadRef,
      nameComponent: component.name,
      description,
    });
  };

  return (
    <div className="box-checkbox" onChange={handleChange}>
      <p>{description}</p>
      {component?.options.map((c, key) => (
        <CheckBox name={c?.value} key={key} value={c?.label}>
          {c?.label}
        </CheckBox>
      ))}
    </div>
  );
};

CheckBoxGroup.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    payloadRef: PropTypes.string.isRequired,
    component: PropTypes.shape({
      name: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired,
        })
      ),
    }).isRequired,
  }).isRequired,
};

export default CheckBoxGroup;
