import React, { useState } from 'react';
import './Feed.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Feed = () => {
  const [likes, setLikes] = useState({});
  const [shares, setShares] = useState({});
  const [savedPosts, setSavedPosts] = useState({});

  // Dummy data for stories
  const stories = [
    { id: 1, image: '/assets/story1.jpg', username: 'khajuriashi...' },
    { id: 2, image: '/assets/story2.jpg', username: 'denilratho...' },
    { id: 3, image: '/assets/story3.jpg', username: 'wakeupfah...' },
    { id: 4, image: '/assets/story4.jpg', username: 'shritika_l...' },
    { id: 5, image: '/assets/story5.jpg', username: 'harshh_4532' },
    { id: 6, image: '/assets/story6.jpg', username: 'khapare_si...' },
    { id: 7, image: '/assets/story7.jpg', username: 'rajdudhara...' },
    { id: 8, image: '/assets/story8.jpg', username: 'jay_jogale05' },
  ];

  // Dummy data for posts (including videos and images)
  const posts = [
    { 
      id: 1, 
      username: 'harshdarji121', 
      image: '/assets/Screen Recording 2024-11-12 213839.mp4', 
      type: 'video', 
      caption: 'This is a sample caption for the post.' 
    },
    { id: 2, username: 'harshdarji121', image: '/assets/post.png', type: 'image',caption: 'Another post with the same image.' },
    { id: 3, username: 'harshdarji121', image: '/assets/post.png', type: 'image', caption: 'Here is a third post for variety.' },
  ];

  const handleLikeClick = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };

  const handleShareClick = (postId) => {
    setShares((prevShares) => ({
      ...prevShares,
      [postId]: (prevShares[postId] || 0) + 1,
    }));
  };

  const handleSaveClick = (postId) => {
    setSavedPosts((prevSavedPosts) => ({
      ...prevSavedPosts,
      [postId]: !prevSavedPosts[postId], // Toggle save state
    }));
  };

  return (
    <div className="content-feed">
      {/* Stories Section */}
      <div className="story-section">
        {stories.map((story) => (
          <div className="individual-story" key={story.id}>
            <img src={story.image} alt={story.username} className="story-image" />
            <span className="story-username">{story.username}</span>
          </div>
        ))}
      </div>

      {/* Posts Section */}
      {posts.map((post) => (
        <div className="individual-post" key={post.id}>
          <div className="post-header">
            <img src="/assets/profile.jpg" alt="Profile" className="user-profile-image" />
            <span className="post-username">{post.username}</span>
          </div>
          
          {/* Conditional rendering for Image or Video */}
          {post.type === 'video' ? (
            <video
              controls
              className="post-video"
              src={post.image}
              alt="Post"
            />
          ) : (
            <img src={post.image} alt="Post" className="post-image" />
          )}
          
          <div className="action-buttons">
            <i
              className="fas fa-thumbs-up action-icon"
              onClick={() => handleLikeClick(post.id)}
            >
              {likes[post.id] > 0 && ` ${likes[post.id]}`}
            </i>
            <i className="fas fa-comment action-icon"></i>
            <i
              className="fas fa-share action-icon"
              onClick={() => handleShareClick(post.id)}
            >
              {shares[post.id] > 0 && ` ${shares[post.id]}`}
            </i>
            <i
              className={`fas fa-bookmark action-icon ${savedPosts[post.id] ? 'bookmarked' : ''}`}
              onClick={() => handleSaveClick(post.id)}
            ></i>
          </div>
          <div className="post-caption">
            <span className="caption-author">{post.username}</span>: {post.caption}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
