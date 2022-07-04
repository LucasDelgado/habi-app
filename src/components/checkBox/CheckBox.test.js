import { render, screen, fireEvent } from "@testing-library/react";
import CheckBox from "./CheckBox";

describe("<Checkbox />", () => {
  let element;

  beforeEach(() => {
    render(<CheckBox name="hola">hola</CheckBox>);
    element = screen.getByRole("checkbox", { name: "hola" });
  });

  it("children", () => {
    const Element = screen.getByText(/hola/i);
    expect(Element).toBeInTheDocument();
  });

  it("style checkbox (solo la cajita)", () => {
    expect(element).toHaveStyle({ display: "inline-block" });
  });

  it("inicia no checkeado", () => {
    expect(element).not.toBeChecked();
  });
});
