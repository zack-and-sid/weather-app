import { useRef } from "react";
import { getLocation } from "../api";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Toggle from "./Toggle";
import { ReactComponent as Logo } from "../assets/weathr.svg";

const StyledHeader = styled.header`
  background-color: orange;
  padding: 2rem 0;

  .wrapper {
    width: 85%;
  }

  h1 {
    padding: 1rem 0;
    svg {
      transform: scale(1.1);
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user-input {
    padding: 8px;
    background: white;
    width: auto;
    display: inline-block;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
  }

  input {
    border: 0;
    font-size: 2rem;
    width: 80%;
    min-width: 0;
  }

  button {
    font-size: 2rem;
    svg {
      transform: scale(1.3);
      fill: lightgrey;
      transition: all 200ms ease;
      /* position: relative; */
      /* top: 1px; */
    }
    &:hover,
    &:focus {
      svg {
        fill: grey;
      }
    }
  }
`;

const Header = (props) => {
  const {
    updateWeather,
    updateMapUrl,
    updateAddress,
    toggleTemp,
    isMetric,
  } = props;
  const inputRef = useRef();

  // for unit checkbox

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
      <div className="wrapper">
        <div className="flex">
          <h1>
            <Logo aria-label="weathr" role="img" />
          </h1>
          <Toggle toggleTemp={toggleTemp} isMetric={isMetric} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="user-input">
            <label htmlFor="address" className="visually-hidden">
              Address
            </label>
            <input type="text" id="address" ref={inputRef} />
            <button type="submit">
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </StyledHeader>
  );
};

export default Header;
