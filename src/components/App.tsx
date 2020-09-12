import React, { useState } from "react";
import LocationForm from "./LocationForm";
import ForecastDisplay from "./ForecastDisplay";

/**
 * display main temp component if zipcode is set
 *
 * main component will have buttons at top to switch between 5 day and current
 *
 * default to current
 */

export const ZipcodeContext = React.createContext<string | null>(null);

const App: React.FC = () => {
  const [zipcode, setZipcode] = useState<string | null>(null);
  const { Provider } = ZipcodeContext;
  console.log(zipcode);
  return (
    <div data-testid="_App_">
      <LocationForm setZipcode={setZipcode} />
      {zipcode && (
        <Provider value={zipcode}>
          <ForecastDisplay />
        </Provider>
      )}
    </div>
  );
};

export default App;
