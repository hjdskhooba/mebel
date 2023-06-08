import { render, fireEvent, cleanup } from "@testing-library/react";
import HeaderTop from "../src/components/Layout/Header/HeaderTop";
import React from "react";

describe("Header.jsx", () => {
  test("HeaderTop.jsx should be in the document");
  render(<HeaderTop />);

  expect(getByText(/Главная/i)).toBeInTheDocument();

  expect(getByRole("link")).toBeInTheDocument();
  expect(getByRole("link").textContent).toMatch(/Главная|Контакты|О нас/gi);
});
