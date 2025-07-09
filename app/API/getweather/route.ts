// app/api/getweather/route.ts

import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  const { data, error } = await supabase
    .from('weather_cache')
    .select('*')
    .eq('forecast_date', today)
    .limit(1);

 if (data && data.length > 0) {
    return NextResponse.json({ weather: data[0] });
  }

  // If no cached data, fetch from OpenWeather API directly
  try {
    const API_KEY = process.env.WEATHER_API_KEY;
    
    if (!API_KEY) {
      throw new Error('Weather API key not configured');
    }

    // Toronto coordinates
    const lat = 43.6532;
    const lon = -79.3832;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const weatherData = await response.json();
    
    // Format to match your expected structure
    const formattedWeather = {
      forecast_date: today,
      temperature: weatherData.main.temp,
      rain_probability: 0, // Current weather doesn't have rain probability
      weather_description: weatherData.weather[0].description,
      precipitation_mm: 0,
      location: 'Toronto, ON'
    };

    // Optionally cache this data
    await supabase
      .from('weather_cache')
      .insert([{
        ...formattedWeather,
        expires_at: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString() // 3 hours
      }]);

    return NextResponse.json({ weather: formattedWeather });

  } catch (error) {
    console.error('Weather API error:', error);
    
    return NextResponse.json({ 
      error: 'Failed to fetch weather data',
      details: (error instanceof Error ? error.message : String(error))
    }, { status: 500 });
  }
}
