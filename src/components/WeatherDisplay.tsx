import React from "react";

interface WeatherDisplayProps {
  location: string;
  temp: number;
  description: string;
  feelsLike: number;
  humidity: number;
  precipitation: number;
  pressure: number;
  windSpd: number;
  windDir: string;
  cloud: number;
  uv: number;
  day: number;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  location,
  temp,
  description,
  feelsLike,
  humidity,
  precipitation,
  pressure,
  windSpd,
  windDir,
  cloud,
  uv,
  day,
}) => {
  const getDayEmoji = (): string => {
    return day === 1 ? "☀️" : "🌕";
  };

  return (
    <div className="container">
      <div className="top">
        <div className="location">
          <p>{location}</p>
        </div>
        <div className="row">
          <div className="temp">
            <h1>{temp}°C </h1>
          </div>
          <div className="day">{getDayEmoji()}</div>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>

      <div className="middle">
        <div className="middle-left">
          <div className="humidity row middle-item">
            <p>Humidity</p>
            <p className="bold">{humidity}%</p>
          </div>

          <div className="precipitation row middle-item">
            <p>Precipitation</p>
            <p className="bold">{precipitation}mm</p>
          </div>

          <div className="pression row middle-item">
            <p>Pressure</p>
            <p className="bold">{pressure}mbar</p>
          </div>
        </div>

        <div className="middle-right">
          <div className="feels row middle-item">
            <p>Feel like</p>
            <p className="bold">{feelsLike}°C</p>
          </div>

          <div className="uv row middle-item">
            <p>UV</p>
            <p className="bold">{uv}</p>
          </div>

          <div className="cloud row middle-item">
            <p>Clouds</p>
            <p className="bold">{cloud}</p>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="windSpd">
          <p className="bold">{windSpd}Km/H</p>
          <p>Wind Speed</p>
        </div>
        <div className="windDir">
          <p className="bold">{windDir}</p>
          <p>Wind Direction</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
