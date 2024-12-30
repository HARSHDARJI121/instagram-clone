// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing pages/components
import Login from './pages/Login'; // Login page
import Signup from './pages/Signup'; // Signup page
import Home from './pages/Home'; // Home page
import Feed from './pages/Feed'; // Feed page
import Profile from './pages/Profile'; // Profile page
import Search from './pages/Search'; // Search page
import Sidebar from './pages/Sidebar'; // Sidebar component for navigation
import MessagesPanel from './pages/MessagesPanel';
import Explore from './pages/explore';

import './App.css'; // Global styles for the app
import NotificationPage from './pages/NotificationPage';
import CreatePage from './pages/CreatePage';
import ReelsPage from './pages/ReelsPage';
import More from './pages/More';


const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Sidebar visible on all pages except Login and Signup */}
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Sidebar />
                <div className="main-content">
                  <Routes>
                    {/* Route for Login */}
                    <Route path="/" element={<Login />} />

                    {/* Route for Signup */}
                    <Route path="/signup" element={<Signup />} />

                    {/* Route for Home */}
                    <Route path="/home" element={<Home />} />

                    {/* Route for Feed */}
                    <Route path="/feed" element={<Feed />} />

                    {/* Route for Profile */}
                    <Route path="/profile" element={<Profile />} />

                    {/* Route for Search */}
                    <Route path="/search" element={<Search />} />

                    <Route path="/messages" element={<MessagesPanel />} />

                    <Route path="/notifications" element={<NotificationPage />} />

                    <Route path="/create" element={<CreatePage />} />

                    <Route path="/reels" element={<ReelsPage />} />

                    <Route path="/explore" element={<Explore />} />

                    <Route path="/More" element={<More />} />




                  </Routes>
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
