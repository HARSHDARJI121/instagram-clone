import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar component
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts'); // State to manage active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Profile Content */}
      <div className="profile-content">
        {/* Profile Header */}
        <header className="profile-header">
          <div className="profile-picture">
            <img
              src="assets/profile.jpg"
              alt="Profile"
              className="profile-img"
            />
          </div>
          <div className="profile-info">
            <div className="profile-name">
              <h1>harshdarji121</h1>
              <button className="btn-edit">Edit profile</button>
              <button className="btn-archive">View archive</button>
              <i className="fas fa-cog settings-icon"></i>
            </div>
            <div className="profile-stats">
              <span>
                <strong>26</strong> posts
              </span>
              <span>
                <strong>891</strong> followers
              </span>
              <span>
                <strong>420</strong> following
              </span>
            </div>
            <div className="profile-bio">
              <p>
                <strong>Harsh_HD</strong>
              </p>
              <p>♋ Cancer</p>
              <p>🎂 Be positive. ✌️</p>
              <p>😊 Stay happy</p>
              <p>🤓 WANT TO BECOME A FULL STACK DEVELOPER</p>
            </div>
          </div>
        </header>

        {/* Highlights */}
        <section className="highlights">
          <div className="highlight">
            <img src="assets/story1.jpg" alt="Highlight" />
            <span>Highlights</span>
          </div>
          <div className="highlight">
            <img src="assets/story1.jpg" alt="Highlight" />
            <span>2023</span>
          </div>
          <div className="highlight">
            <img src="assets/story1.jpg" alt="Highlight" />
            <span>Highlights</span>
          </div>
          <div className="highlight">
            <div className="add-highlight">+</div>
            <span>New</span>
          </div>
        </section>

        {/* Tabs */}
        <nav className="tabs">
          <a
            href="#"
            className={`tab ${activeTab === 'posts' ? 'active' : ''}`}
            onClick={() => handleTabClick('posts')}
          >
            <i className="fas fa-th"></i> POSTS
          </a>
          <a
            href="#"
            className={`tab ${activeTab === 'reels' ? 'active' : ''}`}
            onClick={() => handleTabClick('reels')}
          >
            <i className="fas fa-play-circle"></i> REELS
          </a>
          <a
            href="#"
            className={`tab ${activeTab === 'saved' ? 'active' : ''}`}
            onClick={() => handleTabClick('saved')}
          >
            <i className="fas fa-bookmark"></i> SAVED
          </a>
          <a
            href="#"
            className={`tab ${activeTab === 'tagged' ? 'active' : ''}`}
            onClick={() => handleTabClick('tagged')}
          >
            <i className="fas fa-user-tag"></i> TAGGED
          </a>
        </nav>

        {/* Sliding Content */}
        <section className="sliding-content">
          <div
            className="sliding-panel"
            style={{
              transform: `translateX(${
                activeTab === 'posts'
                  ? '0%'
                  : activeTab === 'reels'
                  ? '-100%'
                  : activeTab === 'saved'
                  ? '-200%'
                  : '-300%'
              })`,
            }}
          >
            {/* Posts */}
            <div className="tab-content posts">
              <div className="post">
                <img src="images/post1.jpg" alt="Post" />
              </div>
              <div className="post">
                <img src="images/post2.jpg" alt="Post" />
              </div>
              <div className="post">
                <img src="images/post3.jpg" alt="Post" />
              </div>
            </div>

            {/* Reels */}
            <div className="tab-content reels">
              <h2>Reels Section</h2>
              <div className="reel">Reel 1</div>
              <div className="reel">Reel 2</div>
              <div className="reel">Reel 3</div>
            </div>

            {/* Saved */}
            <div className="tab-content saved">
              <h2>Saved Section</h2>
              <div className="saved-item">Saved Item 1</div>
              <div className="saved-item">Saved Item 2</div>
            </div>

            {/* Tagged */}
            <div className="tab-content tagged">
              <h2>Tagged Section</h2>
              <div className="tagged-item">Tagged Item 1</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
