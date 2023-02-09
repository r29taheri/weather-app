export interface Weather {
  humidity: number;
  windSpeed: number;
  temperature: number;
}

export interface CitiesWeather {
  [key: string]: Weather;
}
