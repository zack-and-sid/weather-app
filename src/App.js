import { useRef } from "react";
import { getLocation } from "./api";
import "./App.css";
import useWeather from "./hooks/useWeather";
import useWeatherMap from "./hooks/useWeatherMap";
import LargeWeather from "./components/LargeWeather";
import useAddress from "./hooks/useAddress";

function App() {
  const inputRef = useRef();
  // Keeping weather and weatherMap in the state because they're connected to the element on the page
  const { isWeatherLoading, updateWeather, weather } = useWeather();
  const { mapUrl, updateMapUrl } = useWeatherMap();
  // const [currentAddress, setCurrentAddress] = useState("");
  const { currentAddress, updateAddress } = useAddress();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const address = inputRef.current.value;
    // not keeping coordinates in state because it's not directly connected to what gets rendered on the page
    const { coordinates, formattedAddress } = await getLocation(address);

    updateAddress(formattedAddress);
    updateWeather(coordinates);
    updateMapUrl(coordinates);
  };

  const description = weather?.current?.weather[0]?.description;
  // const address = inputRef.current.value;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={inputRef} />
          <button type="submit">Submit</button>
        </form>
      </header>
      <main>
        <LargeWeather
          loading={isWeatherLoading}
          description={description}
          address={currentAddress}
        />

        {mapUrl && <img src={mapUrl} alt={`map of ${currentAddress}`} />}
      </main>
    </div>
  );
}

export default App;
