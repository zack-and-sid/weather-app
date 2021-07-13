import styled from 'styled-components';
import Day from './Day';

const StyledWeeklyForecast = styled('div')`
  display: flex;
`;

const WeeklyForecast = ({ dailys, setWeatherIndex, isMetric }) => {
  const days = dailys.map((day, i) => {
    const weatherIndex = i + 1;
    const { min, max, date, icon, description } = day;
    return (
      <Day
        key={i}
        setWeatherIndex={setWeatherIndex}
        index={weatherIndex}
        min={min}
        max={max}
        date={date}
        icon={icon}
        description={description}
        isMetric={isMetric}
      />
    );
  });

  return <StyledWeeklyForecast>{days}</StyledWeeklyForecast>;
};

export default WeeklyForecast;
