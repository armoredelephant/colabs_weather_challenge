import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import ForecastButton from "../ForecastButton";

const setForecast = jest.fn();

describe("<ForecastButton />", () => {
  test("it renders an active button", async () => {
    const { findByTestId } = render(
      <ForecastButton active={true} handleForecast={setForecast} text="test" />
    );

    const forecastButton = await findByTestId("_ForecastButton_");
    await act(async () => {
      fireEvent.click(forecastButton);
    });

    expect(setForecast).toHaveBeenCalledTimes(1);
    expect(forecastButton).toBeDefined();
  });

  test("it renders with an inactive button", async () => {
    const { findByTestId } = render(
      <ForecastButton active={false} handleForecast={setForecast} text="test" />
    );

    const forecastButton = await findByTestId("_ForecastButton_");

    await act(async () => {
      fireEvent.click(forecastButton);
    });

    expect(setForecast).toHaveBeenCalledTimes(2);
    expect(forecastButton).toBeDefined();
  });
});
