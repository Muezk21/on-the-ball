export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div style={{ 
        background: "linear-gradient(rgba(42, 42, 42, 0.8), rgba(42, 42, 42, 0.8)), url('/api/placeholder/1600/600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "6rem 2rem",
        textAlign: "center"
      }}>
        <div className="container">
          <h1 style={{ 
            fontSize: "3.5rem", 
            marginBottom: "1rem", 
            color: "white" 
          }}>Welcome to On The Ball</h1>
          <p style={{ 
            fontSize: "1.2rem", 
            marginBottom: "2rem", 
            maxWidth: "800px", 
            margin: "0 auto 2rem" 
          }}>The Purest Form Of Hockey</p>
          <button style={{ 
            backgroundColor: "#f37c22",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "4px",
            border: "none",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}>Join Our Program</button>
        </div>
      </div>
      
      {/* Features Section */}
      <div style={{ padding: "5rem 2rem", backgroundColor: "#f5f5f5" }}>
        <div className="container">
          <h2 style={{ 
            textAlign: "center", 
            marginBottom: "3rem",
            position: "relative",
            paddingBottom: "1rem"
          }}>
            Why Choose Our Program
            <span style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              backgroundColor: "#f37c22"
            }}></span>
          </h2>
          
          <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            justifyContent: "center", 
            gap: "2rem" 
          }}>
            {/* Feature 1 */}
            <div style={{ 
              flex: "1 1 300px",
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "2rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}>
              <h3 style={{ color: "#2a2a2a", marginBottom: "1rem" }}>Expert Coaching</h3>
              <p style={{ color: "#4a4a4a" }}>Learn from experienced coaches who are passionate about developing young talent in ball hockey.</p>
            </div>
            
            {/* Feature 2 */}
            <div style={{ 
              flex: "1 1 300px",
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "2rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}>
              <h3 style={{ color: "#2a2a2a", marginBottom: "1rem" }}>Skill Development</h3>
              <p style={{ color: "#4a4a4a" }}>Focused training on fundamental skills, game strategy, and teamwork in a supportive environment.</p>
            </div>
            
            {/* Feature 3 */}
            <div style={{ 
              flex: "1 1 300px",
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "2rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}>
              <h3 style={{ color: "#2a2a2a", marginBottom: "1rem" }}>Fun & Safe</h3>
              <p style={{ color: "#4a4a4a" }}>A positive atmosphere where children can enjoy the game while building confidence and friendships.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div style={{ 
        padding: "4rem 2rem", 
        backgroundColor: "#2a2a2a",
        color: "white",
        textAlign: "center"
      }}>
        <div className="container">
          <h2 style={{ color: "white", marginBottom: "1.5rem" }}>Ready to Join Our Ball Hockey Program?</h2>
          <p style={{ maxWidth: "700px", margin: "0 auto 2rem", color: "#e0e0e0" }}>
            Spaces are limited for our upcoming sessions. Secure your spot today!
          </p>
          <button style={{ 
            backgroundColor: "#f37c22",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "4px",
            border: "none",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}>Register Now</button>
        </div>
      </div>
    </div>
  );
}