'use client';

import { useState } from "react";

function InteractiveButton({ children, type = "button", disabled = false, ...props }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button 
      type={type}
      disabled={disabled}
      style={{ 
        backgroundColor: disabled ? "#ccc" : (isHovered ? "#d86811" : "#f37c22"),
        color: "white",
        padding: "1rem 2.5rem",
        border: "none",
        fontSize: "0.9rem",
        letterSpacing: "1px",
        fontWeight: "500",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.3s ease",
        textTransform: "uppercase",
        borderRadius: "4px",
        transform: (isHovered && !disabled) ? "translateY(-3px)" : "translateY(0)",
        boxShadow: (isHovered && !disabled) ? "0 5px 15px rgba(243, 124, 34, 0.4)" : "none",
        opacity: disabled ? 0.6 : 1
      }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
}

function LargeInteractiveButton({ children, type = "button", disabled = false, ...props }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button 
      type={type}
      disabled={disabled}
      style={{ 
        backgroundColor: disabled ? "#ccc" : (isHovered ? "#d86811" : "#f37c22"),
        color: "white",
        padding: "1.2rem 3rem",
        border: "none",
        fontSize: "1rem",
        letterSpacing: "1px",
        fontWeight: "500",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.3s ease",
        textTransform: "uppercase",
        borderRadius: "4px",
        transform: (isHovered && !disabled) ? "translateY(-3px)" : "translateY(0)",
        boxShadow: (isHovered && !disabled) ? "0 5px 15px rgba(243, 124, 34, 0.4)" : "none",
        opacity: disabled ? 0.6 : 1
      }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
}

export { InteractiveButton, LargeInteractiveButton };