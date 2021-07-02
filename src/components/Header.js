import { useRef } from "react";
const Header = (props) => {
  const inputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const address = inputRef.current.value;
    // not keeping coordinates in state because it's not directly connected to what gets rendered on the page
    const { coordinates, formattedAddress } = await getLocation(address);

    console.log(formattedAddress);
    setCurrentAddress(formattedAddress);
    updateWeather(coordinates);
    updateMapUrl(coordinates);
  };

  return (
    <header className="App-header">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </header>
  );
};

export default Header;
