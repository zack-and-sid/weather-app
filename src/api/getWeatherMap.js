export default async function getWeatherMap(coordinates) {
  if (!coordinates) return;

  const { lat, lng } = coordinates;

  if (lat && lng) {
    const mapApiKey = process.env.REACT_APP_MAPQUEST_API;
    const response = await fetch(
      `https://open.mapquestapi.com/staticmap/v5/map?key=${mapApiKey}&center=${lat},${lng}`
    );

    if (response) {
      const { url } = response;
      console.log(response);
      return {
        url,
      };
    }
  }
}
