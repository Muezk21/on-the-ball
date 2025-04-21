'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  // Adjusted state type to handle both 'string' and 'null'
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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
        gap: "1rem",
        marginBottom: "1.5rem"
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
          fontSize: "2rem"
        }}>
          ON THE BALL PROGRAM
        </Link>
      </div>
      
      <div className="nav-links" style={{ display: "flex", gap: "2.5rem" }}>
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
    </nav>
  );
}
