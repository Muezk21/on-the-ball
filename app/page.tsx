// Import the client components
import { InteractiveButton, LargeInteractiveButton } from './buttons';

export default function Home() {
  return (
    <div style={{ 
      fontFamily: "'Quicksand', sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: "#fff5eb" // Very light orange background
    }}>
      {/* Hero Section */}
      <div style={{ 
        background: "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/api/placeholder/1600/600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "8rem 2rem",
        textAlign: "center",
        borderBottom: "4px solid #f37c22" // More visible border
      }}>
        <div className="container">
          <h1 style={{ 
            fontSize: "4rem", 
            fontWeight: "300",
            letterSpacing: "3px",
            marginBottom: "1.5rem", 
            color: "white",
            textTransform: "uppercase"
          }}>ON THE <span style={{ color: "#f37c22" }}>BALL</span></h1>
          <p style={{ 
            fontSize: "1.4rem", 
            fontWeight: "300",
            letterSpacing: "2px",
            marginBottom: "3rem", 
            maxWidth: "700px", 
            margin: "0 auto 3rem",
            color: "#e0e0e0"
          }}>THE PUREST FORM OF HOCKEY</p>
          
          {/* Using client component for interactive button */}
          <InteractiveButton>Join Our Program</InteractiveButton>
        </div>
      </div>
      
      {/* Gateway to Hockey Section */}
      <div style={{ 
        padding: "7rem 2rem", 
        backgroundColor: "#fff5eb", 
        color: "#333",
        borderBottom: "2px solid #f37c22" // More visible border
      }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ 
            textAlign: "center", 
            marginBottom: "5rem",
            fontWeight: "300",
            letterSpacing: "2px",
            fontSize: "2.2rem",
            position: "relative",
            paddingBottom: "1rem",
            textTransform: "uppercase",
            color: "#333"
          }}>
            THE GATEWAY TO HOCKEY
            <span style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "40px",
              height: "3px",
              backgroundColor: "#f37c22"
            }}></span>
          </h2>
          
          <div style={{ 
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "5rem",
            marginBottom: "5rem",
            maxWidth: "900px",
            margin: "0 auto"
          }}>
            <div style={{ textAlign: "center" }}>
              {/* Simplified design element */}
              <div style={{ 
                margin: "0 auto 2.5rem",
                padding: "1rem 0",
                borderTop: "2px solid #f37c22",
                borderBottom: "2px solid #f37c22",
                maxWidth: "200px"
              }}>
                <span style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  color: "#333",
                  letterSpacing: "1px"
                }}>
                  #1
                </span>
              </div>
              <h3 style={{ 
                color: "#333", 
                marginBottom: "1.5rem",
                fontWeight: "600",
                letterSpacing: "1px",
                fontSize: "1.6rem",
                textTransform: "uppercase"
              }}>Most Affordable</h3>
              <p style={{ 
                color: "#666", 
                lineHeight: "1.8",
                fontSize: "1.1rem"
              }}>
                The most accessible entry into hockey for every child. Experience real hockey without the financial barriers of equipment and ice time.
              </p>
            </div>
            
            <div style={{ textAlign: "center" }}>
              {/* Simplified design element */}
              <div style={{ 
                margin: "0 auto 2.5rem",
                padding: "1rem 0",
                borderTop: "2px solid #f37c22",
                borderBottom: "2px solid #f37c22",
                maxWidth: "200px"
              }}>
                <span style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  color: "#333",
                  letterSpacing: "1px"
                }}>
                  100%
                </span>
              </div>
              <h3 style={{ 
                color: "#333", 
                marginBottom: "1.5rem",
                fontWeight: "600",
                letterSpacing: "1px",
                fontSize: "1.6rem",
                textTransform: "uppercase"
              }}>Real Hockey</h3>
              <p style={{ 
                color: "#666", 
                lineHeight: "1.8",
                fontSize: "1.1rem"
              }}>
                Not a substitute – ball hockey delivers the same skills, strategy, teamwork, and excitement that defines true hockey culture.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Impact Stats Section */}
      <div style={{ 
        padding: "7rem 2rem", 
        backgroundColor: "#fff5eb",
        color: "#333",
        textAlign: "center",
        borderBottom: "2px solid #f37c22" // More visible border
      }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ 
            marginBottom: "5rem",
            fontWeight: "300",
            letterSpacing: "2px",
            fontSize: "2.2rem",
            textTransform: "uppercase",
            position: "relative",
            paddingBottom: "1rem",
            display: "inline-block",
            color: "#333"
          }}>
            CHANGING THE GAME
            <span style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "40px",
              height: "3px",
              backgroundColor: "#f37c22"
            }}></span>
          </h2>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "4rem",
            marginBottom: "3rem",
            maxWidth: "900px",
            margin: "0 auto"
          }}>
            <div>
              {/* Simplified design for stats */}
              <div style={{
                fontSize: "3.5rem",
                fontWeight: "600",
                color: "#333",
                marginBottom: "1rem",
                position: "relative",
                display: "inline-block",
                paddingBottom: "0.5rem",
                borderBottom: "2px solid #f37c22"
              }}>
                85%
              </div>
              <p style={{
                color: "#666",
                fontWeight: "400",
                letterSpacing: "1px",
                fontSize: "1.1rem"
              }}>
                of our players continue to ice hockey with advanced skills
              </p>
            </div>
            
            <div>
              {/* Simplified design for stats */}
              <div style={{
                fontSize: "3.5rem",
                fontWeight: "600",
                color: "#333",
                marginBottom: "1rem",
                position: "relative",
                display: "inline-block",
                paddingBottom: "0.5rem",
                borderBottom: "2px solid #f37c22"
              }}>
                5000+
              </div>
              <p style={{
                color: "#666",
                fontWeight: "400",
                letterSpacing: "1px",
                fontSize: "1.1rem"
              }}>
                children developed hockey skills through our program
              </p>
            </div>
            
            <div>
              {/* Simplified design for stats */}
              <div style={{
                fontSize: "3.5rem",
                fontWeight: "600",
                color: "#333",
                marginBottom: "1rem",
                position: "relative",
                display: "inline-block",
                paddingBottom: "0.5rem",
                borderBottom: "2px solid #f37c22"
              }}>
                12+
              </div>
              <p style={{
                color: "#666",
                fontWeight: "400",
                letterSpacing: "1px",
                fontSize: "1.1rem"
              }}>
                years building the future of hockey in our community
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div style={{ 
        padding: "7rem 2rem", 
        backgroundColor: "#fff5eb",
        color: "#333",
        textAlign: "center"
      }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ 
            color: "#333", 
            marginBottom: "2rem",
            fontWeight: "300",
            letterSpacing: "2px",
            fontSize: "2.2rem",
            textTransform: "uppercase"
          }}>Join the Revolution in Hockey</h2>
          <p style={{ 
            maxWidth: "600px", 
            margin: "0 auto 3rem", 
            color: "#666",
            lineHeight: "1.8",
            fontSize: "1.1rem"
          }}>
            Limited spaces available for our upcoming sessions. Affordable, accessible, and authentic hockey experience for every child.
          </p>
          
          {/* Using client component for interactive button */}
          <LargeInteractiveButton>Register Now</LargeInteractiveButton>
        </div>
      </div>
    </div>
  );
}