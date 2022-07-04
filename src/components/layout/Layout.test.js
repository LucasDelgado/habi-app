import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

test("renders Layout", () => {
  render(
    <Layout>
      {" "}
      <p>Hola</p>{" "}
    </Layout>
  );
  const Element = screen.getByText(/HABI-APP/i);
  expect(Element).toBeInTheDocument();
});
