import { useState } from "react";
import { getWeather } from "../api";
import moment from "moment";
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

  const getMoonPhase = (ogValue) => {
    /* 
    0 = new moon
    0 - 0.25 = W
    0.25 = first quarter moon
    0.25 - 0.5 = Waxing Gibbous
    0.5 = full moon
    0.5 - 0.75 = Waning Gibbous
    0.75 = last quarter moon
    0.75 - 1 = Waning Crescent
    1 = new moon
    */

    if (ogValue === 0 || ogValue === 1) {
      return {
        description: "New Moon",
        fileName: "new-moon.png",
      };
    } else if (ogValue > 0 && ogValue < 0.25) {
      return {
        description: "Waxing Crescent",
        fileName: "waxing-crescent.png",
      };
    } else if (ogValue > 0.25 && ogValue < 0.5) {
      return { description: "Waxing Gibbous", fileName: "waxing-gibbous.png" };
    } else if (ogValue > 0.5 && ogValue < 0.75) {
      return { description: "Waning Gibbous", fileName: "waning-gibbous.png" };
    } else if (ogValue > 0.75 && ogValue < 1) {
      return {
        description: "Waning Crescent",
        fileName: "waning-crescent.png",
      };
    } else if (ogValue === 0.25) {
      return {
        description: "First Quarter Moon",
        fileName: "first-quarter.png",
      };
    } else if (ogValue === 0.5) {
      return { description: "Full Moon", fileName: "full-moon.png" };
    } else if (ogValue === 0.75) {
      return {
        description: "Last Quarter Moon",
        fileName: "third-quarter.png",
      };
    }
  };

  const getAverage = (min, max) => {
    const average = (min + max) / 2;
    return roundTemp(average);
  };

  const roundTemp = (temp) => {
    return Math.round(temp);
  };

  const formatPop = (num) => {
    const percentage = num * 100;
    return Math.round(percentage) + "%";
  };

  const formatTime = (time) => {
    const m = moment(time);
    const formattedTime = m.format("h:mma");
    return formattedTime;
  };

  const formatDate = (time) => {
    const m = moment(time);
    const formattedDate = m.format("ddd, MMM D");
    return formattedDate;
  };

  // remove last element (day)
  const weatherDays = daily.slice(0, -1).map((day, i) => {
    if (i === 0) {
      return {
        temp: roundTemp(current.temp),
        feelsLike: roundTemp(current.feels_like),
        sunrise: formatTime(current.sunrise * 1000),
        sunset: formatTime(current.sunset * 1000),
        description: current.weather[0].description,
        icon: current.weather[0].icon,
        moonPhase: getMoonPhase(day.moonPhase),
        pop: formatPop(hourly[0].pop),
        min: roundTemp(day.temp.min),
        max: roundTemp(day.temp.max),
        date: formatDate(current.sunrise * 1000),
      };
    }
    return {
      temp: getAverage(day.temp.min, day.temp.max),
      feelsLike: getAverage(day.feelsLike.day, day.feelsLike.eve),
      sunrise: formatTime(day.sunrise * 1000),
      sunset: formatTime(day.sunset * 1000),
      description: day.weather.description,
      icon: day.weather.icon,
      moonPhase: getMoonPhase(day.moonPhase),
      pop: undefined,
      min: roundTemp(day.temp.min),
      max: roundTemp(day.temp.max),
      date: formatDate(day.sunrise * 1000),
    };
  });

  return {
    updateWeather,
    isWeatherLoading,
    weatherDays,
  };
}
