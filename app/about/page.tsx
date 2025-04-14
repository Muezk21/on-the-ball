import React from 'react';

export default function AboutPage() {
    return (
      <div>
        {/* Page Header */}
        <div style={{ 
          background: "#2a2a2a",
          padding: "3rem 2rem",
          textAlign: "center",
          color: "white"
        }}>
          <div className="container">
            <h1 style={{ color: "white" }}>About On The Ball</h1>
          </div>
        </div>
        
        {/* Main Content */}
        <div style={{ padding: "4rem 2rem" }}>
          <div className="container">
            <div style={{ 
              display: "flex", 
              flexWrap: "wrap", 
              gap: "3rem", 
              alignItems: "center" 
            }}>
              <div style={{ flex: "1 1 400px" }}>
                <h2 style={{ 
                  marginBottom: "1.5rem",
                  position: "relative",
                  paddingBottom: "1rem"
                }}>
                  Our Story
                  <span style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "80px",
                    height: "4px",
                    backgroundColor: "#f37c22"
                  }}></span>
                </h2>
                <p style={{ marginBottom: "1.5rem", color: "#4a4a4a" }}>
                  On The Ball Hockey Program was founded with a passion for developing young hockey talent in Ontario. We believe in creating a supportive environment where children aged 6-12 can learn the fundamentals of hockey.
                </p>
                <p style={{ color: "#4a4a4a" }}>
                  Our experienced coaches focus on skill development, teamwork, and most importantly, having fun. We believe that every child should have the opportunity to experience the joy of hockey in a safe and encouraging setting.
                </p>
              </div>
              
              <div style={{ flex: "1 1 400px", backgroundColor: "#f5f5f5", borderRadius: "8px", padding: "2rem" }}>
                <h3 style={{ marginBottom: "1.5rem", color: "#2a2a2a" }}>Our Mission</h3>
                <p style={{ color: "#4a4a4a" }}>
                  To provide a premier ball hockey experience that develops skills, builds character, and fosters a lifelong love for the sport in a safe and enjoyable environment.
                </p>
                
                <h3 style={{ marginTop: "2rem", marginBottom: "1.5rem", color: "#2a2a2a" }}>Our Values</h3>
                <ul style={{ color: "#4a4a4a", paddingLeft: "1.5rem" }}>
                  <li style={{ marginBottom: "0.5rem" }}>Skill Development & Learning</li>
                  <li style={{ marginBottom: "0.5rem" }}>Teamwork & Sportsmanship</li>
                  <li style={{ marginBottom: "0.5rem" }}>Inclusion & Respect</li>
                  <li>Fun & Positive Environment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }