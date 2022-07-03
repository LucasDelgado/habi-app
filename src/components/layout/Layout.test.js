import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

test("renders Layout", () => {
  render(<Layout />);
  const linkElement = screen.getByText(/HABI-APP/i);
  expect(linkElement).toBeInTheDocument();
});
