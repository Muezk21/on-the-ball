import React from 'react';

export default function Contact() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Contact Us</h1>
      
      <section style={{ marginTop: "2rem" }}>
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Whether you have questions about our program, registration, or anything else, feel free to reach out.</p>
        
        <div style={{ marginTop: "1rem" }}>
          <h3>Contact Information</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Email: info@ontheballhockey.com</li>
            <li>Phone: (647) 667-2343</li>
            <li></li>
          </ul>
        </div>
      </section>
      
      <section style={{ marginTop: "2rem" }}>
        <h2>Send Us a Message</h2>
        
        {/* Basic contact form - you'll want to add functionality later */}
        <form style={{ marginTop: "1rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="contactName" style={{ display: "block", marginBottom: "0.5rem" }}>Name:</label>
            <input type="text" id="contactName" style={{ width: "100%", padding: "0.5rem" }} />
          </div>
          
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="contactEmail" style={{ display: "block", marginBottom: "0.5rem" }}>Email:</label>
            <input type="email" id="contactEmail" style={{ width: "100%", padding: "0.5rem" }} />
          </div>
          
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem" }}>Message:</label>
            <textarea id="message" rows={5} style={{ width: "100%", padding: "0.5rem" }}></textarea>
          </div>
          
          <button type="submit" style={{ 
            background: "#0070f3", 
            color: "white", 
            padding: "0.5rem 1rem", 
            border: "none", 
            borderRadius: "4px",
            cursor: "pointer"
          }}>Send Message</button>
        </form>
      </section>
    </div>
  );
}