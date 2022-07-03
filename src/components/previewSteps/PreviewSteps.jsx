import React from "react";
import Aside from "../aside/Aside";
import useResponsive from "../../hook/useResponsive";
import Modal from "../modal/Modal";

const PreviewSteps = ({ ...r }) => {
  const isNarrowScreen = useResponsive();

  if (isNarrowScreen) {
    return <Aside {...r} />;
  }
  return <Modal />;
};

export default PreviewSteps;
