const FOUND_WEATHER_KEY = "foundWeather";

const removeDuplicates = (cities: string[]): string[] =>
  cities.filter((city, index) => cities.indexOf(city) === index);

export const getFoundWeatherHistory = (): string[] => {
  const foundCities: string[] =
    JSON.parse(String(localStorage.getItem(FOUND_WEATHER_KEY))) || [];
  return removeDuplicates(foundCities);
};

export const addToFoundWeatherHistory = (cityName: string): void => {
  if (!cityName) {
    return;
  }

  let foundWeather = getFoundWeatherHistory();
  foundWeather.unshift(cityName);
  foundWeather = removeDuplicates(foundWeather).slice(0, 20);
  localStorage.setItem(FOUND_WEATHER_KEY, JSON.stringify(foundWeather));
};
