import React from "react";
import LocationForm from "./LocationForm";
import ForecastDisplay from "./ForecastDisplay";
import { useError, useZipcode } from "./utils/hooks";
import { errorContext, zipcodeContext } from "./utils/context";

/**
 * display main temp component if zipcode is set
 *
 * main component will have buttons at top to switch between 5 day and current
 *
 * default to current
 */

const App: React.FC = () => {
  const zipcode = useZipcode();
  const error = useError();

  return (
    <div data-testid="_App_">
      <zipcodeContext.Provider value={zipcode}>
        <errorContext.Provider value={error}>
          <LocationForm />
          {zipcode.zipcode && <ForecastDisplay />}
        </errorContext.Provider>
      </zipcodeContext.Provider>
    </div>
  );
};

export default App;
