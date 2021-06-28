import { useState } from "react";
import { getWeatherMap } from "../api";

export default function useWeatherMap() {
  const [mapUrl, setMapUrl] = useState();

  const updateMapUrl = async (coordinates) => {
    try {
      const mapUrl = await getWeatherMap(coordinates);
      console.log(mapUrl);
      if (mapUrl) {
        setMapUrl(mapUrl);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { mapUrl, updateMapUrl };
}
