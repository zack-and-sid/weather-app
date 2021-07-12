import InfoDisplay from "./InfoDisplay";
import styled from "styled-components";
// import Sunrise from "./Sunrise";
import { ReactComponent as Sunrise } from "../assets/sunrise.svg";
import { ReactComponent as Sunset } from "../assets/sunset.svg";

const StyledLargeWeather = styled.article`
  height: 50vh;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: -30%;
    content: "";
    display: block;
    width: 105%;
    height: 105%;
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

  span {
    display: block;
  }
`;

export default function LargeWeather(props) {
  const { loading, isMetric, mapUrl, displayWeather, address } = props;

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

  const getTemp = (isMetric, temp) => {
    if (temp) {
      const temperature = isMetric ? temp : (temp * 9) / 5 + 32;
      return temperature + "°";
    }
    return;
  };

  const temperature = getTemp(isMetric, temp);
  const feelsLikeTemperature = getTemp(isMetric, feelsLike);

  return (
    <StyledLargeWeather $mapUrl={mapUrl}>
      <h2>{address}</h2>
      <time dateTime={date}>{date}</time>
      {/* <span>{loading ? "loading..." : description}</span> */}
      <span className="temperature">{temperature}</span>
      {temp === feelsLikeTemperature ? null : (
        <span className="feels-like">feels like {feelsLikeTemperature}</span>
      )}
      <div className="icon-container">
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
      </div>
      {pop && <span className="pop">{pop}</span>}
      <div>
        <div>
          <Sunrise />
          <span>{sunrise}</span>
        </div>
        <div>
          <Sunset />
          <span>{sunset}</span>
        </div>
      </div>
      <div className="moon-phase">
        <i>icon</i>
        <span>{moonPhase}</span>
      </div>
      <InfoDisplay />
    </StyledLargeWeather>
  );
}
