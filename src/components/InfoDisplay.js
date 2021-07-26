import styled from "styled-components";
import { getTemp, formatTemp } from "../utils";
import { ReactComponent as Sunrise } from "../assets/sunrise.svg";
import { ReactComponent as Sunset } from "../assets/sunset.svg";
import MoonBar from "./MoonBar";

const StyledInfoDisplay = styled("div")`
  font-size: 1.6rem;
  padding-bottom: var(--height-forecast);
  width: 50vw;
  height: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */

  .temp-container {
    position: relative;
    width: fit-content;

    .temperature {
      font-size: var(--fz-xl);
      color: #615c9a;
    }

    .feels-like {
      position: absolute;
      width: 100%;
      bottom: -1em;
      left: 3ch;
      font-size: var(--fz-sm);
    }
  }

  .pop-icon-container {
    position: relative;
    display: flex;
    justify-content: center;
    .icon-container {
      height: max(60px, 20vh);
    }

    .pop {
      position: absolute;
      right: 5%;
      bottom: 28%;
    }
  }

  .sun-container {
    /* justify-content: center; */
    width: 60%;
    margin-top: -5vh;

    .sun-item {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: min(max(40px, 5vw), 100%);
      margin: 1rem;
    }
  }
`;

const InfoDisplay = (props) => {
  const {
    isMetric,
    feelsLike,
    temp,
    description,
    pop,
    sunrise,
    sunset,
    moonPhase,
    icon,
  } = props;

  const temperature = formatTemp(getTemp(isMetric, temp));
  const feelsLikeTemperature = formatTemp(getTemp(isMetric, feelsLike));
  return (
    <StyledInfoDisplay>
      <div className="temp-container">
        <span className="temperature">{temperature}</span>
        {temp === feelsLikeTemperature ? null : (
          <span className="feels-like">feels like {feelsLikeTemperature}</span>
        )}
      </div>
      <div className="pop-icon-container">
        <div className="icon-container">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
            alt={description}
          />
        </div>
        {pop && <span className="pop">{pop}</span>}
      </div>
      <div className="flex sun-container">
        <div className="sun-item">
          <Sunrise className="icon" width="100%" height="50%" />
          <span>{sunrise}</span>
        </div>
        <div className="sun-item">
          <Sunset className="icon" width="100%" height="50%" />
          <span>{sunset}</span>
        </div>
      </div>
      <MoonBar moonPhase={moonPhase} />
    </StyledInfoDisplay>
  );
};

export default InfoDisplay;
