import { Dispatch } from "redux";
import { BaseThunkType } from "../redux-store";
import {
  WeatherType,
  isWeatherType,
  WeatherResponseType,
} from "../../types/types";
import { actions, ActionsType } from "../actions/weather-actions";
import { searchWeatherByName } from "../../api/weather-api";
import { WeatherActionTypes } from "../action-types";

type InitialStateType = {
  weather: WeatherType | null;
  isFetching: boolean;
  isSearchError: boolean;
};

let initialState: InitialStateType = {
  weather: null,
  isFetching: false,
  isSearchError: false,
};

const weatherReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case WeatherActionTypes.SEARCH_WEATHER_INITIALIZING_TOGGLE:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case WeatherActionTypes.SEARCH_WEATHER_SET:
      return {
        ...state,
        weather: action.weatherData,
      };
    case WeatherActionTypes.SEARCH_WEATHER_ERROR_TOGGLE:
      return {
        ...state,
        weather: !action.isSearchError ? state.weather : null,
        isSearchError: action.isSearchError,
      };
    default:
      return state;
  }
};

type ThunkType = BaseThunkType<ActionsType>;

export const searchWeather = (value: string): ThunkType => async (
  dispatch: Dispatch
) => {
  dispatch(actions.searchWeatherInitializingToggle(true));

  try {
    dispatch(actions.searchWeatherSet(null));
    const data: WeatherResponseType = (await searchWeatherByName(value)).data;
    if (!isWeatherType(data)) {
      throw new Error(data.message);
    }
    dispatch(actions.searchWeatherSet(data));
  } catch (err) {
    dispatch(actions.searchWeatherErrorToggle(true));
  } finally {
    dispatch(actions.searchWeatherInitializingToggle(false));
  }
};

export default weatherReducer;
