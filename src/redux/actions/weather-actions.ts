import { WeatherType } from "../../types/types";
import { WeatherActionTypes } from "../action-types";
import { InferActionsTypes } from "../redux-store";

export const actions = {
  searchWeatherInitializingToggle: (isFetching: boolean) =>
    ({
      type: WeatherActionTypes.SEARCH_WEATHER_INITIALIZING_TOGGLE,
      isFetching,
    } as const),
  searchWeatherSet: (weatherData: WeatherType | null) =>
    ({
      type: WeatherActionTypes.SEARCH_WEATHER_SET,
      weatherData,
    } as const),
  searchWeatherErrorToggle: (isSearchError: boolean) =>
    ({
      type: WeatherActionTypes.SEARCH_WEATHER_ERROR_TOGGLE,
      isSearchError,
    } as const),
};

export type ActionsType = InferActionsTypes<typeof actions>;
