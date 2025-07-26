'use client';

import { useState } from 'react';

export default function ChatWidget() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, `🧑‍💻: ${input}`, `🤖: Thanks for your question! We'll get back to you soon.`]);
    setInput('');
  };

  return (
    <div style={{ color: 'white' }}>
      <div style={{
        height: '200px',
        overflowY: 'auto',
        backgroundColor: '#1a1a1a',
        padding: '1rem',
        borderRadius: '0.5rem',
        marginBottom: '1rem'
      }}>
        {messages.map((msg, idx) => <p key={idx}>{msg}</p>)}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your question here..."
        style={{
          padding: '0.5rem',
          width: '100%',
          marginBottom: '0.5rem',
          borderRadius: '0.25rem',
          border: '1px solid #f37c22'
        }}
      />
      <button onClick={sendMessage} style={{
        backgroundColor: '#f37c22',
        color: 'black',
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        border: 'none',
        cursor: 'pointer'
      }}>
        Send
      </button>
    </div>
  );
}
