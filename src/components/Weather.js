import { useState } from "react";
import styled from "styled-components";
import LargeWeather from "./LargeWeather";
import WeeklyForecast from "./WeeklyForecast";

const StyledWeather = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
`;

const Weather = ({ weatherDays, isMetric, mapUrl, loading, address }) => {
  const [weatherIndex, setWeatherIndex] = useState(0);
  const dailys = weatherDays.slice(1);

  const displayWeather = weatherDays[weatherIndex];
  return (
    <StyledWeather>
      <LargeWeather
        mapUrl={mapUrl}
        isMetric={isMetric}
        loading={loading}
        displayWeather={displayWeather}
        address={address}
        setWeatherIndex={setWeatherIndex}
      />
      <WeeklyForecast
        dailys={dailys}
        setWeatherIndex={setWeatherIndex}
        isMetric={isMetric}
      />
    </StyledWeather>
  );
};

export default Weather;
