import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import icons from '../../assets/images/icons.svg';
import s from './index.module.css';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const validationSchema = yup.object({
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
    .min(8)
    .max(200)
    .matches(/\D/g, 'Only alphabetic characters and symbols are allowed')
    .required(),
});

export default function ModalPage2({ next, data, onClose, setFormData, prev }) {
  const [fileInput, setFileInput] = useState(data.image);

  const handleSubmit = values => {
    next({ ...values, image: fileInput }, true);
    onClose();
  };

  const selectFile = (e, setFieldValue) => {
    const [file] = e.target.files;
    if (file) {
      setFileInput(file);
      setFieldValue('image', file);
      setFormData(values => ({ ...values, image: file }));
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
          {({ setFieldValue }) => (
            <Form autoComplete="on" className={s.formPageTwo}>
              <p className={s.addPhotoText}>Add photo and some comments</p>
              <div className={s.addFileBtnWrapper}>
                {fileInput ? (
                  <img
                    className={s.inputImage}
                    src={URL.createObjectURL(fileInput)}
                    alt={fileInput.name}
                  />
                ) : (
                  <button type="button" className={s.addPhotoBtn}>
                    <span>
                      <svg>
                        <use href={`${icons}#icon-plus`}></use>
                      </svg>
                    </span>
                  </button>
                )}
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept=".jpg, .png"
                  onChange={e => selectFile(e, setFieldValue)}
                  className={s.addFileInput}
                />
                <ErrorMessage
                  name="image"
                  render={msg => <div className={s.errorMsg}>{msg}</div>}
                />
              </div>

              <div className={s.textareaWrapper}>
                <label className={s.label}>Comments</label>
                <Field
                  className={s.textarea}
                  as="textarea"
                  name="comments"
                  placeholder="Type comments"
                />
                <ErrorMessage
                  name="comments"
                  render={msg => <div className={s.errorMsg}>{msg}</div>}
                />
              </div>

              <div className={s.buttonsWrapper}>
                <button type="submit" className={s.buttonSubmit}>
                  Done
                </button>
                <button type="button" className={s.buttonSimple} onClick={prev}>
                  Back
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
