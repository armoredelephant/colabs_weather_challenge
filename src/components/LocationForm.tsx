import React, { useContext, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import SetZipcodeButton from "./SetZipcodeButton";
import { zipcodeContext } from "./utils/context";
import { useYupValidationResolver } from "./utils/yup";

/**
 * TODO
 * Add error message
 */

// https://react-hook-form.com/advanced-usage/

const LocationForm: React.FC = () => {
  const { setCurrentZipcode } = useContext(zipcodeContext);
  const validationSchema = useMemo(
    () =>
      yup.object({
        zipcode: yup
          .number()
          .required("Required")
          .positive()
          .test(
            "len",
            "Must be exactly 5 characters",
            (val) => val?.toString().length === 5
          ),
      }),
    []
  );

  const resolver = useYupValidationResolver(validationSchema);

  const { errors, register, handleSubmit } = useForm({ resolver });

  const onSubmit = async ({ zipcode }: any) => {
    setCurrentZipcode(zipcode);
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
        <SetZipcodeButton text="show forecasts" />
        {errors.zipcode && <div>Please enter a valid zipcode.</div>}
      </form>
    </div>
  );
};

export default LocationForm;
