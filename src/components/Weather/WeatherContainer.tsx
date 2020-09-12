import React from "react";
import SearchForm from "./SearchForm";
import Weather from "./Weather";
import { useSelector } from "react-redux";
import { LinearProgress } from "@material-ui/core";
import {
  getIsFetching,
  getWeather,
} from "../../redux/selectors/weather-selectors";
import { WeatherType } from "../../types/types";

const WeatherContainer: React.FC = () => {
  const isFetching: boolean = useSelector(getIsFetching);
  const weather: WeatherType | null = useSelector(getWeather);

  return (
    <>
      <SearchForm />
      {isFetching && <LinearProgress />}
      {weather && <Weather weather={weather} />}
    </>
  );
};

export default WeatherContainer;
