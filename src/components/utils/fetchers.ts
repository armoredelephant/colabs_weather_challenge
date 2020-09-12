import Axios from "axios";

export const getCurrentWeather = async (zipcode: string) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${process.env.REACT_APP_API_KEY}`;
  const response = await Axios.get(url);
  return response.data;
};
