'use client';

import { useState } from 'react';

export default function ChatWidget() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = `🧑‍💻: ${input}`;
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/gpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = `🤖: ${data.reply}`;
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, `🤖: Sorry, something went wrong.`]);
    }

    setInput('');
    setIsLoading(false);
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
      <button 
        onClick={sendMessage} 
        disabled={isLoading}
        style={{
          backgroundColor: '#f37c22',
          color: 'black',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
          border: 'none',
          cursor: isLoading ? 'default' : 'pointer'
        }}
      >
        {isLoading ? 'Thinking...' : 'Send'}
      </button>
    </div>
  );
}
