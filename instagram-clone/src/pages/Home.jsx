import React from 'react';
import Sidebar from './Sidebar';
import Header from '../components/Header';  // Navbar/Header component
import Feed from '../pages/Feed';  // Main Feed (Posts)
import './Home.css';  // Main CSS for layout and design

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home-content">
        {/* Sidebar on the left */}
        <Sidebar/>

        {/* Main Feed in the center */}
        <Feed />

        {/* Right sidebar for suggestions */}
        <div className="right-sidebar">
          <h3>Suggestions</h3>
          <div className="suggestions-list">
            {/* Render user suggestions here */}
            <div className="suggestion-item">
              <img src="/assets/profile.jpg" alt="Profile" className="suggestion-img" />
              <div className="suggestion-info">
                <span className="suggestion-name">Saurab Phadtare</span>
                <button className="suggestion-button">Follow</button>
              </div>
            </div>

            <div className="suggestion-item">
              <img src="/assets/profile.jpg" alt="Profile" className="suggestion-img" />
              <div className="suggestion-info">
                <span className="suggestion-name">Anil Kumar</span>
                <button className="suggestion-button">Follow</button>
              </div>
            </div>

            <div className="suggestion-item">
              <img src="/assets/profile.jpg" alt="Profile" className="suggestion-img" />
              <div className="suggestion-info">
                <span className="suggestion-name">Priya Singh</span>
                <button className="suggestion-button">Follow</button>
              </div>
            </div>

            <div className="suggestion-item">
              <img src="/assets/profile.jpg" alt="Profile" className="suggestion-img" />
              <div className="suggestion-info">
                <span className="suggestion-name">Ravi Verma</span>
                <button className="suggestion-button">Follow</button>
              </div>
            </div>

            <div className="suggestion-item">
              <img src="/assets/profile.jpg" alt="Profile" className="suggestion-img" />
              <div className="suggestion-info">
                <span className="suggestion-name">Neha Patel</span>
                <button className="suggestion-button">Follow</button>
              </div>
            </div>

            <div className="suggestion-item">
              <img src="/assets/profile.jpg" alt="Profile" className="suggestion-img" />
              <div className="suggestion-info">
                <span className="suggestion-name">Amit Sharma</span>
                <button className="suggestion-button">Follow</button>
              </div>
            </div>

            {/* Add more suggestion items as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
