import { render, screen } from "@testing-library/react";
import renderMachine from "./renderMachine";

describe("renderMachine", () => {
  let data;

  beforeEach(() => {
    data = {
      component: {
        name: "testBad",
      },
    };
    render(renderMachine(data));
  });

  it("el componente para renderizar no existe", () => {
    const Element = screen.getByText(
      /Ha ocurrido un error al renderizar el campo a completar./i
    );
    expect(Element).toBeInTheDocument();
  });
});
