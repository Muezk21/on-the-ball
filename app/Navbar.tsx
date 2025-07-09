'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  // Adjusted state type to handle both 'string' and 'null'
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Program", path: "/program" },
    { name: "Registration", path: "/registration" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "1.5rem 1rem",  //reduced padding to 1 for mobile
      background: "#2a2a2a",
      color: "white",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    }}>
      {/* Logo Section */}
      <div style={{ 
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "1200px",
        marginBottom: "1.5rem"
      }}>
        <div className="logo" style={{ 
          fontSize: "1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}>

        <div style={{
            width: "70px",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            borderRadius: "50%"
          }}>
            <Image 
              src="/images/On The Ball Logo 3-final.png"
              alt="On The Ball logo"
              width={70}
              height={70}
              style={{
                objectFit: "cover"
              }}
          />
        </div>
        <Link href="/" style={{ 
          color: "#f37c22", 
          textDecoration: "none",
          fontWeight: "normal", 
          fontSize: "1.5rem" //2 --> 1.5rem for mobile
        }}>
          <span className="logo-text">ON THE BALL PROGRAM</span>
        </Link>
      </div>
      { /* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          display: "block",
          background: "none",
          border: "none",
          color: "#f37c22",
          fontSize: "1.5rem",
          cursor: "pointer",
          padding: "0.5rem"
        }}
        className="mobile-menu-btn"
      >
        ☰
      </button>
    </div>
      {/* Desktop Navigation */}
      <div className="nav-links desktop-menu" style={{
        display: "flex", 
        gap: "2.5rem",
        width: "100%",
        justifyContent: "center"
      }}>
        {links.map((link) => (
          <Link 
            key={link.path}
            href={link.path} 
            style={{
              color: hoveredLink === link.path ? "#f37c22" : "white",
              textDecoration: "none",
              fontWeight: "normal",
              transition: "color 0.3s ease",
              textTransform: "uppercase",
              fontSize: "0.9rem",
              letterSpacing: "1px"
            }}
            onMouseEnter={() => setHoveredLink(link.path)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {link.name}
          </Link> 
        ))}
      </div> 
      
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-menu" style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          paddingTop: "1rem",
          borderTop: "1px solid #444"
        }}>
          {links.map((link) => (
            <Link 
              key={link.path}
              href={link.path} 
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "normal",
                textTransform: "uppercase",
                fontSize: "0.9rem",
                letterSpacing: "1px",
                padding: "0.5rem 0",
                textAlign: "center"
              }}
              onClick={() => setIsMenuOpen(false)} // Close menu when link is clicked
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}