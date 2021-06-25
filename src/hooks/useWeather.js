import { useEffect, useState } from "react";

export default function useWeather() {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [coordinates, setCoordinates] = useState();
  const [address, setAddress] = useState("");

  useEffect(() => {
    async function updateWeatherByAddress() {
      const currentCoordinates = await getCoordinates(address);
      setCoordinates(currentCoordinates);
      const { lat, lng } = currentCoordinates;
      const weather = await getWeather(lat, lng);
      setWeather(weather);
    }

    if (isLoading) {
      updateWeatherByAddress();
      setIsLoading(false);
    }
  }, [isLoading]);

  const updateWeather = () => {
    setIsLoading(true);
  };

  return {
    weather,
    updateWeather,
    isLoading,
    coordinates,
    setAddress,
  };
}

const mapApiKey = process.env.REACT_APP_MAPQUEST_API;
const openWeatherAPI = process.env.REACT_APP_OPEN_WEATHER_API;

const getCoordinates = async (address) => {
  const response = await fetch(
    `http://www.mapquestapi.com/geocoding/v1/address?key=${mapApiKey}&location=${address}`
  );

  const coordinateData = await response.json();
  const coordinates = coordinateData.results[0].locations[0].latLng;

  return coordinates;
};

// weatherAPI call
const getWeather = async (lat, lng) => {
  console.log({ lat, lng });
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&appid=${openWeatherAPI}&units=metric`;
  console.log(openWeatherAPI);

  try {
    const response = await fetch(url);
    const { current, daily, hourly } = await response.json();
    console.log(response);

    const weather = {
      current,
      daily: daily.map((day) => ({
        temp: day.temp,
        feelsLike: day.feels_like,
        weather: day.weather[0],
        moonPhase: day.moon_phase,
        sunrise: day.sunrise,
        sunset: day.sunset,
        humidity: day.humidity,
        clouds: day.clouds,
        wind: day.wind_speed,
        uvi: day.uvi,
        pressure: day.pressure,
      })),
      hourly: hourly.map((hour) => {
        const {
          dt,
          temp,
          feels_like,
          wind_deg,
          wind_speed,
          weather,
          uvi,
          pop,
        } = hour;

        return {
          dt,
          temp,
          feels_like,
          wind_deg,
          wind_speed,
          weather: weather[0],
          uvi,
          pop,
        };
      }),
    };

    return weather;
  } catch (err) {
    console.log(err);
  }
};
