export default async function getWeatherMap(coordinates) {
  if (!coordinates) return;

  const { lat, lng } = coordinates;

  if (lat && lng) {
    const mapApiKey = process.env.REACT_APP_MAPQUEST_API;
    const response = await fetch(
      `https://open.mapquestapi.com/staticmap/v5/map?size=1000,1000&key=${mapApiKey}&center=${lat},${lng}`
    );

    if (response) {
      const { url } = response;

      return url;
    }
  }
}
