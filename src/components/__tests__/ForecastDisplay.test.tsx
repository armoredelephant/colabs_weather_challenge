import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import ForecastDisplay from "../ForecastDisplay";

describe("<ForecastDisplay />", () => {
  test("it renders and state is changed with Current button clicked", async () => {
    const { findByTestId, findByText } = render(<ForecastDisplay />);

    const forecastDisplay = await findByTestId("_ForecastDisplay_");
    const forecastButton = await findByText("Current");

    await act(async () => {
      fireEvent.click(forecastButton);
    });

    expect(forecastDisplay).toBeDefined();
  });

  test("it renders and state is changed with Five Day button clicked", async () => {
    const { findByTestId, findByText } = render(<ForecastDisplay />);

    const forecastDisplay = await findByTestId("_ForecastDisplay_");
    const forecastButton = await findByText("Five Day");

    await act(async () => {
      fireEvent.click(forecastButton);
    });

    expect(forecastDisplay).toBeDefined();
  });
});
