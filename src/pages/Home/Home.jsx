import React from "react";
import { Link } from "react-router-dom";

import "./home.scss";

const Home = ({ firstStepData }) => {
  return (
    <div className="home">
      <Link className="st-callToAction" to={`/steps/${firstStepData.path}`}>
        Vender
      </Link>
    </div>
  );
};

export default Home;
