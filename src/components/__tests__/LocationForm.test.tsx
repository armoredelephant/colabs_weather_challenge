import React from "react";
import { act, cleanup, fireEvent, render } from "@testing-library/react";
import LocationForm from "../LocationForm";

beforeEach(() => {
  jest.resetAllMocks();
});

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

    expect(setZipcode).toHaveBeenCalled();
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

    expect(setZipcode).not.toHaveBeenCalled();
    expect(locationForm).toBeDefined();
  });
});
