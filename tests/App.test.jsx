import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App.jsx";

describe("App.js", () => {
  test("App.js should be mounted in DOM", () => {
    render(<App />, { wrapper: BrowserRouter });
    const route = screen.getByText(/about/);
    expect(route).toBeInTheDocument();
  });
  screen.debug();
});
