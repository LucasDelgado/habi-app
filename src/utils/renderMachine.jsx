import React from "react";
import TextInput from "../components/textInput/TextInput";
import CheckBoxGroup from "../components/checkBox/CheckBoxGroup";
import PropTypes from "prop-types";
import RadioInputGroup from "../components/radioInput/RadioInputGroup";

const renderMachine = (component) => {
  const defaultElemnt = <p>Ha ocurrido un error.</p>;

  const caseElement = {
    "text-input": (
      <TextInput
        title={component?.title}
        {...(component?.maxLength && { maxLength: component?.maxLength })}
        type={component?.type}
        id={component?.payloadRef}
      />
    ),
    "checkbox-group": <CheckBoxGroup data={component} />,
    "radioinput-group": <RadioInputGroup data={component} />,
  };

  const Element = caseElement[component?.name] || defaultElemnt;

  return Element;
};

renderMachine.propTypes = {};

export default renderMachine;

/**
 *

• Sexto paso: Preguntarle al usuario si su inmueble tiene parqueadero, en caso
de tenerlo elegir si es cubierto o no - obligatorio
• Septimo paso: Preguntarle al usuario por el monto por el que vende el
apartamento, se espera que sea claro para el usuario que esta usando moneda
mientras mete los datos - obligatorio
• Octavo paso: El usuario podrá subir una única foto del inmueble - opcional
• Noveno paso: Preguntarle al usuario si el apartamento tiene o no ascensor -
obligatorio
 */
