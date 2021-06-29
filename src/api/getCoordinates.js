export default async function getCoordinates(address) {
  const formatAddress = ({ results }) => {
    const formattedAdress = results.map((result) => {
      const { adminArea5, adminArea3, adminArea1 } = result.locations[0];
      const addressObj = {
        city: adminArea5,
        state: adminArea3,
        country: adminArea1,
      };
      const { city, state, country } = addressObj;
      if (state === "") {
        return `${city}, ${country}`;
      } else {
        return `${city}, ${state}, ${country}`;
      }
    });
    return formattedAdress.join(",");
  };

  if (!address) return;

  const mapApiKey = process.env.REACT_APP_MAPQUEST_API;
  const response = await fetch(
    `http://www.mapquestapi.com/geocoding/v1/address?key=${mapApiKey}&location=${address}`
  );

  const coordinateData = await response.json();

  if (coordinateData) {
    const coordinates = coordinateData.results[0].locations[0].latLng;
    // city, province/state, country
    const formattedAddress = formatAddress(coordinateData);
    return {
      coordinates,
      formattedAddress,
    };
  }
}
