'use client';
import React, { useState } from 'react';
import { InteractiveButton } from '../buttons'; // Adjust the path if necessary

export default function RegistrationPage() {
  const [childname, setName] = useState('');
  const [age, setAge] = useState('');
  const [parentname, setParentName] = useState('');
  const [parentphone, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Phone number formatting function
  const formatPhoneNumber = (value: string): string => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/[^\d]/g, '');
    
    // Limit to 10 digits for North American numbers
    const limitedPhone = phoneNumber.slice(0, 10);
    
    // Format as (XXX) XXX-XXXX for 10 digits
    if (limitedPhone.length === 10) {
      return `(${limitedPhone.slice(0, 3)}) ${limitedPhone.slice(3, 6)}-${limitedPhone.slice(6)}`;
    }
    
    // Return partial formatting for incomplete numbers
    if (limitedPhone.length >= 6) {
      return `(${limitedPhone.slice(0, 3)}) ${limitedPhone.slice(3, 6)}-${limitedPhone.slice(6)}`;
    }
    if (limitedPhone.length >= 3) {
      return `(${limitedPhone.slice(0, 3)}) ${limitedPhone.slice(3)}`;
    }
    
    return limitedPhone;
  };

  // Phone validation function
  const validatePhoneNumber = (phone: string): boolean => {
    const digitsOnly = phone.replace(/[^\d]/g, '');
    return digitsOnly.length === 10;
  };

  // Handle phone number input with formatting
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  const validateForm = () => {
    if (!childname || !age || !parentname || !parentphone || !email || !program) {
      setMessage('Please fill in all fields.');
      return false;
    }
    
    if (!email.includes('@')) {
      setMessage('Please enter a valid email.');
      return false;
    }
    
    if (!validatePhoneNumber(parentphone)) {
      setMessage('Please enter a valid 10-digit phone number.');
      return false;
    }
    
    const ageNum = parseInt(age);
    if (ageNum < 6 || ageNum > 12) {
      setMessage('Child must be between 6 and 12 years old.');
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
        body: JSON.stringify({ 
          childname, 
          age, 
          parentname, 
          parentphone, 
          email, 
          program 
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('✅ Registration successful! Please check your email.');
        setName('');
        setAge('');
        setParentName('');
        setPhoneNumber('');
        setEmail('');
        setProgram('');
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
          Full Child Name:
          <input
            type="text"
            value={childname}
            onChange={(e) => setName(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            placeholder="Enter child's full name"
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
            placeholder="6-12 years old"
          />
        </label>

        <label>
          Parent's Full Name:
          <input
            type="text"
            value={parentname}
            onChange={(e) => setParentName(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            placeholder="Enter parent's full name"
          />
        </label>

        <label>
          Parent's Phone Number:
          <input
            type="tel"
            value={parentphone}
            onChange={handlePhoneChange}
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            placeholder="(555) 123-4567"
            maxLength={14} // Formatted phone number length
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            placeholder="Enter email address"
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