import { WeatherData } from "../types/weather";

type WeatherDisplayProps = {
  data: WeatherData;
}

const WeatherDisplay = ({ data }: WeatherDisplayProps) => {

  const getDayEmoji = () => data.current.is_day === 1 ? "☀️" : "🌕";

  return (
    <>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{`${data.location.name}, ${data.location.country}`}</p>
          </div>
          <div className="row">
            <div className="temp">
              <h1>{data.current.temp_c}°C </h1>
            </div>
            <div className="day">{getDayEmoji()}</div>
          </div>
          <div className="description">
            <p>{data.current.condition.text}</p>
          </div>
        </div>

        <div className="middle">
          <div className="middle-left">
            <div className="humidity row middle-item">
              <p>Humidity</p>
              <p className="bold">{data.current.humidity}%</p>
            </div>

            <div className="precipitation row middle-item">
              <p>Precipitation</p>
              <p className="bold">{data.current.precip_mm}mm</p>
            </div>

            <div className="pression row middle-item">
              <p>Pressure</p>
              <p className="bold">{data.current.pressure_mb}mbar</p>
            </div>
          </div>

          <div className="middle-right">
            <div className="feels row middle-item">
              <p>Feel like</p>
              <p className="bold">{data.current.feelslike_c}°C</p>
            </div>

            <div className="uv row middle-item">
              <p>UV</p>
              <p className="bold">{data.current.uv}</p>
            </div>

            <div className="cloud row middle-item">
              <p>Clouds</p>
              <p className="bold">{data.current.cloud}</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="windSpd">
            <p className="bold">{data.current.wind_kph}Km/H</p>
            <p>Wind Speed</p>
          </div>
          <div className="windDir">
            <p className="bold">{data.current.wind_dir}</p>
            <p>Wind Direction</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDisplay;
