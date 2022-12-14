import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { parse } from 'date-fns';
import s from './index.module.css';

const today = new Date();

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z ]*$/g, 'Only alphabetic characters are allowed')
    .required(),
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
    .required()
    .min('1960-01-01', 'Date is too early')
    .max(today),
  breed: yup
    .string()
    .min(2)
    .max(30)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphanumeric characters are allowed')
    .required(),
});

export default function ModalPage1({ data, setFormDat, next, onClose }) {
  const [breedValue, setBreedValue] = useState(data.breed);

  const handleSubmit = values => {
    next({ ...values, breed: breedValue }, false);
  };

  const changeInputBreed = e => {
    const breed = e.target.value;
    if (/\d/g.test(breed)) return;
    if (breed) {
      setBreedValue(breed);
    }
  };
  return (
    <div className={s.containerPet}>
      <div className={s.title}>Add pet</div>
      <div className={s.formWrapper}>
        <Formik
          initialValues={data}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form autoComplete="on" className={s.formPageOne}>
            <label htmlFor="name" className={s.label}>
              Name Pet
            </label>
            <Field
              type="text"
              name="name"
              placeholder="Type name of pet"
              className={s.input}
            />
            <ErrorMessage
              name="name"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />

            <label htmlFor="birthday" className={s.label}>
              Date of birth
            </label>
            <Field
              name="birthday"
              placeholder="Type name of birthday"
              className={s.input}
              data-pattern="**.**.****"
            />
            <ErrorMessage
              name="birthday"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />

            <label htmlFor="breed" className={s.label}>
              Breed
            </label>
            <div style={{ position: 'relative' }}>
              <Field
                name="breed"
                placeholder="Type breed"
                className={s.input}
                value={breedValue}
                autoComplete="off"
                onInput={changeInputBreed}
              />
            </div>
            <ErrorMessage
              name="breed"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
            <div className={s.buttonsWrapper}>
              <button type="submit" className={s.buttonSubmit}>
                Next
              </button>
              <button
                type="button"
                className={s.buttonSimple}
                onClick={() => onClose()}
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
