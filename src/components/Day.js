import styled from "styled-components";
import { getTemp } from "../utils";

const StyledDay = styled.button`
  display: block;
  width: calc(100% / 6);
  /* border: 2px solid red; */
`;

const Day = (props) => {
  const {
    setWeatherIndex,
    index,
    min,
    max,
    date,
    icon,
    description,
    isMetric,
  } = props;
  const day = date.split(",")[0];
  const convertedMin = getTemp(isMetric, min);
  const convertedMax = getTemp(isMetric, max);

  return (
    <StyledDay onClick={() => setWeatherIndex(index)}>
      <div className="icon-container icon-small">
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
      </div>
      <div>
        {convertedMin}/{convertedMax}
      </div>
      <div>{day}</div>
    </StyledDay>
  );
};

export default Day;
