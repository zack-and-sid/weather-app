import { useEffect, useState } from "react";
import "./App.css";

const responseObject = {
  request: {
    type: "City",
    query: "New York, United States of America",
    language: "en",
    unit: "m",
  },
  location: {
    name: "New York",
    country: "United States of America",
    region: "New York",
    lat: "40.714",
    lon: "-74.006",
    timezone_id: "America/New_York",
    localtime: "2021-06-21 16:34",
    localtime_epoch: 1624293240,
    utc_offset: "-4.0",
  },
  current: {
    observation_time: "08:34 PM",
    temperature: 29,
    weather_code: 116,
    weather_icons: [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png",
    ],
    weather_descriptions: ["Partly cloudy"],
    wind_speed: 0,
    wind_degree: 182,
    wind_dir: "S",
    pressure: 1004,
    precip: 0,
    humidity: 65,
    cloudcover: 75,
    feelslike: 32,
    uv_index: 6,
    visibility: 16,
    is_day: "yes",
  },
};

function App() {
  const apiKey = process.env.REACT_APP_WEATHER_STACK_API;
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=NewYork`
      );
      const parsedResponse = await response.json();
      console.log(response);
      console.log(parsedResponse);
    };
    // console.log(responseObject);
    // setWeather(responseObject);
    getWeather();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <p>{apiKey}</p>
        <p>{weather?.current?.weather_descriptions}</p>
      </header>
    </div>
  );
}

export default App;
