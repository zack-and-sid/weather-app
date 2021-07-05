import { useState } from "react";
import { getWeather } from "../api";

/**
 * @returns {{weather: Object, updateWeather: (coordinates) => void, isWeatherLoading: boolean}}
 */
export default function useWeather() {
  const [weather, setWeather] = useState();
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);

  const updateWeather = async (coordinates, units) => {
    if (!coordinates) return;
    setIsWeatherLoading(true);
    const weather = await getWeather(coordinates, units);
    setWeather(weather);
    setIsWeatherLoading(false);
  };

  return {
    weather,
    updateWeather,
    isWeatherLoading,
  };
}
