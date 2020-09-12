import React from "react";
import styled from "styled-components";
import { ForecastType } from "./_types";
import CurrentForecast from "./CurrentForecast";
import FiveDayForecast from "./FiveDayForecast";

interface Props {
  forecastType: ForecastType;
}

const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  width: 100%;
`;

const ForecastList: React.FC<Props> = ({ forecastType }) => {
  return (
    <Container data-testid="_ForecastList_">
      {forecastType === "Current" ? <CurrentForecast /> : <FiveDayForecast />}
    </Container>
  );
};

export default ForecastList;
