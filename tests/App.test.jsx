import { screen, render } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "../src/App.jsx";

describe("App.js", () => {
  test("App.js should be dom", () => {
    render(<App />, { wrapper: BrowserRouter });
    const route = screen.getByText(/about/);
    expect(route).toBeInDocument();
  });
  screen.debug();
});
