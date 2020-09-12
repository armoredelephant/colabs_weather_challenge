import React from "react";
import { render } from "@testing-library/react";
import FiveDayForecast from "../FiveDayForecast";

describe("<FiveDayForecast />", () => {
  test("it renders", async () => {
    const { findByTestId } = render(<FiveDayForecast />);
    const fiveDayForecast = await findByTestId("_FiveDayForecast_");
    expect(fiveDayForecast).toBeDefined();
  });
});
