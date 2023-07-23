import React, { useState } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import ErrorDisplay from "./components/ErrorDisplay";

function App() {
  const [data, setData] = useState<any>({});
  const [errorMessage, setErrorMessage] = useState<string>("");

  const BASE_URL = "https://api.weatherapi.com/v1";
  const API_KEY = process.env.REACT_APP_API_KEY;

  const handleSearchLocation = (location: string) => {
    const url = `${BASE_URL}/current.json?key=${API_KEY}&q=${location}`;
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setErrorMessage("");
      })
      .catch((error) => {
        setData({});
        setErrorMessage("Invalid location, try again.");
        console.log(error.message);
      });
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearchLocation} />

      {errorMessage && <ErrorDisplay errorMessage={errorMessage} />}
      {data.location && data.current && (
        <WeatherDisplay
          location={`${data.location.name}, ${data.location.country}`}
          temp={data.current.temp_c}
          description={data.current.condition.text}
          feelsLike={data.current.feelslike_c}
          humidity={data.current.humidity}
          precipitation={data.current.precip_mm}
          pressure={data.current.pressure_mb}
          windSpd={data.current.wind_kph}
          windDir={data.current.wind_dir}
          cloud={data.current.cloud}
          uv={data.current.uv}
          day={data.current.is_day}
        />
      )}
    </div>
  );
}

export default App;
