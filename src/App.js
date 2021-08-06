import { useState } from "react";
import useWeather from "./hooks/useWeather";
import useWeatherMap from "./hooks/useWeatherMap";
import Header from "./components/Header";
import useAddress from "./hooks/useAddress";
import Weather from "./components/Weather";
import styled from "styled-components";
import Footer from "./components/Footer";
import StartScreen from "./components/StartScreen";

const StyledApp = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* On extremely small device, this will allow forecast to overflow causing vertical scroll,
    which is more desirable than hiding it.
  */
  /* overflow: hidden; */
`;

const messages = [
  "Did you see the moon last night?",
  "Life can be so sweet...",
  "Every cloud has a silver lining",
  "Mares’ tails and mackerel scales make tall ships take in their sails",
  "When dew is on the grass, rain will never come to pass",
  "Red sky at night, sailor’s delight",
];

const getRandomMessage = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return '"' + array[randomIndex] + '"';
};

const message = getRandomMessage(messages);

function App() {
  // Keeping weather and weatherMap in the state because they're connected to the element on the page
  const { isWeatherLoading, updateWeather, weatherDays } = useWeather();
  const { mapUrl, updateMapUrl } = useWeatherMap();
  // const [currentAddress, setCurrentAddress] = useState("");
  const { currentAddress, updateAddress } = useAddress();
  const [isMetric, setIsMetric] = useState(true);

  const toggleTemp = () => {
    // console.log("toggled");
    setIsMetric(!isMetric);
  };

  return (
    <StyledApp className="App">
      <Header
        updateWeather={updateWeather}
        updateMapUrl={updateMapUrl}
        updateAddress={updateAddress}
        toggleTemp={toggleTemp}
        isMetric={isMetric}
      />
      {weatherDays.length > 0 ? (
        <Weather
          weatherDays={weatherDays}
          isMetric={isMetric}
          mapUrl={mapUrl}
          loading={isWeatherLoading}
          address={currentAddress}
        />
      ) : (
        <StartScreen message={message} />
      )}
      <Footer />
    </StyledApp>
  );
}

export default App;
