export interface WeatherData {
    location: {
      name: string;
      country: string;
    }
    current: {
      condition: {
        text: string;
      };
      feelslike_c: number;
      humidity: number;
      precip_mm: number;
      temp_c: number;
      pressure_mb: number;
      wind_kph: number;
      wind_dir: string;
      is_day: number;
      uv: number;
      cloud: number;
    },
}