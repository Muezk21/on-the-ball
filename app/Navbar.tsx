'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  // Instead of inline functions that look like hooks, use state for hover
  const [hoveredLink, setHoveredLink] = useState(null);
  
  return (
    <nav style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "1.5rem 2rem",
      background: "#2a2a2a",
      color: "white",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    }}>
      <div className="logo" style={{ 
        fontSize: "1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem", // Increased from 0.5rem
        marginBottom: "1.5rem" // Increased from 1.2rem
      }}>
        {/* Enlarged logo with circular mask */}
        <div style={{
          width: "70px", // Increased from 50px
          height: "70px", // Increased from 50px
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: "50%" // Added to create circular mask
        }}>
          <Image 
            src="/images/On The Ball Logo 3-final.png"
            alt="On The Ball logo"
            width={70} // Increased from 50
            height={70} // Increased from 50
            style={{
              objectFit: "cover" // Ensures the image fills the circle
            }}
          />
        </div>
        <Link href="/" style={{ 
          color: "#f37c22", 
          textDecoration: "none",
          fontWeight: "bold", 
          fontSize: "2rem" // Increased from 1.5rem implicitly via the parent
        }}>
          ON THE BALL
        </Link>
      </div>
      
      <div className="nav-links" style={{ display: "flex", gap: "2.5rem" }}> {/* Increased from 2rem */}
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Program", path: "/program" },
          { name: "Registration", path: "/registration" },
          { name: "Contact", path: "/contact" }
        ].map((link) => (
          <Link 
            key={link.path}
            href={link.path} 
            style={{
              color: hoveredLink === link.path ? "#f37c22" : "white",
              textDecoration: "none",
              fontWeight: "normal", // Changed from 500
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
    </nav>
  );
}