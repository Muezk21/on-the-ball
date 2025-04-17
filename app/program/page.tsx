import React from 'react';

export default function Program() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ color: "#f37c22" }}>Our Program</h1>
      
      <section style={{ 
        marginTop: "2rem", 
        background: "rgba(243, 124, 34, 0.1)", /* Very light orange */
        padding: "1.5rem",
        borderRadius: "8px",
        borderLeft: "4px solidrgb(8, 4, 0)" /* Orange border accent */
      }}>
        <h2>Youth Program (Ages 6-12)</h2>
        <p>Description of your youth program, including schedule, focus areas, and benefits.</p>
      </section>
      
      {/* Add a new section with orange background */}
      <section style={{ 
        marginTop: "2rem", 
        background: "rgba(243, 124, 34, 0.1)", /* Very light orange */
        padding: "1.5rem",
        borderRadius: "8px",
        borderLeft: "4px solid #f37c22" /* Orange border accent */
      }}>
        <h2>Weekday Program</h2>
        <p>7:45pm-9:00pm every Wednesday evening.</p>
      </section>
      
      {/* Add a dark section */}
      <section style={{ 
        marginTop: "2rem", 
        background: "rgba(243, 124, 34, 0.1)", /* Nearly black background */
        color: "white",
        padding: "1.5rem",
        borderRadius: "8px" 
      }}>
        <h2 style={{color: "black" }}>Weekend Program</h2>
        <p>10:30am-12:00pm</p>
      </section>
    </div>
  );
}