import WeatherWidget from './components/weatherwidget';
import './globals.css';
import Navbar from './Navbar';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'On The Ball Hockey',
  description: 'The ultimate ball hockey program',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id="top">
        <Navbar />
        <main>
          {children}
        </main>
        <footer style={{
          backgroundColor: "#2a2a2a",
          color: "#e0e0e0",
          padding: "3rem 2rem",
        }}>
          <div className="container">
            <div style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              justifyContent: "space-between",
              gap: "2rem"
            }}>
              {/* About */}
              <div style={{ flex: "1 1 280px" }}>
                <h3 style={{ color: "#f37c22", marginBottom: "1.5rem" }}>ON THE BALL</h3>
                <p>Developing young players through the purest form of hockey. Our programs focus on skills, teamwork, and fun.</p>
              </div>

              {/* Weather */}
              <div style={{
                flex: "1 1 280px",
                backgroundColor: "#1e1e1e",
                padding: "1rem",
                borderRadius: "8px",
                textAlign: "center"
              }}>
                <WeatherWidget />
              </div>

              {/* Chatbot Placeholder */}
              <div style={{
                flex: "1 1 280px",
                border: "1px dashed #f37c22",
                borderRadius: "8px",
                minHeight: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                🤖 Chatbot coming soon
              </div>
            </div>

            <div style={{ 
              borderTop: "1px solid #444", 
              marginTop: "2rem", 
              paddingTop: "2rem", 
              textAlign: "center" 
            }}>
            
            <p>© 2025 On The Ball Program. All rights reserved.</p>
            </div>
            </div> {/* Close .container */}
            </footer>

            {/* 🔼 Floating Back to Top Button */}
            <a
              href="#top"
              style={{
                position: "fixed",
                bottom: "2rem",
                right: "2rem",
                padding: "0.75rem 1.25rem",
                backgroundColor: "#f37c22",
                color: "#fff",
                borderRadius: "50%",
                textDecoration: "none",
                fontWeight: "bold",
                boxShadow: "0 5px 15px rgba(243, 124, 34, 0.4)",
                transition: "transform 0.3s ease",
                fontSize: "1.5rem",
                zIndex: 1000,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              aria-label="Back to top"
            >
              ↑
            </a>
      </body>
    </html>
  );
}
