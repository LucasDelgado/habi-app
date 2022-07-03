import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import Step from "./pages/Steps/Step";
import data from "./document/data.json";
import orderArray from "./utils/orderArray";
import Steps from "./pages/Steps/Steps";
import Felicitaciones from "./pages/Felicitaciones";
import "./static/styles/styles.scss";

function App() {
  const { steps } = data;
  const pageDataOrdened = orderArray(steps, "order", "asc");

  return (
    <div className="App">
      <ErrorBoundary>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={<Home firstStepData={pageDataOrdened[0]} />}
            />
            <Route
              path="/steps"
              element={<Steps pageDataOrdened={pageDataOrdened} />}
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
