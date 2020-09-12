import React from "react";
import WeatherIcon from "./WeatherIcon";
import { Typography, CssBaseline, Box } from "@material-ui/core";
import { ReactComponent as HighIcon } from "../../assets/images/high-icon.svg";
import { ReactComponent as HumidityIcon } from "../../assets/images/humidity-icon.svg";
import { ReactComponent as LowIcon } from "../../assets/images/low-icon.svg";
import { ReactComponent as PressureIcon } from "../../assets/images/pressure-icon.svg";
import { ReactComponent as WindIcon } from "../../assets/images/wind-icon.svg";
import { WeatherType } from "../../types/types";

type PropsType = {
  weather: WeatherType;
};

const Weather: React.FC<PropsType> = ({ weather }) => {
  return (
    <Box className="weather-wrapper">
      <CssBaseline />
      <Box className="weather-container">
        <Box className="weather-main">
          {weather.name && (
            <Typography variant="h6" className="weather-city-name">
              {weather.name}
            </Typography>
          )}
          <Box className="weather-main-temp">
            {weather.weather && <WeatherIcon code={weather.weather[0].id} />}
            {weather.main.temp && (
              <Box component="span">
                {weather.main.temp.toFixed(0)}
                <sup>&deg;</sup>
              </Box>
            )}
          </Box>
          {weather.weather && (
            <Typography variant="h6" className="weather-desc">
              {weather.weather[0].description}
            </Typography>
          )}
        </Box>
        <Box className="weather-additional">
          {weather.main.feels_like && (
            <Typography variant="h5" className="weather-feels-like">
              Feels like {weather.main.feels_like.toFixed(1)}
              <sup>&deg;</sup>
            </Typography>
          )}
          <Box className="weather-highlow-container">
            {weather.main.temp_max && (
              <Box className="weather-degree">
                <HighIcon />
                {weather.main.temp_max.toFixed(0)}
                <sup>&deg;</sup>
              </Box>
            )}
            {weather.main.temp_min && (
              <Box className="weather-degree">
                <LowIcon />
                {weather.main.temp_min.toFixed(0)}
                <sup>&deg;</sup>
              </Box>
            )}
          </Box>
          {weather.main.humidity && (
            <Box className="weather-info-row">
              <Box>
                <HumidityIcon /> Humidity
              </Box>
              <Box component="span">{weather.main.humidity}%</Box>
            </Box>
          )}
          {weather.wind.speed && (
            <Box className="weather-info-row">
              <Box>
                <WindIcon /> Wind
              </Box>
              <Box component="span">{weather.wind.speed} kph</Box>
            </Box>
          )}
          {weather.main.pressure && (
            <Box className="weather-info-row">
              <Box>
                <PressureIcon /> Pressure
              </Box>
              <Box component="span">{weather.main.pressure} hPa</Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Weather;
