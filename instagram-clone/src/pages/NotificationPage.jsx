import React from 'react';
import './NotificationPage.css'; // Make sure to add this CSS for styling

const NotificationPage = () => {
  return (
    <div className="notifications-container">
      {/* Header Section */}

      {/* Requests Section */}
      <div className="follow-requests">
        <h2>Follow Requests</h2>
        <div className="request-card">
          <div className="request-user-info">
            <img src="./assets/story2.jpg" alt="Jane Smith" className="request-user-avatar" />
            <span className="request-message">Jane Smith sent you a follow request</span>
          </div>
          <div className="request-actions">
            <button className="action-button approve">Approve</button>
            <button className="action-button reject">Reject</button>
          </div>
        </div>
        <div className="request-card">
          <div className="request-user-info">
            <img src="./assets/story2.jpg" alt="Jane Smith" className="request-user-avatar" />
            <span className="request-message">Jane Smith sent you a follow request</span>
          </div>
          <div className="request-actions">
            <button className="action-button approve">Approve</button>
            <button className="action-button reject">Reject</button>
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="user-notifications">
        <h2>Notifications</h2>
        <div className="notification-card">
          <div className="notification-user-info">
            <img src="./assets/story1.jpg" alt="New Follower" className="notification-user-avatar" />
            <span className="notification-message">You have a new follower request</span>
          </div>
        </div>
        <div className="notification-card">
          <div className="notification-user-info">
            <img src="./assets/story1.jpg" alt="New Follower" className="notification-user-avatar" />
            <span className="notification-message">You have a new follower request</span>
          </div>
        </div>
        <div className="notification-card">
          <div className="notification-user-info">
            <img src="./assets/story1.jpg" alt="New Follower" className="notification-user-avatar" />
            <span className="notification-message">You have a new follower request</span>
          </div>
        </div>
        <div className="notification-card">
          <div className="notification-user-info">
            <img src="./assets/story1.jpg" alt="New Follower" className="notification-user-avatar" />
            <span className="notification-message">You have a new follower request</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
