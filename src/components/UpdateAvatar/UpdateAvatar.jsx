import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const UpdateAvatar = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  return (
    <div>
      <label htmlFor="avatar">FILE</label>
      <input
        type="file"
        name="avatar"
        id="avatar"
        // disabled={true}
        onChange={event => {
          console.dir(event.target);
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      {selectedImage && (
        <div>
          <img
            alt="new avatar"
            width={'200px'}
            src={URL.createObjectURL(selectedImage)}
          />

          <button onClick={() => setSelectedImage(null)}>Remove</button>
          <button type="button" onClick={() => dispatch()}>
            Upload
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdateAvatar;
