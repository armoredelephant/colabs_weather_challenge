import React, { useState, useContext, useEffect } from "react";
import { ZipcodeContext } from "./App";
import { getCurrentWeather } from "./utils/fetchers";
import styled from "styled-components";

/**
 * Data/Time/Location
 * Temperature
 * Icon - data.weather[0].icon or id
 */

const ForecastWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column;
`;

const ForecastRow = styled.div`
  display: flex;
  width: 66.66%;
  justify-content: center;
  flex-flow: row;
  align-self: center;
`;

const ForecastDate = styled.time`
  font-size: 16px;
  text-align: center;
`;

const ForecastTemp = styled.div`
  font-size: 84px;
  font-weight: 700;
  padding-right: 0.4rem;
`;

const ForecastIcon = styled.img``;

const ForecastDescription = styled.div`
  display: flex;
  padding-left: 0.4rem;
  justify-content: center;
  flex-flow: column;
`;

const ForecastCondition = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const CurrentForecast: React.FC = () => {
  const [forecast, setForecast] = useState<any | undefined>(undefined);
  const [status, setStatus] = useState<"fetching" | "fetched" | null>(null);
  const zipcode = useContext(ZipcodeContext);

  useEffect(() => {
    if (!zipcode) return;
    const fetchData = async () => {
      setStatus("fetching");

      const data = await getCurrentWeather(zipcode);

      console.log(data);

      // date and time
      const date = new Date(data.dt * 1000);
      const time = date.setTime(date.getTime() + data.timezone * 1000);
      const timezoneDate = new Date(time).toString();

      // temp
      const temp = data.main.temp;

      // icon
      const icon = data.weather[0].icon;

      const forecastData = {
        iconUrl: `http://openweathermap.org/img/w/${icon}.png`,
        weatherCon: data.weather[0].main,
        temp: temp,
        date: timezoneDate,
      };

      setForecast(forecastData);

      setStatus("fetched");
    };

    fetchData();
  }, [zipcode]);

  return (
    <>
      {status === "fetching" ? (
        <div data-testid="_Loading_">Loading...</div>
      ) : (
        <ForecastWrapper data-testid="_CurrentForecast_">
          <ForecastDate>{forecast ? forecast.date : ""}</ForecastDate>
          <ForecastRow>
            <ForecastTemp>
              {forecast ? `${forecast?.temp}\xb0` : ""}
            </ForecastTemp>
            <ForecastDescription>
              <ForecastIcon
                alt="Weather Icon"
                src={forecast?.iconUrl}
              ></ForecastIcon>
              <ForecastCondition>
                {forecast ? forecast.weatherCon : ""}
              </ForecastCondition>
            </ForecastDescription>
          </ForecastRow>
        </ForecastWrapper>
      )}
    </>
  );
};

export default CurrentForecast;
