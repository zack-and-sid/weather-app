import InfoDisplay from './InfoDisplay';
import styled from 'styled-components';

const StyledLargeWeather = styled.article`
  /* min-height: 35rem; */
  /* height: 50vh; */
  font-size: 1.3rem;
  padding: 2rem 0;
  height: 100%;

  .wrapper-large-weather {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 100%;
  }

  &::after {
    position: absolute;
    top: 0;
    left: -30%;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.1) 10%,
        rgba(255, 255, 255, 0.65) 50%,
        rgba(255, 255, 255, 0.95) 98%
      ),
      url('${({ $mapUrl }) => $mapUrl}');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    opacity: 0;
    ${({ $mapUrl }) => {
      return $mapUrl ? 'animation: fade-in 4s ease forwards;' : null;
    }}
  }

  .meta-container {
    min-width: 125px;
    .date-container {
      font-size: var(--fz-md);
      width: max-content;
      margin-top: 10px;
    }
  }

  h2 {
    font-size: var(--fz-lg);
    font-weight: bold;
    line-height: 1.3;
  }

  button {
    padding: 0.2em 0.5em;
    font-weight: bold;
    margin-right: 5px;
    background: orange;
    border-radius: 25px;
    box-shadow: 0.5px 0.5px 1px #615c9a;
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
    weatherIndex,
  } = props;

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
        {/* Remount InfoDisplay to re-trigger animation when weather index is changed */}
        <InfoDisplay
          key={weatherIndex}
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
