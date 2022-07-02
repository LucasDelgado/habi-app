import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Step from "./pages/Steps/Step";
import data from "./document/data.json";
import orderArray from "./utils/orderArray";
import StepsWrapper from "./pages/Steps/StepsWrapper";
import Felicitaciones from "./pages/Felicitaciones";

function App() {
  const { steps } = data;
  const pageDataOrdened = orderArray(steps, "order", "asc");

  return (
    <div className="App">
      <ErrorBoundary>
        <Layout>
          <h1>Hola Usuario</h1>
          <Routes>
            <Route
              path="/"
              element={<Home firstStepData={pageDataOrdened[0]} />}
            />
            <Route
              path="/steps"
              element={<StepsWrapper pageDataOrdened={pageDataOrdened} />}
            >
              {pageDataOrdened.map((step) => (
                <Route
                  key={step.id}
                  path={`${step.path}`}
                  element={<Step step={step} />}
                />
              ))}
            </Route>
            <Route path="/resumen" element={<Felicitaciones />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </div>
  );
}

export default App;
