import { useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

import { URL } from "./config/consts";
import { WeatherData } from "./types/weather";

import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import ErrorDisplay from "./components/ErrorDisplay";

function App() {
  const [data, setData] = useState<WeatherData | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSearchLocation = async (location: string): Promise<void> => {
    try {
      const res: AxiosResponse<WeatherData> = await axios.get(URL(location));
      setData(res.data);
      setErrorMessage("");
    } catch (error) {
      if (error instanceof AxiosError) {
        setData(undefined);
        setErrorMessage("Cannot find this city or country");
        console.error(error.message);
      }
    }
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearchLocation} />
      {data ? <WeatherDisplay data={data} /> : <ErrorDisplay errorMessage={errorMessage} />}
    </div>
  );
}

export default App;
