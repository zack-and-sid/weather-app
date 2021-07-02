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

  const description = weather?.current?.weather[0]?.description;
  // const address = inputRef.current.value;

  return (
    <div className="App">
      <Header
        updateWeather={updateWeather}
        updateMapUrl={updateMapUrl}
        updateAddress={updateAddress}
      />
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
