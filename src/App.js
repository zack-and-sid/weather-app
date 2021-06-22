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
  const mapApiKey = process.env.REACT_APP_MAPQUEST_API;

  const [weather, setWeather] = useState({});
  const [map, setMap] = useState("");
  const [addressInput, setAddressInput] = useState("");

  const getLocation = async (lat, lng) => {
    const response = await fetch(
      `https://open.mapquestapi.com/staticmap/v5/map?key=${mapApiKey}&center=${lat},${lng}`
    );
    console.log(response);
    setMap(response);
  };

  const getCoordinates = async () => {
    const response = await fetch(
      `http://www.mapquestapi.com/geocoding/v1/address?key=${mapApiKey}&location=1600+Pennsylvania+Ave+NW,Washington,DC,20500`
    );
    const coordinateData = await response.json();
    return coordinateData.results[0].locations[0].latLng;
  };

  // weaterAPI call
  const getWeather = async (lat, lng) => {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=${apiKey}&query=${lat},${lng}`
    );
    const parsedResponse = await response.json();
    console.log(response);
    console.log(parsedResponse);
    // setWeather(responseObject);
  };

  // console.log(responseObject);

  const handleChange = (event) => {
    console.log(event.target.value);
    setAddressInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { lat, lng } = getCoordinates(addressInput);
    getWeather(lat, lng);
    getLocation();
  };

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
        <p>{apiKey}</p>
        <p>{weather?.current?.weather_descriptions}</p>
        <img src={map.url} alt={`map of ${weather?.location?.region}`} />
      </main>
    </div>
  );
}

export default App;
