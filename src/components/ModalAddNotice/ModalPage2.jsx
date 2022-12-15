import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import icons from '../../assets/images/icons.svg';
import { selectToken } from '../../redux/auth/authSelectors';
import { createNotice } from '../../redux/notice/noticeOperations';
import s from './index.module.css';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const validationSchema = yup.object({
  sex: yup.string().required('Field is required!'),
  location: yup
    .string()
    .min(2)
    .max(48)
    .matches(/\D/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  price: yup
    .string()
    .min(2)
    .max(10)
    .matches(/^[1-9]+[0-9]*\$$/g, 'Only number characters and $ are allowed')
    .required('Field is required!'),
  image: yup
    .mixed()
    .required('Image is required! (jpg, jpeg, png)')
    .test(
      'fileFormat',
      'Unsupported file type',
      value =>
        value === null || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
  comments: yup
    .string()
    .min(4)
    .max(200)
    .matches(/^\D*$/g, 'Only alphabetic characters and symbols are allowed')
    .required('Field is required!'),
});

const ModalPage2 = ({ formData, setFormData, prevStep, onClose }) => {
  const [direction, setDirection] = useState('back');
  const [fileInput, setFileInput] = useState(formData.image);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  const selectFile = (e, setFieldValue) => {
    const [file] = e.target.files;
    if (file) {
      setFileInput(file);
      setFieldValue('image', file);
      setFormData(values => ({ ...values, image: file }));
    }
  };

  const onSubmit = values => {
    setFormData({
      ...values,
      image: fileInput,
      price: values.category !== 'sell' ? '1$' : values.price,
    });
    if (direction === 'back') {
      prevStep();
    }
    if (direction === 'forward') {
      dispatch(createNotice({ values, token })).unwrap();
      navigate('/notices/own');
      onClose();
    }
  };

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={formData}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form className={s.textFieldWrap}>
            <fieldset className={s.sexWrapper}>
              <legend className={s.sexM}>The sex*:</legend>
              <label className={s.sexLabel} htmlFor="male">
                <Field
                  className={s.inputSex}
                  type="radio"
                  id="male"
                  name="sex"
                  alt="male"
                  value="male"
                />
                <span className={s.sexIcon}></span>
                <span className={s.sexText}>Male</span>
              </label>

              <label className={s.sexLabel} htmlFor="female">
                <Field
                  className={s.inputSex}
                  type="radio"
                  id="female"
                  name="sex"
                  alt="female"
                  value="female"
                />
                <span className={s.sexIconFemale}></span>
                <span className={s.sexText}>Female</span>
              </label>
            </fieldset>
            <ErrorMessage
              name="sex"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />

            <div className={s.textFieldWrap}>
              <label htmlFor="location" type="text" className={s.label}>
                Location*:
              </label>
              <Field
                name="location"
                id="location"
                placeholder="Type location"
                className={s.inputText}
              />
              <ErrorMessage
                name="location"
                render={msg => <div className={s.errorMsg}>{msg}</div>}
              />
            </div>

            {formData.category === 'sell' && (
              <div className={s.textFieldWrap}>
                <label htmlFor="price" type="text" className={s.label}>
                  Price*:
                </label>
                <Field
                  name="price"
                  id="price"
                  placeholder="Type price"
                  className={s.inputText}
                />
                <ErrorMessage
                  name="price"
                  render={msg => <div className={s.errorMsg}>{msg}</div>}
                />
              </div>
            )}

            <label htmlFor="image" className={s.avatarLabel}>
              Load the pet's image*:
            </label>
            <div className={s.addImage}>
              {fileInput ? (
                <img
                  id="image"
                  className={s.selectedAvatar}
                  src={URL.createObjectURL(fileInput)}
                  alt={fileInput.name}
                />
              ) : (
                <svg>
                  <use href={`${icons}#icon-plus`}></use>
                </svg>
              )}
              <input
                className={s.inputFile}
                type="file"
                id="image"
                name="image"
                accept=".jpg,.png"
                onChange={e => selectFile(e, setFieldValue)}
              />
              <ErrorMessage
                name="image"
                render={msg => <div className={s.errorMsg}>{msg}</div>}
              />
            </div>

            <div className={s.textFieldWrap}>
              <label htmlFor="comments" className={s.label}>
                Comments*:
              </label>
              <Field
                component="textarea"
                name="comments"
                id="comments"
                rows="3"
                placeholder="Type comments"
                className={s.inputTextarea}
              />
              <ErrorMessage
                name="comments"
                render={msg => <div className={s.errorMsg}>{msg}</div>}
              />
            </div>

            <div className={s.submitBtnWrap}>
              <button
                type="submit"
                className={s.submitBtn}
                onClick={() => setDirection('forward')}
              >
                Done
              </button>
              <button
                type="button"
                className={s.submitBtn}
                onClick={() => setDirection('back')}
              >
                Back
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ModalPage2;
