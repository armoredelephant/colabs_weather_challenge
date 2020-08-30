import React, { useState } from "react";
import LocationForm from "./LocationForm";

/**
 * display main temp component if zipcode is set
 *
 * main component will have buttons at top to switch between 5 day and current
 *
 * default to current
 */

const App: React.FC = () => {
  const [zipcode, setZipcode] = useState<string | null>(null);
  console.log(zipcode);
  return (
    <div data-testid="_App_">
      <LocationForm setZipcode={setZipcode} />
      {/* {zipcode && (
        <ForcastDisplay />
      )} */}
    </div>
  );
};

export default App;
