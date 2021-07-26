import styled from "styled-components";
import { getTemp } from "../utils";

const StyledDay = styled.button`
  display: block;
  width: calc(100% / 6);
  padding: 2rem 1rem 5rem;
  font-size: var(--fz-sm);
  /* border: 2px solid red; */
  .active,
  &:hover {
    background: linear-gradient(
      180deg,
      rgba(12, 12, 12, 0.06) 0%,
      rgba(0, 0, 0, 0.0438) 63.18%,
      rgba(255, 255, 255, 0) 86.82%
    );
  }
  .icon-container {
    height: 7vh;
    max-height: 40px;
    img {
      transform: scale(2);
      object-position: center;
      filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
    }
  }
  span {
    display: block;
  }

  .high-low {
    margin-top: 5px;
  }
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
      <span className="icon-container icon-small">
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
      </span>
      <span className="high-low">
        {convertedMin}/{convertedMax}
      </span>
      <span>{day}</span>
    </StyledDay>
  );
};

export default Day;
