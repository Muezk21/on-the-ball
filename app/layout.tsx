import BackToTopButton from './components/backtotopbutton';
import WeatherWidget from './components/weatherwidget';
import './globals.css';
import Navbar from './Navbar';
import { ReactNode } from 'react';
import Link from 'next/link';

import ChatWidget from './components/chatwidget';

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
          padding: "3rem 2rem", // Back to original padding
        }}>
          <div className="container">
            <div style={{ 
              display: "flex", 
              flexWrap: "wrap", // Back to original - allows wrapping on mobile
              justifyContent: "space-between", // Back to original - spreads items on desktop
              gap: "2rem"
            }}>
              {/* About */}
              <div style={{ 
                flex: "1 1 280px", // Back to original - grows/shrinks with 280px base
                backgroundColor: "2a2a2a" // Back to original (though this might be a typo)
              }}>
                <h3 style={{ color: "#f37c22", marginBottom: "1.5rem" }}>ON THE BALL</h3>
                <p style={{ color: "white" }}>Developing young players through the purest form of hockey. Our programs focus on skills, teamwork, and fun.</p>
              </div>

              {/* Weather */}
              <div style={{ flex: "1 1 280px" }}>
                <WeatherWidget />
              </div>

              {/* Chatbot Placeholder */}
              <div style={{
                flex: "1 1 280px",
                border: "1px dashed #f37c22", // Back to original dashed border
              }}>
                <h3 style={{ color: "#f37c22", marginBottom: "1.5rem" }}>CHAT SUPPORT</h3>
                <ChatWidget />
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