# Weather Service - Automated Weather Monitoring System

An intelligent weather monitoring system that automatically checks upcoming program sessions and sends email notifications to parents when weather conditions may affect outdoor activities.

## Overview

This service integrates with OpenWeatherMap API to fetch weather forecasts and compares them against customizable safety thresholds. When conditions exceed safe limits, it automatically sends detailed email notifications to all registered parents.

## Features

- **Automated Weather Monitoring**: Checks weather for upcoming program sessions
- **Smart Caching**: Reduces API calls by caching weather data for 3 hours
- **Customizable Thresholds**: Set different weather limits for each program session
- **Email Notifications**: Sends detailed weather alerts to all registered parents
- **Duplicate Prevention**: Prevents sending multiple notifications for the same session
- **Severity Levels**: Categorizes weather issues as warnings or cancellations
- **Scheduled Operation**: Can run automatically on daily schedule

## Setup Instructions

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Environment Variables

Create a `.env` file in the weather-service directory:

```bash
# OpenWeatherMap API (get from https://openweathermap.org/api)
WEATHER_API_KEY=your_actual_openweather_api_key

# Supabase Configuration (from your Supabase project settings)
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_KEY=your_supabase_anon_public_key

# Gmail Configuration (use App Password, not regular password)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
```

### 3. Database Setup

Run this SQL in your Supabase dashboard to create the required tables:

