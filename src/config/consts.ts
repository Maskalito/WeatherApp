export const BASE_URL = "https://api.weatherapi.com/v1";
export const API_KEY = process.env.REACT_APP_API_KEY || "secret";
export const URL = (location: string) => `${BASE_URL}/current.json?key=${API_KEY}&q=${location}`;
