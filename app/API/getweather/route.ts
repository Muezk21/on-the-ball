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

  if (error || !data || data.length === 0) {
    return NextResponse.json({ error: 'No weather found' }, { status: 404 });
  }

  return NextResponse.json({ weather: data[0] });
}
