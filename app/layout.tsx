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
      <body>
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
          <div style={{ flex: "1 1 300px" }}>
            <h3 style={{ color: "#f37c22", marginBottom: "1.5rem" }}>ON THE BALL</h3>
            <p>Developing young players through the purest form of hockey. Our programs focus on skills, teamwork, and fun.</p>
          </div>
      
          <div style={{ flex: "1 1 300px" }}>
            <h3 style={{ color: "#f37c22", marginBottom: "1.5rem" }}>Contact Info</h3>
            <p style={{ marginBottom: "0.5rem" }}>Email: ontheballcamp@gmail.com</p>
            <p style={{ marginBottom: "0.5rem" }}>Phone: (647)-667-2343</p>
            <p></p>
          </div>
      
          <div style={{ flex: "1 1 300px" }}>
            <h3 style={{ color: "#f37c22", marginBottom: "1.5rem" }}>Quick Links</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Link href="/" style={{ color: "#e0e0e0", textDecoration: "none" }}>Home</Link>
              <Link href="/about" style={{ color: "#e0e0e0", textDecoration: "none" }}>About</Link>
              <Link href="/program" style={{ color: "#e0e0e0", textDecoration: "none" }}>Program</Link>
              <Link href="/registration" style={{ color: "#e0e0e0", textDecoration: "none" }}>Registration</Link>
              <Link href="/contact" style={{ color: "#e0e0e0", textDecoration: "none" }}>Contact</Link>
            </div>
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
      </div>
    </footer>
  </body>
</html>
  );
}