```sql
-- Weather Cache Table
CREATE TABLE weather_cache (
    id SERIAL PRIMARY KEY,
    location VARCHAR(100) NOT NULL,
    forecast_date DATE NOT NULL,
    temperature DECIMAL(5,2) NOT NULL,
    wind_speed DECIMAL(5,2) NOT NULL,
    rain_probability INTEGER NOT NULL,
    precipitation_mm DECIMAL(5,2) NOT NULL,
    weather_description VARCHAR(200) NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Weather Thresholds Table
CREATE TABLE weather_thresholds (
    id SERIAL PRIMARY KEY,
    session_id INTEGER NOT NULL,
    min_temperature DECIMAL(5,2) DEFAULT 0.0,
    max_wind_speed DECIMAL(5,2) DEFAULT 30.0,
    max_rain_probability INTEGER DEFAULT 80,
    max_precipitation_mm DECIMAL(5,2) DEFAULT 10.0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Weather Notifications Log
CREATE TABLE weather_notifications (
    id SERIAL PRIMARY KEY,
    session_id INTEGER NOT NULL,
    notification_date DATE NOT NULL,
    weather_data JSONB NOT NULL,
    notification_type VARCHAR(50) NOT NULL,
    email_count INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Program Sessions Table
CREATE TABLE program_sessions (
    id SERIAL PRIMARY KEY,
    session_name VARCHAR(200) NOT NULL,
    day_of_week INTEGER NOT NULL, -- 0=Monday, 1=Tuesday, etc.
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    location VARCHAR(200),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Registrations Table
CREATE TABLE registrations (
    id SERIAL PRIMARY KEY,
    child_name VARCHAR(200) NOT NULL,
    parent_name VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    session_id INTEGER,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 4. Gmail App Password Setup

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Enable 2-Step Verification if not already enabled
4. Go to App passwords
5. Generate a new app password for "Mail"
6. Use this 16-character password in your `.env` file

## Usage

### Run One-Time Check

```bash
python weather_service.py
```

### Run on Schedule

Uncomment the scheduler line in the code to run daily at 8:00 AM:

```python
# At the bottom of weather_service.py, uncomment:
weather_service.run_scheduler()
```

## Configuration

### Weather Thresholds

Customize safety limits for each program session by adding records to the `weather_thresholds` table:

```sql
INSERT INTO weather_thresholds (session_id, min_temperature, max_wind_speed, max_rain_probability, max_precipitation_mm)
VALUES (1, 0.0, 30.0, 80, 10.0);
```

**Parameters:**
- `min_temperature`: Minimum safe temperature in Celsius
- `max_wind_speed`: Maximum safe wind speed in km/h
- `max_rain_probability`: Maximum acceptable rain probability (%)
- `max_precipitation_mm`: Maximum acceptable precipitation in millimeters

### Program Sessions

Add your program sessions to the `program_sessions` table:

```sql
INSERT INTO program_sessions (session_name, day_of_week, start_time, end_time, location, is_active)
VALUES ('Tuesday Evening Hockey', 1, '18:00', '19:00', 'Local Arena', TRUE);
```

**Day of Week Values:**
- 0 = Monday
- 1 = Tuesday
- 2 = Wednesday
- 3 = Thursday
- 4 = Friday
- 5 = Saturday
- 6 = Sunday

## How It Works

### 1. Session Discovery
- Queries active program sessions from the database
- Calculates next occurrence of each session based on day of week
- Checks if notifications have already been sent for upcoming dates

### 2. Weather Fetching
- Calls OpenWeatherMap API for 5-day forecast
- Caches results for 3 hours to minimize API usage
- Extracts relevant weather data (temperature, wind, rain, etc.)

### 3. Threshold Checking
- Compares weather conditions against session-specific thresholds
- Determines severity level (none, moderate, severe)
- Generates human-readable reason messages

### 4. Notification Sending
- Retrieves all parent email addresses from registrations
- Sends formatted email notifications with weather details
- Logs successful notifications to prevent duplicates

### 5. Email Content
Notifications include:
- Current weather forecast details
- Specific reasons for concern
- Severity assessment
- Program status (modified vs cancelled)
- Contact information for questions

## API Integration

### OpenWeatherMap API
- **Endpoint**: 5-day weather forecast
- **Location**: Toronto, ON (43.6532, -79.3832)
- **Units**: Metric (Celsius, km/h)
- **Rate Limit**: 60 calls/minute, 1000 calls/day (free tier)

### Email Delivery
- **Service**: Gmail SMTP
- **Port**: 587 (TLS)
- **Authentication**: App Password required
- **Rate Limit**: 500 emails/day (Gmail limit)

## Error Handling

The system includes comprehensive error handling for:
- API failures (weather service unavailable)
- Database connection issues
- Email delivery failures
- Missing configuration values
- Invalid weather data

## Logging

The service provides detailed console output including:
- Configuration validation status
- Weather data retrieval results
- Threshold checking outcomes
- Email delivery success/failure counts
- Error messages with context

## Security

- **Environment Variables**: Sensitive data stored in `.env` file
- **API Keys**: Never hardcoded in source code
- **Database Security**: Uses Supabase Row Level Security
- **Email Security**: Uses Gmail App Passwords, not account passwords

## Performance

- **Caching**: Weather data cached for 3 hours
- **Batch Processing**: Handles multiple sessions efficiently
- **Database Indexing**: Optimized queries for fast lookups
- **API Optimization**: Minimal API calls through smart caching

## Troubleshooting

### Common Issues

1. **401 Supabase Error**: Check your API key is the "anon public" key
2. **Column Not Found**: Ensure database tables match the expected schema
3. **No Weather Data**: Check OpenWeatherMap API key and network connection
4. **Email Failures**: Verify Gmail App Password and 2FA settings
5. **No Parent Emails**: Check registrations table has valid email addresses

### Debug Mode

Add this to see detailed weather data:

```python
# Test weather fetching
weather = weather_service.get_weather_forecast('2025-07-10')
print(f"Weather data: {weather}")
```

## Deployment

### Local Development
- Run directly with `python weather_service.py`
- Use VS Code debugger for step-through debugging
- Test with sample data before production use

### Production Deployment
- Deploy to cloud platform (AWS, Google Cloud, etc.)
- Use cron job or cloud scheduler for automation
- Set up monitoring and alerting for failures
- Configure backup notification methods

## Contributing

When making changes:
1. Test with sample data first
2. Verify email delivery works
3. Check all error handling paths
4. Update documentation as needed
5. Test with different weather conditions

## Support

For issues:
1. Check console output for error messages
2. Verify all environment variables are set
3. Test database connectivity
4. Check API key validity
5. Verify email configuration

---

**Last Updated**: July 2025
**Author**: On The Ball Hockey Program Team