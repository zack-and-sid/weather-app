import styled from "styled-components";

const StyledToggle = styled.div`
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    right: 0;
    /* top: -100px; */
  }

  .toggle {
    cursor: pointer;
    position: relative;
    bottom: 9px;
    right: -5px;
  }

  .toggle::before {
    content: "";
    position: absolute;
    bottom: -10px;
    right: 10px;
    width: 50px;
    height: 26px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 20px;
  }

  .toggle::after {
    content: "";
    position: absolute;
    bottom: -7.5px;
    right: 13px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    border: 0.5px solid rgba(97, 92, 154, 0.5);
    transition: all 200ms ease-out;
  }

  input[type="checkbox"]:checked + .toggle::after {
    right: 36px;
  }

  .unit {
    font-size: 1.9rem;
    position: relative;
    top: 6px;
    color: rgba(97, 92, 154);
  }

  .celcius {
    left: -39px;
  }

  .farenheit {
    right: 16px;
  }
`;

const Toggle = ({ toggleTemp, isMetric }) => {
  const handleChange = () => {
    toggleTemp();
  };

  return (
    <StyledToggle>
      <input
        type="checkbox"
        id="unit"
        checked={isMetric}
        onChange={handleChange}
      />
      <label htmlFor="unit" className="toggle">
        {!isMetric ? (
          <span className="unit celcius">℃</span>
        ) : (
          <span className="unit farenheit">℉</span>
        )}
      </label>
    </StyledToggle>
  );
};

export default Toggle;
