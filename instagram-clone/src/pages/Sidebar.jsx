import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Sidebar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // State to toggle the mobile menu
  const [isCreateDropdownOpen, setCreateDropdownOpen] = useState(false); // State for create dropdown

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Function to toggle the create dropdown
  const toggleCreateDropdown = () => {
    setCreateDropdownOpen(!isCreateDropdownOpen);
  };

  return (
    <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
      {/* Hamburger Menu for Mobile View */}
      <div
        className="hamburger-menu"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Sidebar Links */}
      <div className="sidebar-links">
        {/* Sidebar Logo */}
        <h1 className="sidebar-logo">Instagram</h1>

        {/* Navigation Links */}
        <Link to="/home" className="sidebar-link">
          <i className="fas fa-home"></i> <span>Home</span>
        </Link>
        <Link to="/search" className="sidebar-link">
          <i className="fas fa-search"></i> <span>Search</span>
        </Link>
        <Link to="/explore" className="sidebar-link">
          <i className="fas fa-compass"></i> <span>Explore</span>
        </Link>
        <Link to="/reels" className="sidebar-link">
          <i className="fas fa-video"></i> <span>Reels</span>
        </Link>
        <Link to="/messages" className="sidebar-link">
          <i className="fas fa-envelope"></i> <span>Messages</span>
        </Link>
        <Link to="/notifications" className="sidebar-link">
          <i className="fas fa-bell"></i> <span>Notifications</span>
        </Link>

        {/* Create Dropdown */}
        <div className="sidebar-link create" onClick={toggleCreateDropdown}>
          <i className="fas fa-plus-circle"></i> <span>Create</span>
          <i className={`fas fa-chevron-down ${isCreateDropdownOpen ? 'rotate' : ''}`}></i>
        </div>

        {isCreateDropdownOpen && (
           <div className="create-options">
           <Link to="/create" className="create-option-button post-image">
             Post Image
           </Link>
           <Link to="/create" className="create-option-button post-reels">
             Post Reels
           </Link>
           <Link to="/create" className="create-option-button ai-character">
             AI Character
           </Link>
         </div>
        )}

        <Link to="/profile" className="sidebar-link">
          <i className="fas fa-user"></i> <span>Profile</span>
        </Link>
        <Link to="/more" className="sidebar-link">
          <i className="fas fa-ellipsis-h"></i> <span>More</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
