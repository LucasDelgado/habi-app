import React from "react";
import TextInput from "../components/textInput/TextInput";
import CheckBoxGroup from "../components/checkBox/CheckBoxGroup";
import RadioInputGroup from "../components/radioInput/RadioInputGroup";
import HasParcadero from "../components/hasParcadero/HasParcadero";
import CurrencyInput from "../components/currencyInput/CurrencyInput";
import ImageInput from "../components/imageInput/ImageInput";

const renderMachine = (step) => {
  const { component, payloadRef, description } = step;

  const data = {
    description,
    component,
    payloadRef,
  };

  const defaultElemnt = (
    <p>Ha ocurrido un error al renderizar el campo a completar.</p>
  );

  const caseElement = {
    "text-input": <TextInput data={data} />,
    "moneda-input": <CurrencyInput data={data} />,
    "has-parcadero": <HasParcadero data={data} />,
    "checkbox-group": <CheckBoxGroup data={data} />,
    "radioinput-group": <RadioInputGroup data={data} />,
    "image-input": <ImageInput data={data} />,
  };

  const Element = caseElement[component?.name] || defaultElemnt;

  return Element;
};

export default renderMachine;
