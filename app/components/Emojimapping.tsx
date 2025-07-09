export function getWeatherEmoji(description: string): string {
  const desc = description.toLowerCase();

  if (desc.includes("clear")) return "☀️";
  if (desc.includes("sunny")) return "🌞";
  if (desc.includes("cloud")) return "☁️";
  if (desc.includes("rain")) return "🌧️";
  if (desc.includes("drizzle")) return "🌦️";
  if (desc.includes("thunder")) return "⛈️";
  if (desc.includes("snow")) return "❄️";
  if (desc.includes("fog") || desc.includes("mist")) return "🌫️";
  if (desc.includes("wind")) return "💨";

  return "🌈"; // fallback
}
