import styled from "styled-components";
import { getTemp, formatTemp } from "../utils";
import { ReactComponent as Sunrise } from "../assets/sunrise.svg";
import { ReactComponent as Sunset } from "../assets/sunset.svg";

const StyledInfoDisplay = styled("div")`
  font-size: 1.6rem;
  margin-top: 20px;
  /* border: 1px solid red; */

  .temp-container {
    position: relative;
    text-align: center;

    .temperature {
      font-size: 9rem;
      color: #615c9a;
    }

    .feels-like {
      position: absolute;
      bottom: -10px;
      right: 15px;
    }
  }

  .pop-icon-container {
    position: relative;

    .pop {
      position: absolute;
      right: 5%;
      bottom: 28%;
    }
  }

  .sun-container {
    justify-content: center;
    width: 60%;
    margin: -40px auto 0;

    .sun-item {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  .moon-phase {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #615c9a;
    padding: 10px;
    border-radius: 30px 0 0 30px;
    position: relative;
    left: 8.5%;

    span {
      color: white;
      width: min-content;
      line-height: 1.2;
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
      <div className="moon-phase">
        <i>icon</i>
        <span className="">{moonPhase.description}</span>
      </div>
    </StyledInfoDisplay>
  );
};

export default InfoDisplay;
