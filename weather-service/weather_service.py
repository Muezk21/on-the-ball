import requests
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime, timedelta
import json
import os
from supabase import create_client, Client
from typing import Dict, List, Optional
import schedule
import time
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class WeatherService:
    def __init__(self):
        # Environment variables - you'll set these up
        self.weather_api_key = os.getenv('WEATHER_API_KEY', 'your_openweather_api_key_here')
        self.supabase_url = os.getenv('SUPABASE_URL', 'your_supabase_url_here')
        self.supabase_key = os.getenv('SUPABASE_KEY', 'your_supabase_anon_key_here')
        
        # Email settings
        self.smtp_server = "smtp.gmail.com"  # Change if not using Gmail
        self.smtp_port = 587
        self.email_user = os.getenv('EMAIL_USER', 'your_email@gmail.com')
        self.email_password = os.getenv('EMAIL_PASSWORD', 'your_app_password')
        
        # Initialize Supabase client
        self.supabase: Client = create_client(self.supabase_url, self.supabase_key)
        
        # Toronto coordinates for weather API
        self.location = {
            'lat': 43.6532,
            'lon': -79.3832,
            'name': 'Toronto, ON'
        }
        
        # Check if all required environment variables are set
        self.validate_config()
    
    def validate_config(self):
        """Check if all required environment variables are properly set"""
        required_vars = [
            ('WEATHER_API_KEY', self.weather_api_key),
            ('SUPABASE_URL', self.supabase_url),
            ('SUPABASE_KEY', self.supabase_key),
            ('EMAIL_USER', self.email_user),
            ('EMAIL_PASSWORD', self.email_password)
        ]
        
        missing = []
        for var_name, var_value in required_vars:
            if var_value.startswith('your_') or not var_value:
                missing.append(var_name)
        
        if missing:
            print(f"❌ Missing environment variables: {', '.join(missing)}")
            print("Please set these in your .env file")
            return False
        
        print("✅ All environment variables configured")
        return True
    
    def get_weather_forecast(self, date: str) -> Optional[Dict]:
        """
        Get weather forecast for a specific date
        date: YYYY-MM-DD format
        """
        try:
            # Check cache first
            cached_weather = self.get_cached_weather(date)
            if cached_weather:
                print(f"Using cached weather for {date}")
                return cached_weather
            
            # Fetch from API
            url = f"https://api.openweathermap.org/data/2.5/forecast"
            params = {
                'lat': self.location['lat'],
                'lon': self.location['lon'],
                'appid': self.weather_api_key,
                'units': 'metric'
            }
            
            response = requests.get(url, params=params)
            response.raise_for_status()
            
            data = response.json()
            
            # Find forecast for the specific date (look for midday forecast)
            target_date = datetime.strptime(date, '%Y-%m-%d').date()
            
            for forecast in data['list']:
                forecast_datetime = datetime.fromtimestamp(forecast['dt'])
                forecast_date = forecast_datetime.date()
                forecast_hour = forecast_datetime.hour
                
                # Look for forecast around midday (12:00) for most accurate daily conditions
                if forecast_date == target_date and 10 <= forecast_hour <= 14:
                    weather_data = {
                        'temperature': forecast['main']['temp'],
                        'rain_probability': forecast.get('pop', 0) * 100,  # Convert to percentage
                        'precipitation_mm': forecast.get('rain', {}).get('3h', 0),
                        'weather_description': forecast['weather'][0]['description'],
                        'date': date
                    }
                    
                    # Cache the weather data
                    self.cache_weather(weather_data)
                    return weather_data
            
            print(f"No forecast found for {date}")
            return None
            
        except requests.RequestException as e:
            print(f"Error fetching weather: {e}")
            return None
        except Exception as e:
            print(f"Unexpected error: {e}")
            return None
    
    def get_cached_weather(self, date: str) -> Optional[Dict]:
        """Check if we have fresh cached weather data"""
        try:
            result = self.supabase.table('weather_cache').select('*').eq('forecast_date', date).gt('expires_at', datetime.now().isoformat()).execute()
            
            if result.data:
                cache_data = result.data[0]
                return {
                    'temperature': float(cache_data['temperature']),
                    'rain_probability': cache_data['rain_probability'],
                    'precipitation_mm': float(cache_data['precipitation_mm']),
                    'weather_description': cache_data['weather_description'],
                    'date': date
                }
            return None
        except Exception as e:
            print(f"Error checking cache: {e}")
            return None
    
    def cache_weather(self, weather_data: Dict):
        """Store weather data in cache"""
        try:
            cache_entry = {
                'location': self.location['name'],
                'forecast_date': weather_data['date'],
                'temperature': weather_data['temperature'],
                'rain_probability': weather_data['rain_probability'],
                'precipitation_mm': weather_data['precipitation_mm'],
                'weather_description': weather_data['weather_description'],
                'expires_at': (datetime.now() + timedelta(hours=3)).isoformat()  # Cache for 3 hours
            }
            
            self.supabase.table('weather_cache').insert(cache_entry).execute()
            print(f"Cached weather for {weather_data['date']}")
            
        except Exception as e:
            print(f"Error caching weather: {e}")
    
    def check_weather_against_thresholds(self, weather_data: Dict, session_id: int) -> Dict:
        """
        Check if weather violates thresholds for a session
        Returns: {'should_notify': bool, 'reasons': list, 'severity': str}
        """
        try:
            # Get thresholds for this session
            result = self.supabase.table('weather_thresholds').select('*').eq('session_id', session_id).execute()
            
            if not result.data:
                print(f"No weather thresholds found for session {session_id}")
                return {'should_notify': False, 'reasons': [], 'severity': 'none'}
            
            thresholds = result.data[0]
            reasons = []
            
            # Check each threshold
            if weather_data['temperature'] < thresholds['min_temp']:
                reasons.append(f"Too cold: {weather_data['temperature']:.1f}°C (minimum: {thresholds['min_temp']}°C)")
            
            if weather_data['rain_probability'] > thresholds['max_rain_probability']:
                reasons.append(f"High rain chance: {weather_data['rain_probability']:.0f}% (maximum: {thresholds['max_rain_probability']}%)")
            
            if weather_data['precipitation_mm'] > thresholds['max_precipitation_mm']:
                reasons.append(f"Heavy rain expected: {weather_data['precipitation_mm']:.1f}mm (maximum: {thresholds['max_precipitation_mm']}mm)")
            
            # Determine severity
            severity = 'none'
            if len(reasons) >= 3:
                severity = 'severe'  # Multiple bad conditions
            elif len(reasons) >= 1:
                severity = 'moderate'  # Some bad conditions
            
            return {
                'should_notify': len(reasons) > 0,
                'reasons': reasons,
                'severity': severity
            }
            
        except Exception as e:
            print(f"Error checking thresholds: {e}")
            return {'should_notify': False, 'reasons': [], 'severity': 'none'}
    
    def get_parent_emails(self) -> List[str]:
        """
        Get all parent email addresses from registrations
        """
        try:
            # Get all unique parent emails from registrations
            result = self.supabase.table('registrations').select('parent_email').execute()
            
            emails = []
            for row in result.data:
                if row['parent_email'] and row['parent_email'].strip():
                    emails.append(row['parent_email'].strip())
            
            # Remove duplicates and return
            unique_emails = list(set(emails))
            print(f"Found {len(unique_emails)} unique parent emails")
            return unique_emails
            
        except Exception as e:
            print(f"Error getting parent emails: {e}")
            return []
    
    def send_weather_notification(self, session_name: str, date: str, weather_data: Dict, check_result: Dict) -> bool:
        """Send email notification to all parents"""
        try:
            parent_emails = self.get_parent_emails()
            
            if not parent_emails:
                print("No parent emails found")
                return False
            
            # Create email content
            subject = f"🌤️ Weather Alert: {session_name} - {date}"
            
            body = f"""Hi Parents,

We're monitoring the weather for {session_name} on {date}.

Current Forecast:
• Temperature: {weather_data['temperature']:.1f}°C
• Rain Probability: {weather_data['rain_probability']:.0f}%
• Conditions: {weather_data['weather_description'].title()}

Weather Concerns:
"""
            
            for reason in check_result['reasons']:
                body += f"• {reason}\n"
            
            if check_result['severity'] == 'severe':
                body += f"\n⚠️ PROGRAM CANCELLED - Weather conditions are too severe for safe play."
            else:
                body += f"\n⚠️ PROGRAM MAY BE MODIFIED - Please check for updates or contact us if you have concerns."
            
            body += """

We prioritize the safety and enjoyment of all players. We'll send updates if plans change.

Questions? Reply to this email or contact us directly.

Best regards,
On The Ball Hockey Program
"""
            
            # Send emails
            successful_sends = 0
            failed_sends = 0
            
            with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
                server.starttls()
                server.login(self.email_user, self.email_password)
                
                for email in parent_emails:
                    try:
                        msg = MIMEMultipart()
                        msg['From'] = self.email_user
                        msg['To'] = email
                        msg['Subject'] = subject
                        msg.attach(MIMEText(body, 'plain'))
                        
                        server.send_message(msg)
                        successful_sends += 1
                    except Exception as e:
                        print(f"Failed to send to {email}: {e}")
                        failed_sends += 1
            
            print(f"Weather notification sent to {successful_sends}/{len(parent_emails)} parents ({failed_sends} failed)")
            return successful_sends > 0
            
        except Exception as e:
            print(f"Error sending notifications: {e}")
            return False
    
    def log_notification(self, session_id: int, date: str, weather_data: Dict, notification_type: str, email_count: int):
        """Log the notification to database"""
        try:
            log_entry = {
                'session_id': session_id,
                'notification_date': date,
                'weather_data': weather_data,
                'notification_type': notification_type,
                'email_count': email_count,
                'created_at': datetime.now().isoformat()
            }
            
            self.supabase.table('weather_notifications').insert(log_entry).execute()
            print(f"Logged notification for {date}")
            
        except Exception as e:
            print(f"Error logging notification: {e}")
    
    def check_upcoming_sessions(self):
        """Main function to check weather for upcoming sessions"""
        try:
            print("Checking active program sessions...")
            
            # Get active program sessions
            result = self.supabase.table('program_sessions').select('*').eq('is_active', True).execute()
            
            if not result.data:
                print("No active sessions found")
                return
            
            print(f"Found {len(result.data)} active sessions")
            
            for session in result.data:
                # Calculate next session date
                today = datetime.now().date()
                days_ahead = (session['day_of_week'] - today.weekday()) % 7
                if days_ahead == 0:  # If today is the session day, check next week
                    days_ahead = 7
                
                next_session_date = today + timedelta(days=days_ahead)
                date_str = next_session_date.strftime('%Y-%m-%d')
                
                print(f"Checking {session['session_name']} for {date_str}")
                
                # Check if we already sent notification for this date
                existing_notification = self.supabase.table('weather_notifications').select('*').eq('session_id', session['id']).eq('notification_date', date_str).execute()
                
                if existing_notification.data:
                    print(f"Already sent notification for {session['session_name']} on {date_str}")
                    continue
                
                # Get weather forecast
                weather_data = self.get_weather_forecast(date_str)
                if not weather_data:
                    print(f"Could not get weather for {date_str}")
                    continue
                
                # Check against thresholds
                check_result = self.check_weather_against_thresholds(weather_data, session['id'])
                
                if check_result['should_notify']:
                    print(f"Weather alert needed for {session['session_name']} on {date_str}")
                    print(f"Reasons: {', '.join(check_result['reasons'])}")
                    
                    # Send notification
                    success = self.send_weather_notification(
                        session['session_name'], 
                        date_str, 
                        weather_data, 
                        check_result
                    )
                    
                    if success:
                        # Log the notification
                        notification_type = 'cancellation' if check_result['severity'] == 'severe' else 'warning'
                        self.log_notification(
                            session['id'], 
                            date_str, 
                            weather_data, 
                            notification_type,
                            len(self.get_parent_emails())
                        )
                else:
                    print(f"Weather looks good for {session['session_name']} on {date_str}")
                    
        except Exception as e:
            print(f"Error checking upcoming sessions: {e}")
    
    def run_scheduler(self):
        """Run the weather checker on a schedule"""
        print("🌤️ Starting Weather Service Scheduler...")
        print("Will check weather daily at 8:00 AM")
        
        # Schedule the check to run daily at 8:00 AM
        schedule.every().day.at("08:00").do(self.check_upcoming_sessions)
        
        # Also run once immediately for testing
        print("Running initial weather check...")
        self.check_upcoming_sessions()
        
        while True:
            schedule.run_pending()
            time.sleep(60)  # Check every minute

# Example usage
if __name__ == "__main__":
    weather_service = WeatherService()
    
    # Run once for testing
    print("🌤️ Running one-time weather check...")
    weather_service.check_upcoming_sessions()
    print("✅ Weather check complete!")
    
    # Uncomment below to run on schedule
    # weather_service.run_scheduler()