import React from "react";
import styled from "styled-components";
import ForecastButton from "./reusable/ForecastButton";
import { ForecastButtonElement, ForecastType } from "./_types";

const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  width: 100%;
`;

interface Props {
  forecastType: ForecastType;
  handleForecast: (e: React.MouseEvent<ForecastButtonElement>) => void;
}

const ForecastChanger: React.FC<Props> = ({ forecastType, handleForecast }) => {
  return (
    <Container data-testid="_ForecastChanger_">
      <ForecastButton
        handleForecast={handleForecast}
        text="Current"
        active={forecastType === "Current"}
      />
      <ForecastButton
        handleForecast={handleForecast}
        text="Five Day"
        active={forecastType === "Five Day"}
      />
    </Container>
  );
};

export default ForecastChanger;
