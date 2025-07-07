'use client';

import React, { useState } from 'react';
import { InteractiveButton } from '../buttons'; // Adjust the path if necessary

export default function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('');
  const [age, setAge] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const validateForm = () => {
    if (!name || !email || !program || !age) {
      setMessage('Please fill in all fields.');
      return false;
    }
    if (!email.includes('@')) {
      setMessage('Please enter a valid email.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, program, age }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('✅ Registration successful! Please check your email.');
        setName('');
        setEmail('');
        setProgram('');
        setAge('');
      } else {
        setMessage(`❌ Something went wrong: ${result.error || 'Please try again.'}`);
      }
    } catch (error) {
      setMessage('❌ Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
      <h1>Register for the Program</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <label>
          Full Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
          />
        </label>

        <label>
          Child's Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            min="6"
            max="12"
          />
        </label>

        <label>
          Select Program:
          <select
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
          >
            <option value="">Choose one</option>
            <option value="Weekday">Weekday Program</option>
            <option value="Weekend">Weekend Program</option>
          </select>
        </label>

        <div style={{ marginTop: '1rem' }}>
          <InteractiveButton type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </InteractiveButton>
        </div>

        {message && (
          <p style={{ marginTop: '1rem', color: message.includes('✅') ? 'green' : 'red' }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
