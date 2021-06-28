import { useState } from 'react';
import { getCoordinates } from './api';
import './App.css';
import useWeather from './hooks/useWeather';
import useWeatherMap from './hooks/useWeatherMap';

function App() {
  const [address, setAddress] = useState('');

  // Keeping weather and weatherMap in the state because they're connected to the element on the page
  const { isWeatherLoading, updateWeather, weather } = useWeather();
  const { weatherMap, updateWeatherMap } = useWeatherMap();

  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // not keeping coordinates in state because it's not directly connected to what gets rendered on the page
    const coordinates = await getCoordinates(address);
    updateWeather(coordinates);
    updateWeatherMap(coordinates);
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
            value={address}
            id="address"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </header>
      <main>
        <p>{isWeatherLoading ? 'loading...' : description}</p>
        {weatherMap && <img src={weatherMap.url} alt={weatherMap.alt} />}
      </main>
    </div>
  );
}

export default App;
