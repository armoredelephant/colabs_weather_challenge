import React from "react";
import { act, cleanup, fireEvent, render } from "@testing-library/react";
import LocationForm from "../LocationForm";

afterEach(() => {
  cleanup();
});

const setZipcode = jest.fn();

describe("<LocationForm />", () => {
  test("it renders and submits with valid zipcode", async () => {
    const { findByTestId } = render(<LocationForm setZipcode={setZipcode} />);
    const locationForm = await findByTestId("_LocationForm_");

    await act(async () => {
      fireEvent.change(await findByTestId("_LocationForm_zipcode"), {
        target: {
          value: "12345",
        },
      });
    });

    await act(async () => {
      fireEvent.submit(await findByTestId("_LocationForm_form"));
    });

    expect(setZipcode).toHaveBeenCalledTimes(1);
    expect(locationForm).toBeDefined();
  });

  test("it does not submit with invalid zipcode", async () => {
    const { findByTestId } = render(<LocationForm setZipcode={setZipcode} />);
    const locationForm = await findByTestId("_LocationForm_");

    await act(async () => {
      fireEvent.change(await findByTestId("_LocationForm_zipcode"), {
        target: {
          value: "invalid",
        },
      });
    });

    await act(async () => {
      fireEvent.submit(await findByTestId("_LocationForm_form"));
    });

    expect(setZipcode).not.toHaveBeenCalledTimes(0);
    expect(locationForm).toBeDefined();
  });
});
