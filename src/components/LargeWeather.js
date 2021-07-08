export default function LargeWeather(props) {
  const { loading, description, address, temp, isMetric } = props;

  const getTemp = (isMetric, temp) => {
    if (temp) {
      const temperature = isMetric ? temp : (temp * 9) / 5 + 32;
      return Math.round(temperature) + "°";
    }
    return;
  };

  const temperature = getTemp(isMetric, temp);

  return (
    <article>
      <h2>{address}</h2>
      <p>{loading ? "loading..." : description}</p>
      <p>{temperature}</p>
    </article>
  );
}
