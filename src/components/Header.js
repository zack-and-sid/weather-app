import { useRef } from "react";
import { getLocation } from "../api";
import styled from "styled-components";

const StyledHeader = styled.header`
  h1 {
    color: white;
    font-size: 5rem;
  }
`;

const Header = (props) => {
  const { updateWeather, updateMapUrl, updateAddress } = props;
  const inputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const address = inputRef.current.value;
    // not keeping coordinates in state because it's not directly connected to what gets rendered on the page
    const { coordinates, formattedAddress } = await getLocation(address);

    console.log(formattedAddress);
    updateAddress(formattedAddress);
    updateWeather(coordinates);
    updateMapUrl(coordinates);
  };

  return (
    <StyledHeader className="App-header">
      <h1>weathr</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </StyledHeader>
  );
};

export default Header;
