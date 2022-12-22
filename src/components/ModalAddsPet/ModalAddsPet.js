import React, { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch} from 'react-redux';
import * as yup from 'yup';
import { addUserPet } from 'redux/pets/petsOperations';

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
      formData.append("image", file );
      setImage(file);
      fileReader.readAsDataURL(file);
      // console.log(file, image, imageURL);
    }
  };

  // const handleDrop = event => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   if (event.dataTransfer.files && event.dataTransfer.files.length) {
  //     setImage(event.dataTransfer.files[0]);
  //     fileReader.readAsDataURL(event.dataTransfer.files[0]);
  //   }
  //   console.log( image, imageURL);
  // };

  const handleDragEmpty = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleCancle = () => {
    onClose();
    setFirstPage(true);
  };
  // const handleChangePhoto = event => {
  //   const fileUploaded = event.target.files[0];
  //   const file = new FormData();
  //   file.append('image', fileUploaded);
  //   console.log(fileUploaded)
  //   setImageURL(file);
  // };
  const validationsShema = yup.object().shape({
    name: yup
      .string()
      .typeError('String')
      .required('Name is required!')
      .matches(
        /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
        'Minimum 2 letters required'
      )
      .min(2, 'Minimum 2 letters required')
      .max(16, 'Maximum 16 letters required'),
    dateOfBirth: yup
      .date()
      .required(' Date of Birth is required (example: 22.10.2022'),
    breed: yup
      .string()
      .required('Breed is required, even if the pet is purebred')
      .matches(
        /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
        'Minimum 2 letters required'
      )
      .min(2, 'Minimum 2 letters required')
      .max(16, 'Maximum 16 letters required'),
    comments: yup
      .string()
      .required('Comments are required')
      .min(8, 'Minimum 8 letters required')
      .max(120, 'Maximum 120 letters required'),
  });

  return (
    <Modal onClick={onBackdropClick}>
      <Card>
        <Title>Add pet</Title>
        <ButtonExit onClick={() => handleCancle()} type="button">
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
          onSubmit={async(values) => {
            console.log(values);
            const form ={
              name: values.name,
              birthday: values.dateOfBirth,
              breed: values.breed,
               image,
              comments: values.comments,
            }
            console.log(form);
            await dispatch(addUserPet(form))
        
            handleCancle();
            setImageURL()
          }}
          validationSchema={validationsShema}
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
                      //  disabled={!isValid.name || !isValid.dateOfBirth || !isValid.breed}
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
                    ):
                      <IconPlus>
                        <use href={`${sprite}#plusImg`}></use>
                      </IconPlus>}
                    </LabelImage>
                    <InputImage
                      type="file"
                      name={`image`}
                      defaultValue={values.image}
                      //  onChange={handleChangePhoto}
                      accept="image/png, image/gif, image/jpeg"
                      onChange={e => {
                        handleChange(e);
                        handleOnChange(e);
                      }}
                    />
                    {/* {imageURL && (
                      <Img
                        src={imageURL ? imageURL : null}
                        alt="pet image"
                        onDrop={handleDrop}
                        onDragEnter={handleDragEmpty}
                        onDragOver={handleDragEmpty}
                      />
                    )} */}
                    {/* <div>{image ? image.name : ''}</div> */}
                  </AddList>
                  <Line>
                    <Label htmlFor="comments">Comments</Label>
                    <br />
                    <Comments
                      maxlength="120"
                      minlength="8"
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
                      disabled={!isValid || !dirty}
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
