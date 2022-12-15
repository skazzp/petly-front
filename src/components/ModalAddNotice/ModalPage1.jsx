import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { parse } from 'date-fns';
import s from './index.module.css';

const today = new Date();

const validationSchema = yup.object({
  titleOfAd: yup.string().min(2).max(48).required('Field is required!'),
  category: yup.string().required('Category is required!'),
  namePet: yup
    .string()
    .min(2)
    .max(20)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  breed: yup
    .string()
    .min(2)
    .max(36)
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
      <p className={s.text}>Write some information about your notice.</p>
      <Formik
        validationSchema={validationSchema}
        initialValues={formData}
        onSubmit={onSubmit}
      >
        <Form>
          <div
            role="group"
            aria-labelledby="my-radio-group"
            className={s.radioWrapper}
          >
            <label className={s.wrapperInput} htmlFor="lost/found">
              <Field
                className={s.inputRadio}
                type="radio"
                name="category"
                value="lost/found"
                id="lost/found"
              />
              <div className={s.radioBtn}>lost/found</div>
            </label>
            <label className={s.wrapperInput} htmlFor="in_good_hands">
              <Field
                className={s.inputRadio}
                type="radio"
                name="category"
                value="in_good_hands"
                id="in_good_hands"
              />
              <div className={s.radioBtn}>in_good_hands</div>
            </label>
            <label className={s.wrapperInput} htmlFor="sell">
              <Field
                className={s.inputRadio}
                type="radio"
                name="category"
                value="sell"
                id="sell"
              />
              <div className={s.radioBtn}>sell</div>
            </label>
            <ErrorMessage
              name="category"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
          </div>

          <div className={s.textFieldWrap}>
            <label htmlFor="titleOfAd" type="text" className={s.label}>
              Title of ad*:
            </label>
            <Field
              name="titleOfAd"
              id="titleOfAd"
              placeholder="Type title of ad"
              className={s.inputText}
            />
            <ErrorMessage
              name="titleOfAd"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
          </div>

          <div className={s.textFieldWrap}>
            <label htmlFor="namePet" type="text" className={s.label}>
              Name pet*:
            </label>
            <Field
              name="namePet"
              id="namePet"
              placeholder="Type name of pet"
              className={s.inputText}
            />
            <ErrorMessage
              name="namePet"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
          </div>

          <div className={s.textFieldWrap}>
            <label htmlFor="dateOfBirth" type="text" className={s.label}>
              Date of birth*:
            </label>
            <Field
              name="dateOfBirth"
              id="dateOfBirth"
              placeholder="Type date of birth"
              className={s.inputText}
              data-pattern="**.**.****"
            />
            <ErrorMessage
              name="dateOfBirth"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
          </div>

          <div className={s.textFieldWrap}>
            <label htmlFor="breed" type="text" className={s.label}>
              Breed*:
            </label>
            <Field
              name="breed"
              id="breed"
              placeholder="Type breed"
              className={s.inputText}
              value={breedValue}
              onInput={changeInputBreed}
            />
            <ErrorMessage
              name="breed"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
          </div>

          <div className={s.submitBtnWrapper}>
            <button type="submit" className={s.submitBtn}>
              Next
            </button>
            <button type="button" className={s.submitBtn} onClick={onClose}>
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ModalPage1;
