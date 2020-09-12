import React, { useState } from "react";
import styled from "styled-components";
import { ForecastType } from "./_types";
import ForecastChanger from "./ForecastChanger";
import { ForecastButtonElement } from "./_types";
import ForecastList from "./ForecastList";

const Container = styled.main`
  width: 100%;
  padding: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 66.66%;
`;

const ForecastDisplay: React.FC = () => {
  const [forecastType, setForecastType] = useState<ForecastType>("Current");

  const handleForecastType = (e: React.MouseEvent<ForecastButtonElement>) => {
    e.currentTarget.name === "Current"
      ? setForecastType("Current")
      : setForecastType("Five Day");
  };

  return (
    <Container data-testid="_ForecastDisplay_">
      <Wrapper>
        <ForecastChanger
          forecastType={forecastType}
          handleForecast={handleForecastType}
        />
        <ForecastList forecastType={forecastType} />
      </Wrapper>
    </Container>
  );
};

export default ForecastDisplay;
