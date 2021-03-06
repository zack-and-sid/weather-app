import styled from "styled-components";
import Day from "./Day";

const StyledWeeklyForecast = styled("div")`
  /* position: absolute;
  bottom: 0;
  left: 0; */
  width: 100%;
  /* height: var(--height-forecast); */
  background: var(--clr-forecast);
  /* padding-bottom: 5rem; */
  .wrapper-weekly-forecast {
    display: flex;
    justify-content: space-around;
    /* padding-bottom: 5rem; */
  }
`;

const WeeklyForecast = ({
  dailys,
  setWeatherIndex,
  isMetric,
  currentWeatherIndex,
}) => {
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
        active={weatherIndex === currentWeatherIndex}
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
