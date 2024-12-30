import React from 'react';

const Post = ({ user, image, caption }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={user.avatar} alt={user.name} className="avatar" />
        <span>{user.name}</span>
      </div>
      <img src={image} alt="Post" className="post-image" />
      <div className="post-footer">
        <img src="/assets/like.svg" alt="Like" />
        <img src="/assets/comment.svg" alt="Comment" />
        <img src="/assets/share.svg" alt="Share" />
      </div>
      <div className="caption">
        <strong>{user.name}</strong> {caption}
      </div>
    </div>
  );
};

export default Post;
