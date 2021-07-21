import styled from "styled-components";
import Day from "./Day";

const StyledWeeklyForecast = styled("div")`
  background: white;
  .wrapper-weekly-forecast {
    display: flex;
    justify-content: space-around;
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
