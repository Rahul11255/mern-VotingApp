import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Check local storage for an uploaded image on component mount
  useEffect(() => {
    const uploadedImage = localStorage.getItem(`uploadedImage${id}`);
    if (uploadedImage) {
      setSelectedImage(uploadedImage);
    }
  }, []); // Empty dependency array to run the effect only once on mount

  const id = 23123

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        // Save image to local storage
        localStorage.setItem(`uploadedImage${id}`, reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  const handleClearImage = () => {
    setSelectedImage(null);
    // Remove image from local storage
    localStorage.removeItem('uploadedImage123');
  };

  return (
    <div>
      <input
        accept="image/*"
        type="file"
        style={{ display: 'none' }}
        id="contained-button-file"
        onChange={handleImageChange}
      />
      <label htmlFor="contained-button-file">
        <IconButton component="span">
          <EditIcon />
        </IconButton>
      </label>
      {selectedImage && (
        <div>
          <img src={selectedImage} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '300px' }} />
          <IconButton onClick={handleClearImage}>
            <DeleteIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
