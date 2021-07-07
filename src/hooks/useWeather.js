import { useState } from "react";
import { getWeather } from "../api";

/**
 * @returns {{weather: Object, updateWeather: (coordinates) => void, isWeatherLoading: boolean}}
 */
export default function useWeather() {
  const [weather, setWeather] = useState();
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);

  const updateWeather = async (coordinates) => {
    if (!coordinates) return;
    setIsWeatherLoading(true);
    const weather = await getWeather(coordinates);
    setWeather(weather);
    setIsWeatherLoading(false);
  };

  return {
    weather,
    updateWeather,
    isWeatherLoading,
  };
}
