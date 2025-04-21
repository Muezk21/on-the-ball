import React from 'react';

export default function AboutPage() {
  return (
    <div style={{ 
      fontFamily: "'Quicksand', sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: "#fff5eb" // Light orange background throughout
    }}>
      <div style={{ padding: "4rem 2rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ 
          fontSize: "2.5rem", 
          fontWeight: "300",
          letterSpacing: "2px",
          color: "#333",
          textTransform: "uppercase",
          marginBottom: "2rem",
          textAlign: "center",
          textDecoration: "underline",
          textUnderlineOffset: "8px",
          textDecorationThickness: "2px",
          textDecorationColor: "#f37c22"
        }}>About On The <span style={{ color: "#f37c22" }}>Ball</span></h1>
      </div>
      
      {/* Our Story Section */}
      <div style={{ 
        padding: "3rem 2rem", 
        backgroundColor: "#fff5eb",
        borderBottom: "2px solid #f37c22" // Full-width orange divider
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{
            position: "relative",
            paddingBottom: "0.8rem",
            marginBottom: "1.2rem",
            color: "#333",
            fontWeight: "500",
            fontSize: "1.8rem",
            letterSpacing: "1px",
            borderLeft: "3px solid #f37c22", // Left border
            paddingLeft: "15px" // Padding for the left border
          }}>
            Our Story
          </h2>
          <p style={{ 
            color: "#666", 
            lineHeight: "1.8",
            fontSize: "1.1rem"
          }}>
            On The Ball was founded in 2022 to open the doors of hockey to every child. We saw the gap in access—especially for families from underrepresented backgrounds—and created a space where kids could learn, grow, and play without barriers. Our mission is built on more than sport; it's about giving youth a foundation of confidence, community, and character through hockey.
          </p>
        </div>
      </div>
      
      {/* Our Mission Section */}
      <div style={{ 
        padding: "3rem 2rem", 
        backgroundColor: "#fff5eb",
        borderBottom: "2px solid #f37c22" // Full-width orange divider
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{
            position: "relative",
            paddingBottom: "0.8rem",
            marginBottom: "1.2rem",
            color: "#333",
            fontWeight: "500",
            fontSize: "1.8rem",
            letterSpacing: "1px",
            borderLeft: "3px solid #f37c22", // Left border
            paddingLeft: "15px" // Padding for the left border
          }}>
            Our Mission
          </h2>
          <p style={{ 
            color: "#666", 
            lineHeight: "1.8",
            fontSize: "1.1rem"
          }}>
            To remove the barriers that have kept too many kids on the sidelines. We believe ball hockey is the most realistic and effective entry point into the sport—no ice time, no expensive gear—just opportunity. Our mission is to give every child, especially those from marginalized communities, the chance to fall in love with the game and develop real skills on a real path forward.
          </p>
        </div>
      </div>
      
      {/* Our Values Section */}
      <div style={{ 
        padding: "3rem 2rem", 
        backgroundColor: "#fff5eb"
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{
            position: "relative",
            paddingBottom: "0.8rem",
            marginBottom: "1.2rem",
            color: "#333",
            fontWeight: "500",
            fontSize: "1.8rem",
            letterSpacing: "1px",
            borderLeft: "3px solid #f37c22", // Left border
            paddingLeft: "15px" // Padding for the left border
          }}>
            Our Values
          </h2>
          <ul style={{ 
            color: "#666", 
            lineHeight: "1.8",
            fontSize: "1.1rem",
            paddingLeft: "2rem",
            marginTop: "1rem"
          }}>
            <li style={{ marginBottom: "0.5rem" }}>Skill Development & Learning</li>
            <li style={{ marginBottom: "0.5rem" }}>Teamwork & Sportsmanship</li>
            <li style={{ marginBottom: "0.5rem" }}>Inclusion & Respect</li>
            <li>Fun & Positive Environment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}