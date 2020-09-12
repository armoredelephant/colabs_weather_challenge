import React from "react";
import { render, cleanup, act } from "@testing-library/react";

import CurrentForecast from "../CurrentForecast";

afterEach(cleanup);

describe("<CurrentForecast />", () => {
  test("it displays the Loading... div", async () => {
    const { findByTestId } = render(<CurrentForecast />);
    expect(findByTestId("_Loading_")).toBeDefined();
  });

  test("It renders after Loading.", async () => {
    await act(async () => {
      const { findByTestId } = render(<CurrentForecast />);
      expect(await findByTestId("_CurrentForecast_")).toBeDefined();
    });
  });
});
