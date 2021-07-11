import InfoDisplay from "./InfoDisplay";
import styled from "styled-components";

const StyledLargeWeather = styled.article`
  height: 50vh;
  position: relative;

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
    /* background-size: cover; */
    background-size: 105% 105%;
    z-index: -1;
  }
`;

export default function LargeWeather(props) {
  const { loading, isMetric, mapUrl, displayWeather, address } = props;

  const { temp, description } = displayWeather;
  const getTemp = (isMetric, temp) => {
    if (temp) {
      const temperature = isMetric ? temp : (temp * 9) / 5 + 32;
      return Math.round(temperature) + "°";
    }
    return;
  };

  const temperature = getTemp(isMetric, temp);

  return (
    <StyledLargeWeather $mapUrl={mapUrl}>
      <h2>{address}</h2>
      <p>{loading ? "loading..." : description}</p>
      <p>{temperature}</p>
      <InfoDisplay />
    </StyledLargeWeather>
  );
}
