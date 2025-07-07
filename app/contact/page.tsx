'use client';
import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('error');
    }
  };

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
          </ul>
        </div>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Send Us a Message</h2>

        <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="contactName" style={{ display: "block", marginBottom: "0.5rem" }}>Name:</label>
            <input
              type="text"
              id="contactName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="contactEmail" style={{ display: "block", marginBottom: "0.5rem" }}>Email:</label>
            <input
              type="email"
              id="contactEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem" }}>Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>

          <button 
            type="submit" 
            className="glow-button"
            style={{
              background: "#0070f3",
              color: "white",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              boxShadow: '0 0 8px rgba(0, 112, 243, 0.5)',
              transition: 'box-shadow 0.3s ease',
            }} 
          >
            Send Message 
          </button>

          {status === 'success' && (
            <p style={{ color: "green", marginTop: "1rem" }}>✅ Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p style={{ color: "red", marginTop: "1rem" }}>❌ Something went wrong. Please try again.</p>
          )}
        </form>
      </section>
    </div>
  );
}