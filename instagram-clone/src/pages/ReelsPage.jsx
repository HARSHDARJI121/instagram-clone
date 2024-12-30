import React from 'react';
import './ReelsPage.css';

const ReelsPage = () => {
  // Sample array of videos for demonstration
  const reelsData = new Array(30).fill(null).map((_, index) => ({
    id: index + 1,
    videoUrl: `/assets/Screen Recording 2024-11-12 213839.mp4`,
    thumbnail: `https://www.example.com/thumbnail${index + 1}.jpg`, // Example thumbnail URL
  }));

  return (
    <div className="reels-page">
      <h2>Reels</h2>
      <div className="reels-grid">
        {reelsData.map((reel) => (
          <div key={reel.id} className="reel-item">
            <video
              controls
              width="100%"
              height="auto"
              src={reel.videoUrl}
              alt={`Reel ${reel.id}`}
            />
            <img
              src={reel.thumbnail}
              alt={`Thumbnail ${reel.id}`}
              className="reel-thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelsPage;
