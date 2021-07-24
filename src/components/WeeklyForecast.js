import styled from 'styled-components';
import Day from './Day';

const StyledWeeklyForecast = styled('div')`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: var(--height-forecast);
  background: rgba(232, 232, 232, 0.5);
  /* padding-bottom: 5rem; */
  .wrapper-weekly-forecast {
    display: flex;
    justify-content: space-around;
    /* padding-bottom: 5rem; */
  }
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

  return (
    <StyledWeeklyForecast>
      <div className="wrapper wrapper-weekly-forecast">{days}</div>
    </StyledWeeklyForecast>
  );
};

export default WeeklyForecast;
