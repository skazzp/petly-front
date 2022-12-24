import React from 'react';
import { useDispatch } from 'react-redux';
import {
  BtnContainer,
  Input,
  Label,
  LabelBtn,
  LabelContainer,
  LabelIcon,
  LabelText,
} from './UpdateAvatar.styled';
import icons from '../../assets/images/icons.svg';
import { editAvatar } from 'redux/auth/authOperation';

const UpdateAvatar = ({ selectedImage, setSelectedImage }) => {
  const dispatch = useDispatch();
  return (
    <LabelContainer>
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
          // console.dir(event.target);
          // console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      {selectedImage && (
        <BtnContainer>
          {/* <img
            alt="new avatar"
            width={'200px'}
            src={URL.createObjectURL(selectedImage)}
          /> */}

          <LabelBtn
            type="button"
            onClick={() => {
              dispatch(editAvatar(selectedImage));
              URL.revokeObjectURL(selectedImage);
              setSelectedImage(null);
            }}
          >
            <LabelIcon>
              <use href={icons + '#icon-avatar-check'}></use>
            </LabelIcon>
          </LabelBtn>
          <LabelBtn
            onClick={() => {
              URL.revokeObjectURL(selectedImage);
              setSelectedImage(null);
            }}
          >
            <LabelIcon>
              <use href={icons + '#icon-avatar-close'}></use>
            </LabelIcon>
          </LabelBtn>
        </BtnContainer>
      )}
    </LabelContainer>
  );
};

export default UpdateAvatar;
