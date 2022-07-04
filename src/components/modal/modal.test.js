import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";

import { Provider } from "react-redux";
import Modal from "./Modal";

describe("<Modal />", () => {
  let store;
  let mockHanlder;
  let button;
  let element;

  const mockStore = configureStore([]);

  beforeEach(() => {
    store = mockStore({
      steps: "sample text",
    });
    mockHanlder = jest.fn();

    element = render(
      <Provider store={store}>
        <Modal />
      </Provider>
    );
  });

  it("Label para abrir modal", () => {
    const Element = screen.getByText(/Preview/i);
    expect(Element).toBeInTheDocument();
  });
});
