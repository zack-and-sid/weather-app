const Toggle = ({ toggleTemp, isMetric }) => {
  // const [checked, setChecked] = useState(false);

  const handleChange = () => {
    // setChecked(!checked);
    toggleTemp();
  };

  return (
    <>
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
    </>
  );
};

export default Toggle;
