import { render, screen } from "@testing-library/react";
import renderPreviewMachine from "./renderPreviewMachine";

describe("renderMachine", () => {
  let steps;

  beforeEach(() => {
    (steps = [
      {
        nameComponent: "text-input",
        description: "descrip",
        val: "val",
      },
    ]),
      render(renderPreviewMachine(steps));
  });

  it("el componente text-input existe", () => {
    const Element = screen.getByText(/descrip/i);
    expect(Element).toBeInTheDocument();
  });
});
