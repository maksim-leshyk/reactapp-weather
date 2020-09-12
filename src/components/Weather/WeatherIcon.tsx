import React from "react";
import { ReactComponent as CloudyIcon } from "../../assets/images/weather/cloudy.svg";
import { ReactComponent as HazeIcon } from "../../assets/images/weather/haze.svg";
import { ReactComponent as HeavyRainIcon } from "../../assets/images/weather/heavy-rain.svg";
import { ReactComponent as PartlyCloudyIcon } from "../../assets/images/weather/partly-cloudy.svg";
import { ReactComponent as RainIcon } from "../../assets/images/weather/rain.svg";
import { ReactComponent as SleetIcon } from "../../assets/images/weather/sleet.svg";
import { ReactComponent as SnowIcon } from "../../assets/images/weather/snow.svg";
import { ReactComponent as SunnyIcon } from "../../assets/images/weather/sunny.svg";
import { ReactComponent as ThunderstormIcon } from "../../assets/images/weather/thunderstorm.svg";

type PropsType = {
  code: number;
};

const WeatherIcon: React.FC<PropsType> = ({ code }) => {
  let Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  switch (code) {
    //Clear
    case 800:
      Icon = SunnyIcon;
      break;

    //Cloud
    case 801:
    case 802:
      Icon = PartlyCloudyIcon;
      break;
    case 803:
    case 804:
      Icon = CloudyIcon;
      break;

    //Rain
    case 500:
    case 501:
    case 520:
    case 521:
    case 511:
      Icon = RainIcon;
      break;
    case 502:
    case 503:
    case 504:
    case 522:
    case 531:
      Icon = HeavyRainIcon;
      break;

    //Drizzle
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      Icon = RainIcon;
      break;

    //Thunderstorm
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      Icon = ThunderstormIcon;
      break;

    //Snow
    case 600:
    case 601:
    case 602:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      Icon = SnowIcon;
      break;
    case 611:
      Icon = SleetIcon;
      break;

    //Atmosphere
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
    case 771:
    case 781:
      Icon = HazeIcon;
      break;

    default:
      Icon = SunnyIcon;
  }
  return <Icon className="weather-icon" />;
};

export default WeatherIcon;
