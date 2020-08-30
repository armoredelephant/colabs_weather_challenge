import React, { SetStateAction } from "react";
import { useForm } from "react-hook-form";
// import styled from "styled-components";

import Button from "./reusable/Button";

interface Props {
  setZipcode: React.Dispatch<SetStateAction<string | null>>;
}

// Please enter your zipcode: []
// zip should error if can't parseInt

/**
 * TODO
 * Add error message
 */

const LocationForm: React.FC<Props> = ({ setZipcode }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ zipcode }: any) => {
    const validZipcode = parseInt(zipcode);

    if (!validZipcode) {
      console.log("Invalid zipcode.");
      return;
    }

    setZipcode(zipcode);
  };

  return (
    <div data-testid="_LocationForm_">
      <form data-testid="_LocationForm_form" onSubmit={handleSubmit(onSubmit)}>
        <label className="location-form_label" htmlFor="zipcode">
          Please enter your zipcode:
        </label>
        <input
          name="zipcode"
          placeholder="Zipcode"
          data-testid="_LocationForm_zipcode"
          ref={register}
        />
        <Button type="submit" text="show forecasts" />
      </form>
    </div>
  );
};

export default LocationForm;