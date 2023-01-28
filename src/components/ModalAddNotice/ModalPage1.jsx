import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { parse } from 'date-fns';
import {
  FormStyled,
  RadioStyled,
  InputStyled,
  Text,
  RadioWrapper,
  RadioBtn,
  FieldWrapper,
  Label,
  SubmitBtnWrapper,
  SubmitBtn,
  ValidationFormik,
  InputDiv,
} from './ModalAddNotice.styled';

const today = new Date().toLocaleDateString();

const validationSchema = yup.object({
  category: yup.string().required('Category is required!'),
  title: yup.string().min(2).max(48).required('Field is required!'),
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Only alphabetic characters are allowed'
    )
    .required('Field is required!'),
  breed: yup
    .string()
    // .min(2)
    .max(16)
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Only alphabetic characters are allowed'
    )
    .required('Field is required!'),
  birthday: yup
    .date()
    .test('len', 'Must be exactly DD.MM.YYYY', (value, { originalValue }) => {
      if (originalValue) {
        return originalValue.length === 10;
      }
    })
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, 'dd.MM.yyyy', new Date());
      return result;
    })
    .typeError('Please enter a valid date')
    .required('Field is required!')
    .min('1960-01-01', 'Date is too early')
    .max(today),
});

const ModalPage1 = ({ formData, setFormData, nextStep, onClose }) => {
  const [breedValue, setBreedValue] = useState();
  //formData.breed
  const changeInputBreed = e => {
    const breed = e.target.value;
    if (/\d/g.test(breed)) return;
    if (breed) {
      setBreedValue(breed);
    }
  };

  const onSubmit = values => {
    setFormData({ ...values, breed: breedValue });
    nextStep();
  };

  return (
    <div>
      <Text>Write some information about your notice.</Text>
      <Formik
        validationSchema={validationSchema}
        initialValues={formData}
        onSubmit={onSubmit}
      >
        <FormStyled>
          <RadioWrapper role="group" aria-labelledby="my-radio-group">
            <label htmlFor="lost-found">
              <RadioStyled
                type="radio"
                name="category"
                value="lost-found"
                id="lost-found"
              />
              <RadioBtn>lost/found</RadioBtn>
            </label>
            <label htmlFor="for-free">
              <RadioStyled
                type="radio"
                name="category"
                value="for-free"
                id="for-free"
              />
              <RadioBtn>in good hands</RadioBtn>
            </label>
            <label htmlFor="sell">
              <RadioStyled
                type="radio"
                name="category"
                value="sell"
                id="sell"
              />
              <RadioBtn>sell</RadioBtn>
            </label>
            <InputDiv><ErrorMessage
              name="category"
              render={msg => <ValidationFormik style={{ color: 'red' }}>{msg}</ValidationFormik>}
            /></InputDiv>
            
          </RadioWrapper>

          <FieldWrapper>
            <Label htmlFor="title" type="text">
              Title of ad<span style={{ color: '#F59256' }}>*</span>
            </Label>
            <InputDiv><InputStyled name="title" id="title" placeholder="Type name" />
            <ErrorMessage
              name="title"
              render={msg => <ValidationFormik>{msg}</ValidationFormik>}
            /></InputDiv>
            
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="name" type="text">
              Name pet
            </Label>
            <InputDiv><InputStyled name="name" id="name" placeholder="Type name pet" />
            <ErrorMessage
              name="name"
              render={msg => <ValidationFormik>{msg}</ValidationFormik>}
            /></InputDiv>
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="birthday" type="text">
              Date of birth
            </Label>
            <InputDiv><InputStyled
              name="birthday"
              id="birthday"
              type="date"
              placeholder="Type date of birth"
              data-pattern="**.**.****"
            />
            <ErrorMessage
              name="birthday"
              render={msg => <ValidationFormik style={{ color: 'red' }}>{msg}</ValidationFormik>}
            /></InputDiv>
            
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="breed" type="text">
              Breed
            </Label>
            <InputDiv><InputStyled
              name="breed"
              id="breed"
              placeholder="Type breed"
              // value={breedValue}
              defaultValue={breedValue}
              onInput={changeInputBreed}
            />
            <ErrorMessage
              name="breed"
              render={msg => <ValidationFormik>{msg}</ValidationFormik>}
            /></InputDiv>
          </FieldWrapper>

          <SubmitBtnWrapper>
            <SubmitBtn type="submit">Next</SubmitBtn>
            <SubmitBtn type="button" onClick={onClose}>
              Cancel
            </SubmitBtn>
          </SubmitBtnWrapper>
        </FormStyled>
      </Formik>
    </div>
  );
};

export default ModalPage1;
