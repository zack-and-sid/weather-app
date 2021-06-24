import { useEffect, useState } from 'react';
import './App.css';

const responseObject = {
  request: {
    type: 'City',
    query: 'New York, United States of America',
    language: 'en',
    unit: 'm',
  },
  location: {
    name: 'New York',
    country: 'United States of America',
    region: 'New York',
    lat: '40.714',
    lon: '-74.006',
    timezone_id: 'America/New_York',
    localtime: '2021-06-21 16:34',
    localtime_epoch: 1624293240,
    utc_offset: '-4.0',
  },
  current: {
    observation_time: '08:34 PM',
    temperature: 29,
    weather_code: 116,
    weather_icons: [
      'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png',
    ],
    weather_descriptions: ['Partly cloudy'],
    wind_speed: 0,
    wind_degree: 182,
    wind_dir: 'S',
    pressure: 1004,
    precip: 0,
    humidity: 65,
    cloudcover: 75,
    feelslike: 32,
    uv_index: 6,
    visibility: 16,
    is_day: 'yes',
  },
};

function App() {
  const apiKey = process.env.REACT_APP_WEATHER_STACK_API;
  const mapApiKey = process.env.REACT_APP_MAPQUEST_API;
  const openWeatherAPI = process.env.REACT_APP_OPEN_WEATHER_API;

  const [weather, setWeather] = useState({});
  const [mapUrl, setMapUrl] = useState('');
  const [addressInput, setAddressInput] = useState('');

  const getMapUrl = async (lat, lng) => {
    const response = await fetch(
      `https://open.mapquestapi.com/staticmap/v5/map?key=${mapApiKey}&center=${lat},${lng}`
    );

    return response.url;
  };

  const getCoordinates = async (location) => {
    const response = await fetch(
      `http://www.mapquestapi.com/geocoding/v1/address?key=${mapApiKey}&location=${location}`
    );

    const coordinateData = await response.json();
    const result = coordinateData.results[0].locations[0].latLng;

    return result;
  };

  // weaterAPI call
  const getWeather = async (lat, lng) => {
    // const response = await fetch(
    //   `http://api.weatherstack.com/current?access_key=abb76f98293860a41b391cd7208a22b5&query=New%20York`
    // );
    console.log({ lat, lng });
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&appid=${openWeatherAPI}&units=metric`;

    try {
      const response = await fetch(url);
      const { current, daily, hourly } = await response.json();

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
    const { lat, lng } = await getCoordinates(addressInput);
    const weather = await getWeather(lat, lng);
    console.log(weather);
    setWeather(weather);
    const mapUrl = await getMapUrl(lat, lng);
    setMapUrl(mapUrl);
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
        <p>{weather.current.weather[0].description}</p>
        <img src={mapUrl} alt={`map of ${weather?.location?.region}`} />
      </main>
    </div>
  );
}

export default App;
