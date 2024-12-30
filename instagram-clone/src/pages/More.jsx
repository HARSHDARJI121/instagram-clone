import React from 'react';

function More() {
  return (
    <div className="video-container">
      <video width="600" controls>
        {/* Option 1: Local video file */}
        <source src="/assets/Screen Recording 2024-11-12 213839.mp4" type="video/mp4" />
        
        {/* Option 2: Video URL */}
        {/* <source src="https://path-to-your-video.mp4" type="video/mp4" /> */}
        
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default More;
