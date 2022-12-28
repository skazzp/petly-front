import React from 'react';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import {
  BtnContainer,
  Input,
  Label,
  LabelBtn,
  LabelContainer,
  LabelIcon,
  LabelText,
  ErrorText,
} from './UpdateAvatar.styled';
import icons from '../../assets/images/icons.svg';
import { editAvatar } from 'redux/auth/authOperation';
import {MAX_FILE_SIZE} from '../../utility/constants'

const UpdateAvatar = ({ selectedImage, setSelectedImage }) => {
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOnChange = event => {
   
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
    

      if (!file) {
        setErrorMsg('Please choose a file');
        setIsSuccess(false);
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        setErrorMsg('File size is greater than maximum limit');
        setIsSuccess(false);
        return;
      }

      setErrorMsg('');
      setIsSuccess(true);
    }
  };
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
        accept="image/png, image/gif, image/jpeg"
        onChange={event => {
          setSelectedImage(event.target.files[0]); handleOnChange(event)
        }}
      />
      {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
      {selectedImage && (
        <BtnContainer>
          {/* <img
            alt="new avatar"
            width={'200px'}
            src={URL.createObjectURL(selectedImage)}
          /> */}

          <LabelBtn
          disabled={
            !isSuccess }
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
