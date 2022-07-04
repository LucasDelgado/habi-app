import { render, screen } from "@testing-library/react";
import RadioInput from "./RadioInput";

test("renders children RadioInput", () => {
  render(<RadioInput children={"Hola soy un radio"} />);
  const Element = screen.getByText(/Hola soy un radio/i);
  expect(Element).toBeInTheDocument();
});
