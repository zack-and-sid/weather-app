import { useState } from "react";
import { getWeatherMap } from "../api";

export default function useWeatherMap() {
  const [mapUrl, setMapUrl] = useState();

  const updateMapUrl = async (coordinates) => {
    try {
      const weatherMap = await getWeatherMap(coordinates);
      if (weatherMap) {
        setMapUrl(weatherMap);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { mapUrl, updateMapUrl };
}
