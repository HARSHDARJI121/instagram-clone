import React, { useState } from 'react';
import './CreatePage.css';


const CreatePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPosted, setIsPosted] = useState(false);

  // Handle file selection and preview
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Simulate posting the image
  const handlePostImage = () => {
    // You can integrate an actual API call here for image uploading
    setIsPosted(true);
  };

  return (
    <div className="create-page">
      <div className="upload-box">
        {!isPosted ? (
          <>
            <h2>Post Image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ marginBottom: '20px' }}
            />
            {selectedImage && (
              <div className="image-preview">
                <img src={selectedImage} alt="Preview" style={{ width: '200px' }} />
              </div>
            )}
            {selectedImage && (
              <button className="next-button" onClick={handlePostImage}>
                Next
              </button>
            )}
          </>
        ) : (
          <div className="confirmation-message">
            <h3>Image Posted Successfully!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePage;
