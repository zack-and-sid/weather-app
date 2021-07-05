import { useRef, useState } from "react";
import { getLocation } from "../api";
import styled from "styled-components";

const StyledHeader = styled.header`
  .wrapper {
    width: 90%;
    margin: 0 auto;
  }

  h1 {
    color: white;
    font-size: 3rem;
    padding: 2rem 0;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    right: 0;
    /* top: -100px; */
  }

  .toggle {
    cursor: pointer;
    position: relative;
  }

  .toggle::before {
    content: "";
    position: absolute;
    bottom: -10px;
    right: 10px;
    width: 45px;
    height: 26px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 20px;
  }

  .toggle::after {
    content: "";
    position: absolute;
    bottom: -7px;
    right: 13px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    transition: all 200ms ease-out;
  }

  input[type="checkbox"]:checked + .toggle::after {
    right: 32px;
  }

  .unit {
    font-size: 1rem;
    position: relative;
    top: 6px;
  }

  .celcius {
    left: -35px;
  }

  .farenheit {
    right: 15px;
  }
`;

const Header = (props) => {
  const [checked, setChecked] = useState(false);
  const [units, setUnits] = useState("metric");
  const { updateWeather, updateMapUrl, updateAddress } = props;
  const inputRef = useRef();

  // for unit checkbox
  const handleChange = () => {
    setChecked(!checked);
    if (checked === true) {
      console.log("metric");
      setUnits("metric");
    } else {
      console.log("imperial");
      setUnits("imperial");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const address = inputRef.current.value;
    // not keeping coordinates in state because it's not directly connected to what gets rendered on the page
    const { coordinates, formattedAddress } = await getLocation(address);
    console.log(units);
    console.log(formattedAddress);
    updateAddress(formattedAddress);
    updateWeather(coordinates, units);
    updateMapUrl(coordinates);
  };

  return (
    <StyledHeader className="App-header">
      <div className="wrapper">
        <div className="flex">
          <h1>weathr</h1>
          <input
            type="checkbox"
            id="unit"
            checked={checked}
            onChange={handleChange}
          />
          <label htmlFor="unit" className="toggle">
            {!checked ? (
              <span className="unit celcius">℃</span>
            ) : (
              <span className="unit farenheit">℉</span>
            )}
          </label>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={inputRef} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </StyledHeader>
  );
};

export default Header;
