import BackToTopButton from './components/backtotopbutton';


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
          padding: "2rem 1rem",
        }}>
          <div className="container">
            <div style={{ 
              display: "flex", 
              flexDirection: "column", //Stack vertically on mobile,,
              gap: "2rem"
            }}>
              {/* About */}
              <div style={{ flex: "1" }}>
                <h3 style={{ color: "#f37c22", marginBottom: "1rem" }}>ON THE BALL</h3>
                <p style={{ color: "white" }}>Developing young players through the purest form of hockey. Our programs focus on skills, teamwork, and fun.</p>
              </div>

              {/* Weather */}
              <div style={{ flex: "1" }}>
                <WeatherWidget />
              </div>

              {/* Chatbot Placeholder */}
              <div style={{ flex: "1"}}>
                <h3 style={{ color: "#f37c22", marginBottom: "1rem" }}>CHAT SUPPORT</h3>
                <p style={{ color: "white" }}> 🤖 Chatbot coming soon</p>
              </div>
            </div>

            <div style={{ 
              borderTop: "1px solid #444", 
              marginTop: "2rem", 
              paddingTop: "2rem", 
              textAlign: "center" 
            }}>
            
            <p style={{ color: "white", margin: "0" }}>© 2025 On The Ball Program. All rights reserved.</p>
            </div>
            </div>
            </footer>

            {/* 🔼 Floating Back to Top Button */}
            <BackToTopButton />

      </body>
    </html>
  );
}
