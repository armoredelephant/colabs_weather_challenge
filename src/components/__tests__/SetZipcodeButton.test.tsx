import React from "react";
import { render } from "@testing-library/react";
import Button from "../SetZipcodeButton";

describe("<Button />", () => {
  test("it renders", async () => {
    const { findByTestId } = render(<Button text="text" />);
    const button = await findByTestId("_Button_");
    expect(button).toBeDefined();
  });
});
