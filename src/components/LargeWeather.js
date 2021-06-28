export default function LargeWeather(props) {
  const { loading, description } = props;
  return (
    <article>
      {/* <h2>{address}</h2> */}
      <p>{loading ? "loading..." : description}</p>
    </article>
  );
}
