'use client';

import Link from "next/link";
import { useState } from "react";

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
        fontWeight: "bold", 
        fontSize: "1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        marginBottom: "1.2rem"
      }}>
        {/* Logo space */}
        <div style={{
          width: "50px",
          height: "50px",
          background: "#f37c22",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          {/* Placeholder for your logo */}
          <span style={{ color: "white" }}>OTB</span>
        </div>
        <Link href="/" style={{ color: "#f37c22", textDecoration: "none" }}>
          ON THE BALL
        </Link>
      </div>
      
      <div className="nav-links" style={{ display: "flex", gap: "2rem" }}>
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
              fontWeight: "500",
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