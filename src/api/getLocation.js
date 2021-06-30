export default async function getLocation(address) {
  const formatAddress = ({ locations }) => {
    const { adminArea5, adminArea3, adminArea1 } = locations[0];
    const addressObj = {
      city: adminArea5,
      state: adminArea3,
      country: adminArea1,
    };
    const { city, state, country } = addressObj;
    const result =
      state === "" ? `${city}, ${country}` : `${city}, ${state}, ${country}`;

    return result;
  };

  if (!address) return;

  const mapApiKey = process.env.REACT_APP_MAPQUEST_API;
  const response = await fetch(
    `http://www.mapquestapi.com/geocoding/v1/address?key=${mapApiKey}&location=${address}`
  );

  const coordinateData = await response.json();

  if (coordinateData) {
    const addressData = coordinateData.results[0];
    const coordinates = coordinateData.results[0].locations[0].latLng;
    // city, province/state, country
    const formattedAddress = formatAddress(addressData);

    return {
      coordinates,
      formattedAddress,
    };
  }
}
