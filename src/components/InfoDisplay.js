import styled from 'styled-components';
import { getTemp, formatTemp } from '../utils';
import { ReactComponent as Sunrise } from '../assets/sunrise.svg';
import { ReactComponent as Sunset } from '../assets/sunset.svg';

const StyledInfoDisplay = styled('div')``;

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
        <span>{moonPhase.description}</span>
      </div>
    </StyledInfoDisplay>
  );
};

export default InfoDisplay;
