// components/weatherwidget.tsx

'use client';
import { useEffect, useState } from 'react';

export default function WeatherWidget() {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    fetch('/api/getweather')
      .then(res => res.json())
      .then(data => {
        console.log("🌤️ Weather API response:", data);
        setWeather(data.weather);
      })
      .catch(err => console.error("Weather fetch failed:", err));
  }, []);

  if (!weather) return <p style={{ color: "#f37c22" }}>Loading weather...</p>;

  return (
    <div style={{ color: "white", }}>
      <h3 style={{ color: "#f37c22", marginBottom: "1.5rem" }}>TODAY'S FORECAST</h3>
      <p style={{ color: "white", }}>{weather.forecast_date}</p>
      <p style={{ fontSize: "1.1rem", color: "white" }}>
        {weather.temperature.toFixed(1)}°C<br />
        {weather.rain_probability}%<br />
        {weather.weather_description}
      </p>
    </div>
  );
}
