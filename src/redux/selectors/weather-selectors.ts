import { AppStateType } from "../redux-store";

export const getIsFetching = (state: AppStateType) =>
  state.weatherPage.isFetching;

export const getIsSearchError = (state: AppStateType) =>
  state.weatherPage.isSearchError;

export const getWeather = (state: AppStateType) => state.weatherPage.weather;
