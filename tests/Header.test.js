import { render, fireEvent, cleanup } from "@testing-library/react";
import HeaderTop from "../src/components/Layout/Header/HeaderTop";
import React from "react";

describe("Header top", () => {
  afterEach(cleanup);

  it("Header mounted", () => {
    const { getByText, getByRole } = render(<HeaderTop />);

    expect(getByText(/Главная/i)).toBeInTheDocument();

    // fireEvent.click(getByText("State Change Button"));

    expect(getByRole('link')).toBeInTheDocument();
    expect(getByRole('link').textContent).toMatch(
      /Главная|Контакты|О нас/gi
    );
  });
});