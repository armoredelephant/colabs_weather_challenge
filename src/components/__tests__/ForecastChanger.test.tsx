import React from "react";
import { render } from "@testing-library/react";
import ForecastChanger from "../ForecastChanger";

const setForecast = jest.fn();

describe("<ForecastChanger />", () => {
  test("it renders", async () => {
    const { findByTestId } = render(
      <ForecastChanger forecastType="Current" handleForecast={setForecast} />
    );
    const forecastChanger = await findByTestId("_ForecastChanger_");
    expect(forecastChanger).toBeDefined();
  });
});
