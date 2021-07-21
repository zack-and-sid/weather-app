import InfoDisplay from "./InfoDisplay";
import styled from "styled-components";
// import Sunrise from "./Sunrise";

const StyledLargeWeather = styled.article`
  /* min-height: 35rem; */
  /* height: 50vh; */
  font-size: 1.3rem;

  .wrapper-large-weather {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 95%;
  }

  &::after {
    position: absolute;
    top: 0;
    left: -30%;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.1) 10%,
        rgba(255, 255, 255, 0.65) 50%,
        rgba(255, 255, 255, 0.95) 98%
      ),
      url("${({ $mapUrl }) => $mapUrl}");
    background-repeat: no-repeat;
    background-size: cover;
    /* background-size: 105% 105%; */

    z-index: -1;
  }

  .meta-container {
    min-width: 125px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;
  }

  button {
    padding: 2px 8px;
    margin-right: 5px;
    background: orange;
    border-radius: 25px;
  }
`;

export default function LargeWeather(props) {
  const {
    loading,
    isMetric,
    mapUrl,
    displayWeather,
    address,
    setWeatherIndex,
  } = props;

  console.log(displayWeather);

  console.log(displayWeather);
  const {
    temp,
    description,
    feelsLike,
    icon,
    pop,
    sunrise,
    sunset,
    date,
    moonPhase,
  } = displayWeather;

  return (
    <StyledLargeWeather $mapUrl={mapUrl}>
      <div className="wrapper wrapper-large-weather">
        <div className="meta-container">
          <h2>{address}</h2>
          <div className="date-container">
            <button onClick={() => setWeatherIndex(0)}>Today</button>
            <time dateTime={date}>{date}</time>
          </div>
        </div>
        <InfoDisplay
          temp={temp}
          description={description}
          feelsLike={feelsLike}
          icon={icon}
          pop={pop}
          sunrise={sunrise}
          sunset={sunset}
          moonPhase={moonPhase}
          isMetric={isMetric}
        />
      </div>
    </StyledLargeWeather>
  );
}
