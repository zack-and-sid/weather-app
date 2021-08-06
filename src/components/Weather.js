import { useState } from "react";
import styled from "styled-components";
import LargeWeather from "./LargeWeather";
import WeeklyForecast from "./WeeklyForecast";

const StyledWeather = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: calc(100% - var(--height-header)); */
`;

const Weather = ({ weatherDays, isMetric, mapUrl, loading, address }) => {
  const [weatherIndex, setWeatherIndex] = useState(0);
  const dailys = weatherDays.slice(1);

  const displayWeather = weatherDays[weatherIndex];
  return (
    <StyledWeather>
      <LargeWeather
        key={mapUrl}
        mapUrl={mapUrl}
        isMetric={isMetric}
        loading={loading}
        displayWeather={displayWeather}
        address={address}
        setWeatherIndex={setWeatherIndex}
        weatherIndex={weatherIndex}
      />
      <WeeklyForecast
        dailys={dailys}
        setWeatherIndex={setWeatherIndex}
        isMetric={isMetric}
        currentWeatherIndex={weatherIndex}
      />
    </StyledWeather>
  );
};

export default Weather;
