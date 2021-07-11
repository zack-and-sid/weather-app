import { useState } from "react";
import { getWeather } from "../api";

/**
 * @returns {{weather: Object, updateWeather: (coordinates) => void, isWeatherLoading: boolean}}
 */
export default function useWeather() {
  const initialWeather = { current: {}, hourly: [], daily: [] };
  const [weather, setWeather] = useState(initialWeather);
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);

  const updateWeather = async (coordinates) => {
    if (!coordinates) return;
    setIsWeatherLoading(true);
    const weather = await getWeather(coordinates);
    setWeather(weather);
    setIsWeatherLoading(false);
  };

  // Transform weather into an array of 7 daily weathers
  const { current, hourly, daily } = weather;

  const getMoonPhase = (originalValue) => {
    return Math.round(originalValue * 7);
  };

  const getAverage = (min, max) => {
    return (min + max) / 2;
  };

  const weatherDays = daily.map((day, i) => {
    if (i === 0) {
      return {
        temp: current.temp,
        feelsLike: current.feels_like,
        sunrise: current.sunrise * 1000,
        sunset: current.sunset * 1000,
        description: current.weather[0].description,
        icon: current.weather[0].icon,
        moonPhase: getMoonPhase(day.moonPhase),
        pop: hourly[0].pop,
        min: day.temp.min,
        max: day.temp.max,
      };
    }
    return {
      temp: getAverage(day.temp.min, day.temp.max),
      feelsLike: getAverage(day.feelsLike.day, day.feelsLike.eve),
      sunrise: day.sunrise * 1000,
      sunset: day.sunset * 1000,
      description: day.weather.description,
      icon: day.weather.icon,
      moonPhase: getMoonPhase(day.moonPhase),
      pop: undefined,
      min: day.temp.min,
      max: day.temp.max,
    };
  });

  return {
    updateWeather,
    isWeatherLoading,
    weatherDays,
  };
}
