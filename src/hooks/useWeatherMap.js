import { useState } from 'react';
import { getWeatherMap } from '../api';

export default function useWeatherMap() {
  const [weatherMap, setWeatherMap] = useState();

  const updateWeatherMap = async (coordinates) => {
    try {
      const weatherMap = await getWeatherMap(coordinates);
      if (weatherMap) {
        setWeatherMap(weatherMap);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { weatherMap, updateWeatherMap };
}
