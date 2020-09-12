import React from "react";

import { render } from "@testing-library/react";
import ForecastList from "../ForecastList";

describe("<ForecastList />", () => {
  test("it renders", async () => {
    const { findByTestId } = render(<ForecastList forecastType="Current" />);
    const forecastList = await findByTestId("_ForecastList_");
    expect(forecastList).toBeDefined();
  });
});
