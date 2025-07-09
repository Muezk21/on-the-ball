// components/weatherwidget.tsx
'use client';

//Import Emoji mapping function
import { getWeatherEmoji } from './Emojimapping';

import { useEffect, useState } from 'react';

type Weather = {
  date: string;
  temperature: number;
  rain_probability: number;
  weather_description: string;
};

export default function WeatherWidget() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/getweather')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log("🌤️ Weather API response:", data);
        if (data.weather) {
          setWeather(data.weather);
        } else {
          setError("No weather data received");
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Weather fetch failed:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading weather...</div>;
  if (error) return <div>Weather unavailable: {error}</div>;
  if (!weather) return <div>No weather data</div>;

  return (
    <div>
      <div>TODAY'S FORECAST</div>
      <div>{weather.date}</div> {/* Changed from forecast_date to date */}
      <div>
        {weather.temperature.toFixed(1)}°C<br />
        Chance of rain: {weather.rain_probability}%<br />
        <p style={{ fontSize: "1.1rem", color: "white" }}>
          {getWeatherEmoji(weather.weather_description)}{" "}
          {weather.weather_description
            .split(" ")
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ")}
        </p>
      </div>
    </div>
  );
}