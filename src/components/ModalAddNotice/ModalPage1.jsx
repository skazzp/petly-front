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
} from './ModalAddNotice.styled';

const today = new Date();

const validationSchema = yup.object({
  titleOfAd: yup.string().min(2).max(48).required('Field is required!'),
  category: yup.string().required('Category is required!'),
  namePet: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  breed: yup
    .string()
    .min(2)
    .max(24)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  dateOfBirth: yup
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
    .required()
    .min('1960-01-01', 'Date is too early')
    .max(today),
});

const ModalPage1 = ({ formData, setFormData, nextStep, onClose }) => {
  const [breedValue, setBreedValue] = useState(formData.breed);

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
            <label htmlFor="lost/found">
              <RadioStyled
                type="radio"
                name="category"
                value="lost/found"
                id="lost/found"
              />
              <RadioBtn>lost/found</RadioBtn>
            </label>
            <label htmlFor="in_good_hands">
              <RadioStyled
                type="radio"
                name="category"
                value="in_good_hands"
                id="in_good_hands"
              />
              <RadioBtn>in_good_hands</RadioBtn>
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
            <ErrorMessage
              name="category"
              render={msg => <div style={{ color: 'red' }}>{msg}</div>}
            />
          </RadioWrapper>

          <FieldWrapper>
            <Label htmlFor="titleOfAd" type="text">
              Title of ad*:
            </Label>
            <InputStyled
              name="titleOfAd"
              id="titleOfAd"
              placeholder="Type title of ad"
            />
            <ErrorMessage
              name="titleOfAd"
              render={msg => <div style={{ color: 'red' }}>{msg}</div>}
            />
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="namePet" type="text">
              Name pet*:
            </Label>
            <InputStyled
              name="namePet"
              id="namePet"
              placeholder="Type name of pet"
            />
            <ErrorMessage
              name="namePet"
              render={msg => <div style={{ color: 'red' }}>{msg}</div>}
            />
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="dateOfBirth" type="text">
              Date of birth*:
            </Label>
            <InputStyled
              name="dateOfBirth"
              id="dateOfBirth"
              placeholder="Type date of birth"
              data-pattern="**.**.****"
            />
            <ErrorMessage
              name="dateOfBirth"
              render={msg => <div style={{ color: 'red' }}>{msg}</div>}
            />
          </FieldWrapper>

          <FieldWrapper>
            <Label htmlFor="breed" type="text">
              Breed*:
            </Label>
            <InputStyled
              name="breed"
              id="breed"
              placeholder="Type breed"
              value={breedValue}
              onInput={changeInputBreed}
            />
            <ErrorMessage
              name="breed"
              render={msg => <div style={{ color: 'red' }}>{msg}</div>}
            />
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
