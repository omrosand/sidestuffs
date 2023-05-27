import { useEffect, useState } from "react";
import { getWeatherSymbol } from "../util/weatherconditions";
import { BsSun } from "react-icons/bs";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    const locations = [
      {
        latitude: 59.12,
        longitude: 11.39,
        name: "Halden",
      },
      {
        latitude: 62.99,
        longitude: 7.56,
        name: "Averøy",
      },
    ];

    try {
      setLoading(true);
      const weatherPromises = locations.map(async (location) => {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation&current_weather=true&windspeed_unit=ms&forecast_days=1&timezone=Europe%2FBerlin`
        );

        if (response.ok) {
          const data = await response.json();
          return {
            location: location.name,
            data: data,
          };
        } else {
          throw new Error(`Failed to fetch weather data for ${location.name}.`);
        }
      });

      const weatherResults = await Promise.all(weatherPromises);
      setWeatherData(weatherResults);
      setLoading(false);
      setTime(new Date());
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <section className="weather">
        {weatherData.length > 0 ? (
          weatherData.map((location) => (
            <div className="weatherCard" key={location.location}>
              <h2>{location.location}</h2>
              <div className="mainInfo">
                <div>
                  <p className="temp">
                    {location.data.current_weather.temperature}{" "}
                    {location.data.hourly_units.temperature_2m}
                  </p>
                  <p className="wind">
                    {location.data.current_weather.windspeed} m/s
                  </p>
                </div>
                <p className="icon">
                  {
                    getWeatherSymbol(location.data.current_weather.weathercode)
                      .icon
                  }
                </p>
              </div>
              <p className="desc">
                {
                  getWeatherSymbol(location.data.current_weather.weathercode)
                    .name
                }
              </p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <button className="updateWeather" type="button" onClick={fetchWeather}>
        {!loading ? "Oppdater vær" : <BsSun className="spinner" />}
      </button>
      <code>Sist oppdatert: {time?.toLocaleTimeString()}</code>
    </>
  );
};

export default Weather;
