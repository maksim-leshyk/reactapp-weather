# Weather Application

Weather application built with React.

## Used Technologies

React, Redux, Typescript, SCSS, Material UI.

## Installation Guide

At first you need to clone repository and install dependencies:
```bash
git clone https://github.com/maksim-leshyk/reactapp-weather.git
cd ./reactapp-weather
yarn install
```

After installation you need an API key from OpenWeatherMap, you can get one by creating an account on their website.

After you got your API key, copy **.env.local** from **.env.example** and replace YOUR_KEY with your OpenWeatherMap API Key:

```bash
cp .env.example .env.local
```

API key parameter in env file:

```
REACT_APP_WEATHER_API_KEY=YOUR_KEY
```

And at the end run your local server:

```bash
yarn start
```

## Links

[OpenWeatherMap](https://openweathermap.org/ 'OpenWeatherMap') (Weather data API)