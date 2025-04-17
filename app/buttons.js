'use client';

import { useState } from "react";

function InteractiveButton({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button 
      style={{ 
        backgroundColor: isHovered ? "#d86811" : "#f37c22",
        color: "white",
        padding: "1rem 2.5rem",
        border: "none",
        fontSize: "0.9rem",
        letterSpacing: "1px",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.3s ease",
        textTransform: "uppercase",
        borderRadius: "4px",
        transform: isHovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: isHovered ? "0 5px 15px rgba(243, 124, 34, 0.4)" : "none"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}

function LargeInteractiveButton({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button 
      style={{ 
        backgroundColor: isHovered ? "#d86811" : "#f37c22",
        color: "white",
        padding: "1.2rem 3rem",
        border: "none",
        fontSize: "1rem",
        letterSpacing: "1px",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.3s ease",
        textTransform: "uppercase",
        borderRadius: "4px",
        transform: isHovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: isHovered ? "0 5px 15px rgba(243, 124, 34, 0.4)" : "none"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}

export { InteractiveButton, LargeInteractiveButton };