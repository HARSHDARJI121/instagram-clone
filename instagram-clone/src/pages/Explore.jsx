import React from 'react';
import './Explore.css';

const Explore = () => {
  // Default video and thumbnail URLs
  const defaultVideoUrl = '/assets/Screen Recording 2024-11-12 213839.mp4'; // Replace with your actual default video URL
  const defaultThumbnail = 'https://www.example.com/default-thumbnail.jpg'; // Replace with your actual default thumbnail URL

  // Sample array of videos for demonstration
  const reelsData = new Array(30).fill(null).map((_, index) => ({
    id: index + 1,
    videoUrl: `/assets/Screen Recording 2024-11-12 213839.mp4`, // This URL can be missing or broken
    thumbnail: `https://www.example.com/thumbnail${index + 1}.jpg`, // This URL can also be missing or broken
  }));

  return (
    <div className="explore-page">
      <h2 className="explore-title">Explore</h2>
      <div className="explore-grid">
        {reelsData.map((reel) => (
          <div key={reel.id} className="explore-item">
            {/* Video component with fallback */}
            <video
              controls
              className="explore-video"
              src={reel.videoUrl || defaultVideoUrl} // Default to a placeholder video if URL is missing or broken
              alt={`Reel ${reel.id}`}
            />
            {/* Thumbnail with fallback */}
            <img
              src={reel.thumbnail || defaultThumbnail} // Default to a placeholder thumbnail if URL is missing or broken
              alt={`Thumbnail ${reel.id}`}
              className="explore-thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
