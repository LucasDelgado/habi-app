import model from "../model/stepDataComponent";

const stepDataComponentAdapter = ({ description, component, payloadRef }) => {
  let obj = Object.assign({}, model);
  obj.description = description;
  obj.component = component;
  obj.payloadRef = payloadRef;
  return obj;
};

export default stepDataComponentAdapter;
