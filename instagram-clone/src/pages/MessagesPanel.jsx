import React from 'react';
import './MessagesPanel.css';

const MessagesPanel = () => {
  const messages = [
    { id: 1, name: 'Harsh HD', lastMessage: 'You: hi', time: '1m' },
    { id: 2, name: 'Khushiiii', lastMessage: 'Liked a message', time: '2h' },
    { id: 3, name: 'Brian Koli', lastMessage: 'Reacted 😂', time: '9h' },
    { id: 4, name: 'Sangeeta', lastMessage: 'You sent an attachment', time: '10h' },
    { id: 5, name: 'Jayesh', lastMessage: 'You sent an attachment', time: '10h' },
  ];

  return (
    <div className="new-messages-panel">
      <h3>Messages</h3>
      <div className="new-messages-list">
        {messages.map((message) => (
          <div key={message.id} className="new-message-item">
            <div className="new-message-avatar">
              <img src="/assets/profile.jpg" alt={message.name} />
            </div>
            <div className="new-message-details">
              <span className="new-message-name">{message.name}</span>
              <span className="new-message-last">{message.lastMessage}</span>
            </div>
            <div className="new-message-time">{message.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesPanel;
