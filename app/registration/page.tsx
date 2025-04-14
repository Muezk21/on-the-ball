import React from 'react';

export default function Registration() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Registration</h1>
      
      <section style={{ marginTop: "2rem" }}>
        <h2>Current Session</h2>
        <p>Information about the current or upcoming session dates, times, and locations.</p>
        
        <div style={{ marginTop: "1rem" }}>
          <h3>Registration Fees</h3>
          <ul>
            <li>Youth Program: $XXX</li>
          </ul>
        </div>
      </section>
      
      <section style={{ marginTop: "2rem" }}>
        <h2>How to Register</h2>
        <p>Complete the form below or contact us directly at [email/phone].</p>
        
        {/* Basic registration form - you'll want to add functionality later */}
        <form style={{ marginTop: "1rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem" }}>Full Name:</label>
            <input type="text" id="name" style={{ width: "100%", padding: "0.5rem" }} />
          </div>
          
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>Email:</label>
            <input type="email" id="email" style={{ width: "100%", padding: "0.5rem" }} />
          </div>
          
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="program" style={{ display: "block", marginBottom: "0.5rem" }}>Program:</label>
            <select id="program" style={{ width: "100%", padding: "0.5rem" }}>
              <option value="">Select a program</option>
              <option value="Weekday">Weekday Program</option>
              <option value="Weekend">Weekend Program</option>
            </select>
          </div>
          
          <button type="submit" style={{ 
            background: "#0070f3", 
            color: "white", 
            padding: "0.5rem 1rem", 
            border: "none", 
            borderRadius: "4px",
            cursor: "pointer"
          }}>Submit Registration</button>
        </form>
      </section>
    </div>
  );
}