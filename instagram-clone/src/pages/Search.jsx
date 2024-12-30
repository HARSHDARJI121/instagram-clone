// src/pages/Search.jsx

import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-page">
      <h1 className="search-header">Search</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for posts, people, or hashtags..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default Search;
