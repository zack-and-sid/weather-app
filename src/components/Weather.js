import { useState } from 'react';
import styled from 'styled-components';
import LargeWeather from './LargeWeather';
import WeeklyForecast from './WeeklyForecast';

const StyledWeather = styled.main``;

const Weather = ({ weatherDays, isMetric, mapUrl, loading, address }) => {
  const [weatherIndex, setWeatherIndex] = useState(0);

  const displayWeather = weatherDays[weatherIndex];
  return (
    <StyledWeather>
      <LargeWeather
        mapUrl={mapUrl}
        isMetric={isMetric}
        loading={loading}
        displayWeather={displayWeather}
        address={address}
      />
      <WeeklyForecast />
    </StyledWeather>
  );
};

export default Weather;
