import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Steps = ({ page, onProxPage }) => {
  return (
    <div>
      <Outlet />
      {page === "final" ? (
        <Link to={`/resumen`}>Finalizar</Link>
      ) : (
        <Link to={`/steps/${page.path}`} onClick={() => onProxPage()}>
          Siguiente
        </Link>
      )}
    </div>
  );
};

export default Steps;
