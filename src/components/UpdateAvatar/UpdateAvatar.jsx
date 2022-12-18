import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Label, LabelIcon, LabelText } from './UpdateAvatar.styled';
import icons from '../../assets/images/icons.svg';

const UpdateAvatar = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  return (
    <div>
      <Label htmlFor="avatar">
        <LabelIcon>
          <use href={icons + '#edit-button-desk'}></use>
        </LabelIcon>
        <LabelText>Edit photo</LabelText>
      </Label>
      <Input
        type="file"
        name="avatar"
        id="avatar"
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
