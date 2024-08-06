import React, { useState } from 'react';
import './chat.css'; // Make sure to import your CSS file

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type="submit" value="Send" />
        </form>

        <div className="messages">
          <h3>Messages:</h3>
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
