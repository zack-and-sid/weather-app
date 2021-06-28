export default async function getCoordinates(address) {
  if (!address) return;

  const mapApiKey = process.env.REACT_APP_MAPQUEST_API;
  const response = await fetch(
    `http://www.mapquestapi.com/geocoding/v1/address?key=${mapApiKey}&location=${address}`
  );

  const coordinateData = await response.json();
  console.log(coordinateData);
  if (coordinateData) {
    const coordinates = coordinateData.results[0].locations[0].latLng;
    // write function to format address
    return coordinates;
  }
}
