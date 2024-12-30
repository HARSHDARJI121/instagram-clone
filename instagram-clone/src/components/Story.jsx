import React from 'react';

const Story = ({ user, image }) => {
  return (
    <div className="story">
      <img src={user.avatar} alt="Story Avatar" className="story-avatar" />
      <img src={image} alt="Story" className="story-image" />
    </div>
  );
};

export default Story;
