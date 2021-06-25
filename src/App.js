import { useEffect, useState } from "react";
import "./App.css";
import useWeather from "./hooks/useWeather";

function App() {
  const mapApiKey = process.env.REACT_APP_MAPQUEST_API;
  const openWeatherAPI = process.env.REACT_APP_OPEN_WEATHER_API;

  const {
    coordinates,
    isLoading,
    weather,
    setAddress,
    updateWeather,
  } = useWeather();

  // const [weather, setWeather] = useState({});
  const [mapUrl, setMapUrl] = useState("");
  const [addressInput, setAddressInput] = useState("");
  // const [error, setError] = useState(null);

  const getCoordinates = async (location) => {
    const response = await fetch(
      `http://www.mapquestapi.com/geocoding/v1/address?key=${mapApiKey}&location=${location}`
    );
    const coordinateData = await response.json();
    const result = coordinateData.results[0].locations[0].latLng;

    return result;
  };

  const getMapUrl = async ({ lat, lng }) => {
    const response = await fetch(
      `https://open.mapquestapi.com/staticmap/v5/map?key=${mapApiKey}&center=${lat},${lng}`
    );

    return response.url;
  };

  // weatherAPI call
  const getWeather = async (lat, lng) => {
    // const response = await fetch(
    //   `http://api.weatherstack.com/current?access_key=abb76f98293860a41b391cd7208a22b5&query=New%20York`
    // );
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

  // console.log(responseObject);

  const handleChange = (event) => {
    setAddressInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const { lat, lng } = await getCoordinates(addressInput);
    // const weather = await getWeather(lat, lng);
    // console.log(weather);
    // setWeather(weather);
    // console.log(coordinates);
    // const mapUrl = await getMapUrl(coordinates);
    // setMapUrl(mapUrl);
    updateWeather();
  };

  const description = weather?.current?.weather[0]?.description;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            value={addressInput}
            id="address"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </header>
      <main>
        {description && <p>{description}</p>}
        <img src={mapUrl} alt={`map of ${weather?.location?.regio}`} />
      </main>
    </div>
  );
}

export default App;
