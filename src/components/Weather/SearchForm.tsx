import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  Collapse,
  IconButton,
} from "@material-ui/core";
import { Autocomplete, Alert } from "@material-ui/lab";
import { Search as SearchIcon, Close as CloseIcon } from "@material-ui/icons";
import {
  addToFoundWeatherHistory,
  getFoundWeatherHistory,
} from "../../utils/found-weather-history";
import { useDispatch, useSelector } from "react-redux";
import { actions as weatherActions } from "../../redux/actions/weather-actions";
import { searchWeather } from "../../redux/reducers/weather-reducer";
import { getIsSearchError } from "../../redux/selectors/weather-selectors";

const SearchForm: React.FC = () => {
  const isSearchError: boolean = useSelector(getIsSearchError);
  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatch(searchWeather(searchValue));
    addToFoundWeatherHistory(searchValue);
  };

  const handleCityNameChange = (event: React.ChangeEvent<{}>): void => {
    const target = event.currentTarget as HTMLInputElement;
    setSearchValue(target.value || target.innerHTML);
  };

  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Find your city weather
      </Typography>

      <form onSubmit={handleSubmit}>
        <div className="weather-search-fields">
          <Autocomplete
            freeSolo
            onInputChange={handleCityNameChange}
            options={getFoundWeatherHistory()}
            className="weather-search-input"
            renderInput={(params) => (
              <TextField
                {...params}
                required
                autoFocus
                margin="normal"
                label="City name..."
                name="city_name"
              />
            )}
          />
          <Box className="weather-search-btn-wrapper">
            <Button type="submit" variant="contained" color="primary">
              <SearchIcon />
            </Button>
          </Box>
        </div>
      </form>

      <Collapse in={isSearchError}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() =>
                dispatch(weatherActions.searchWeatherErrorToggle(false))
              }
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Something went wrong!
        </Alert>
      </Collapse>
    </>
  );
};

export default SearchForm;
