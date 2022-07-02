import React from "react";
import { Link } from "react-router-dom";

const Home = ({ firstStepData }) => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={`/steps/${firstStepData.path}`}>Vender</Link>
    </div>
  );
};

export default Home;
