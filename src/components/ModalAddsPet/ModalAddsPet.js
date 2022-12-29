import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { MAX_FILE_SIZE } from '../../utility/constants';
import { addUserPet } from 'redux/pets/petsOperations';
import { validationsSchema } from '../../utility/validationSchemaUserPet';
import sprite from '../../assets/images/icons.svg';
import {
  ButtonExit,
  Line,
  ErrorText,
  CardList,
  AddList,
  LabelImage,
  InputImage,
  TitleP,
  Comments,
  ButtonA,
  ButtonB,
  Icon,
  ButtonSet,
  Img,
  Card,
  Modal,
  Title,
  Label,
  Input,
  IconPlus,
} from './ModalAddsPet.styled';

const ModalAddsPet = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const [firstPage, setFirstPage] = useState(true);
  const [errorMsg, setErrorMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // const MAX_FILE_SIZE = 4194304; // 4MB

  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        handleCancel();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });

  if (!open) return null;

  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };

  const handleOnChange = event => {
    event.preventDefault();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('image', file);
      setImage(file);
      fileReader.readAsDataURL(file);

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

  const handleDragEmpty = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      handleCancel();
    }
  };

  const handleCancel = () => {
    onClose();
    setFirstPage(true);
    setImage();
    setImageURL();
  };

  return (
    <Modal onClick={onBackdropClick}>
      <Card>
        <Title>Add pet</Title>
        <ButtonExit onClick={() => handleCancel()} type="button">
          <Icon>
            <use href={`${sprite}#icon-close`}></use>
          </Icon>
        </ButtonExit>

        <Formik
          initialValues={{
            name: '',
            dateOfBirth: '',
            breed: '',
            image: '',
            comments: '',
          }}
          validateOnBlur
          onSubmit={async values => {
            handleCancel();
            const form = {
              name: values.name,
              birthday: values.dateOfBirth,
              breed: values.breed,
              image,
              comments: values.comments,
            };

            await dispatch(addUserPet(form));

            // handleCancle();
          }}
          validationSchema={validationsSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            dirty,
          }) => (
            <div>
              {firstPage ? (
                <>
                  <Line>
                    <Label htmlFor="name">Name pet</Label>
                    <br />
                    <Input
                      type={'text'}
                      name={`name`}
                      defaultValue={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={`Type name pet`}
                    />
                    {touched.name && errors.name && (
                      <ErrorText>{errors.name}</ErrorText>
                    )}
                  </Line>
                  <Line>
                    <Label htmlFor="dateOfBirth">Date of birth</Label>
                    <br />
                    <Input
                      type={'date'}
                      name={`dateOfBirth`}
                      defaultValue={values.dateOfBirth}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={`Type date of birth`}
                    />
                    {touched.dateOfBirth && errors.dateOfBirth && (
                      <ErrorText>{errors.dateOfBirth}</ErrorText>
                    )}
                  </Line>

                  <Line>
                    <Label htmlFor="breed">Breed</Label>
                    <br />
                    <Input
                      type={'text'}
                      name={`breed`}
                      defaultValue={values.breed}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={`Type breed pet`}
                    />
                    {touched.breed && errors.breed && (
                      <ErrorText>{errors.breed}</ErrorText>
                    )}
                  </Line>
                  <ButtonSet>
                    <ButtonA
                      disabled={
                        !values.breed ||
                        !values.name ||
                        !values.dateOfBirth ||
                        errors.breed ||
                        errors.dateOfBirth ||
                        errors.name
                      }
                      onClick={() => setFirstPage(false)}
                      type="button"
                    >
                      Next
                    </ButtonA>
                    <ButtonB onClick={onClose} type="button">
                      Cancel
                    </ButtonB>
                  </ButtonSet>
                </>
              ) : (
                <CardList>
                  <AddList>
                    <TitleP>Add photo and some comments</TitleP>
                    <LabelImage>
                      {imageURL ? (
                        <Img
                          src={imageURL}
                          alt="pet image"
                          // onDrop={handleDrop}
                          onDragEnter={handleDragEmpty}
                          onDragOver={handleDragEmpty}
                        />
                      ) : (
                        <IconPlus>
                          <use href={`${sprite}#plusImg`}></use>
                        </IconPlus>
                      )}
                    </LabelImage>
                    <InputImage
                      type="file"
                      name={`image`}
                      defaultValue={values.image}
                      accept="image/png, image/gif, image/jpeg"
                      multiple={true}
                      onChange={e => {
                        handleChange(e);
                        handleOnChange(e);
                      }}
                      onBlur={handleBlur}
                    />
                    {errors.image && <ErrorText>{errors.image}</ErrorText>}
                    {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
                  </AddList>
                  <Line>
                    <Label htmlFor="comments">Comments</Label>
                    <br />
                    <Comments
                      type={'text'}
                      name={`comments`}
                      defaultValue={values.comments}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={`Type comments`}
                    />

                    {touched.comments && errors.comments && (
                      <ErrorText>{errors.comments}</ErrorText>
                    )}
                  </Line>
                  <ButtonSet>
                    <ButtonA
                      disabled={
                        !isSuccess ||
                        !values.comments ||
                        !values.image ||
                        !isValid ||
                        !dirty
                      }
                      onClick={handleSubmit}
                      type="submit"
                    >
                      Done
                    </ButtonA>
                    <ButtonB onClick={() => setFirstPage(true)} type="button">
                      Back
                    </ButtonB>
                  </ButtonSet>
                </CardList>
              )}
            </div>
          )}
        </Formik>
      </Card>
    </Modal>
  );
};

export default ModalAddsPet;
