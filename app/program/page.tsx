import React from 'react';

export default function Program() {
  return (
    <div style={{ 
      fontFamily: "'Quicksand', sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: "#fff5eb" // Light orange background throughout
    }}>
      {/* Hero Section with Background Image */}
      <div style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/images/programpage.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "8rem 2rem",
        textAlign: "center",
        borderBottom: "4px solid #f37c22"
      }}>
        <div className="container">
          <h1 style={{ 
            fontSize: "4rem", 
            fontWeight: "300",
            letterSpacing: "3px",
            marginBottom: "1.5rem", 
            color: "white",
            textTransform: "uppercase"
          }}>Our <span style={{ color: "#f37c22" }}>Ball Hockey</span> Program</h1>
          <p style={{ 
            fontSize: "1.4rem", 
            fontWeight: "300",
            letterSpacing: "2px",
            marginBottom: "3rem", 
            maxWidth: "700px", 
            margin: "0 auto",
            color: "#e0e0e0"
          }}>SKILLS DEVELOPMENT & COMMUNITY BUILDING</p>
        </div>
      </div>
      
      {/* Affordable Access Section */}
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
            borderLeft: "3px solid #f37c22", // Added left border
            paddingLeft: "15px" // Added padding for the left border
          }}>
            Affordable Access to Hockey
          </h2>
          <p style={{ 
            color: "#666", 
            lineHeight: "1.8",
            fontSize: "1.1rem"
          }}>
            We believe every child should have the opportunity to experience the joy of hockey regardless of financial situation. Our ball hockey program offers professional coaching and skill development at a fraction of the cost of ice hockey programs, making the sport accessible to all families in our community.
          </p>
        </div>
      </div>
      
      {/* Weekday Program */}
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
            borderLeft: "3px solid #f37c22", // Added left border
            paddingLeft: "15px" // Added padding for the left border
          }}>
            Weekday Program
          </h2>
          <p style={{ 
            color: "#666", 
            lineHeight: "1.8",
            fontSize: "1.1rem"
          }}>
            7:45 PM - 9:00 PM every Wednesday evening. Focus on fundamental skills, teamwork, and strategy in a fun, supportive environment. All equipment provided!
          </p>
        </div>
      </div>
      
      {/* Weekend Program */}
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
            borderLeft: "3px solid #f37c22", // Added left border
            paddingLeft: "15px" // Added padding for the left border
          }}>
            Weekend Program
          </h2>
          <p style={{ 
            color: "#666", 
            lineHeight: "1.8",
            fontSize: "1.1rem"
          }}>
            10:30 AM - 12:00 PM Saturdays. Extended gameplay and scrimmages to apply skills learned during weekday sessions. Perfect for both beginners and experienced players.
          </p>
        </div>
      </div>
      
      {/* Why Ball Hockey */}
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
            borderLeft: "3px solid #f37c22", // Added left border
            paddingLeft: "15px" // Added padding for the left border
          }}>
            Why Ball Hockey?
          </h2>
          <p style={{ 
            color: "#666", 
            lineHeight: "1.8",
            fontSize: "1.1rem"
          }}>
            Ball hockey develops the same core skills as ice hockey (stick handling, shooting, passing, and tactical awareness) while being more accessible. Players can join with minimal equipment, and our program is designed to be inclusive while still providing quality hockey instruction.
          </p>
        </div>
      </div>
    </div>
  );
}