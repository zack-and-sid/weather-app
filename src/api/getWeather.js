export default async function getWeather(coordinates, units) {
  if (!coordinates) return;
  // destructure lat, lng
  const { lat, lng } = coordinates;
  if (!lat || !lng) return;

  const openWeatherAPI = process.env.REACT_APP_OPEN_WEATHER_API;
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&appid=${openWeatherAPI}&units=${units}`;
  console.log(url);
  try {
    const response = await fetch(url);
    const { current, daily, hourly } = await response.json();

    const weather = {
      current,
      daily: daily.map((day) => ({
        temp: day.temp,
        feelsLike: day.feels_like,
        weather: day.weather[0],
        moonPhase: day.moon_phase,
        sunrise: day.sunrise,
        sunset: day.sunset,
        humidity: day.humidity,
        clouds: day.clouds,
        wind: day.wind_speed,
        uvi: day.uvi,
        pressure: day.pressure,
      })),
      hourly: hourly.map((hour) => {
        const {
          dt,
          temp,
          feels_like,
          wind_deg,
          wind_speed,
          weather,
          uvi,
          pop,
        } = hour;

        return {
          dt,
          temp,
          feels_like,
          wind_deg,
          wind_speed,
          weather: weather[0],
          uvi,
          pop,
        };
      }),
    };
    console.log(weather);
    return weather;
  } catch (err) {
    console.log(err);
  }
}
