import { useState } from "react";
import useWeather from "./hooks/useWeather";
import useWeatherMap from "./hooks/useWeatherMap";
import LargeWeather from "./components/LargeWeather";
import Header from "./components/Header";
import useAddress from "./hooks/useAddress";

function App() {
  // Keeping weather and weatherMap in the state because they're connected to the element on the page
  const { isWeatherLoading, updateWeather, weather } = useWeather();
  const { mapUrl, updateMapUrl } = useWeatherMap();
  // const [currentAddress, setCurrentAddress] = useState("");
  const { currentAddress, updateAddress } = useAddress();
  const [isMetric, setIsMetric] = useState(true);

  const description = weather?.current?.weather[0]?.description;
  const temp = weather?.current?.temp;

  const toggleTemp = () => {
    // console.log("toggled");
    setIsMetric(!isMetric);
  };

  return (
    <div className="App">
      <Header
        updateWeather={updateWeather}
        updateMapUrl={updateMapUrl}
        updateAddress={updateAddress}
        toggleTemp={toggleTemp}
        isMetric={isMetric}
      />
      <main>
        <LargeWeather
          loading={isWeatherLoading}
          description={description}
          address={currentAddress}
          temp={temp}
          isMetric={isMetric}
        />

        {mapUrl && <img src={mapUrl} alt={`map of ${currentAddress}`} />}
      </main>
    </div>
  );
}

export default App;
