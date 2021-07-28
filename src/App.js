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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
`;
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
        <StartScreen />
      )}
      <Footer />
    </StyledApp>
  );
}

export default App;
