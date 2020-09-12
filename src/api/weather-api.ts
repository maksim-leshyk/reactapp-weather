import axios, { AxiosResponse } from "axios";
import { WeatherResponseType } from "../types/types";

export const searchWeatherByName = (
  cityName: string
): Promise<AxiosResponse<WeatherResponseType>> => {
  return axios.get(String(process.env.REACT_APP_WEATHER_GET_ENDPOINT), {
    params: {
      q: cityName,
      units: process.env.REACT_APP_WEATHER_UNITS,
      appid: process.env.REACT_APP_WEATHER_API_KEY,
    },
  });
};
