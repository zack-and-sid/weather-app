import { useState } from 'react';
import useWeather from './hooks/useWeather';
import useWeatherMap from './hooks/useWeatherMap';
import Header from './components/Header';
import useAddress from './hooks/useAddress';
import Weather from './components/Weather';

function App() {
  // Keeping weather and weatherMap in the state because they're connected to the element on the page
  const { isWeatherLoading, updateWeather, weather } = useWeather();
  const { mapUrl, updateMapUrl } = useWeatherMap();
  // const [currentAddress, setCurrentAddress] = useState("");
  const { currentAddress, updateAddress } = useAddress();
  const [isMetric, setIsMetric] = useState(true);

  const toggleTemp = () => {
    // console.log("toggled");
    setIsMetric(!isMetric);
  };

  // Transform weather into an array of 7 daily weathers
  const { current, hourly } = weather;

  const getMoonPhase = (originalValue) => {
    return Math.round(originalValue * 7);
  };

  const getAverage = (min, max) => {
    return (min + max) / 2;
  };

  const weatherDays = weather.daily.map((day, i) => {
    if (i === 0) {
      return {
        temp: current.temp,
        feelsLike: current.feels_like,
        sunrise: current.sunrise * 1000,
        sunset: current.sunset * 1000,
        description: current.weather[0].description,
        icon: current.weather[0].icon,
        moonPhase: getMoonPhase(day.moonPhase),
        pop: hourly[0].pop,
        min: day.temp.min,
        max: day.temp.max,
      };
    }
    return {
      temp: getAverage(day.temp.min, day.temp.max),
      feelsLike: getAverage(day.feelsLike.day, day.feelsLike.eve),
      sunrise: day.sunrise * 1000,
      sunset: day.sunset * 1000,
      description: day.weather.description,
      icon: day.weather.icon,
      moonPhase: getMoonPhase(day.moonPhase),
      pop: undefined,
      min: day.temp.min,
      max: day.temp.max,
    };
  });

  return (
    <div className="App">
      <Header
        updateWeather={updateWeather}
        updateMapUrl={updateMapUrl}
        updateAddress={updateAddress}
        toggleTemp={toggleTemp}
        isMetric={isMetric}
      />
      <Weather
        weatherDays={weatherDays}
        isMetric={isMetric}
        mapUrl={mapUrl}
        loading={isWeatherLoading}
        address={currentAddress}
      />
    </div>
  );
}

export default App;
