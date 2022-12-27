import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import icons from '../../assets/images/icons.svg';
import { createNotice } from '../../redux/notice/noticeOperations';
import {
  FormStyled,
  InputStyled,
  InputTextareaStyled,
  SexInputStyled,
  FieldWrapper,
  Label,
  SubmitBtnWrapper,
  SubmitBtn,
  SexWrapper,
  SexTitle,
  SexLabel,
  SexIcon,
  SexText,
  AvatarLabel,
  AvatarWrapper,
  AvatarImg,
  AvatarIcon,
  AvatarInput,
} from './ModalAddNotice.styled';

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
    .matches(
      /^[1-9]+[0-9]*\$$/g,
      'Only number characters and $ are allowed, e.g. 50$'
    )
    .required('Field is required!'),
  image: yup.mixed(),
  // .required('Image is required! (jpg, jpeg, png)')
  // .test(
  //   'fileFormat',
  //   'Unsupported file type',
  //   value =>
  //     value === null || (value && SUPPORTED_FORMATS.includes(value.type))
  // ),
  comments: yup.string().min(8).max(120).required('Field is required!'),
});

const ModalPage2 = ({ formData, setFormData, prevStep, onClose }) => {
  const [fileInput, setFileInput] = useState(formData.image);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectFile = (e, setFieldValue) => {
    const [file] = e.target.files;
    console.log(e.target?.files, file);
    if (file) {
      setFileInput(file);
      setFieldValue('image', file);
      setFormData(values => ({ ...values, image: file }));
    }
  };

  const onSubmit = async values => {
    setFormData({
      ...values,
      image: fileInput,
    });

    if (values.category === 'sell') {
      values.price = values.price.replace('$', '');
    } else {
      delete values.price;
    }

    dispatch(createNotice(values));
    navigate('/notices/personal');
    onClose();
  };

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={formData}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <FormStyled>
            <SexWrapper>
              <SexTitle>The sex*:</SexTitle>
              <SexLabel htmlFor="male">
                <SexInputStyled
                  type="radio"
                  id="male"
                  name="sex"
                  alt="male"
                  value="male"
                />
                <SexIcon>
                  <svg>
                    <use href={`${icons}#male-icon`}></use>
                  </svg>
                </SexIcon>
                <SexText>Male</SexText>
              </SexLabel>

              <SexLabel htmlFor="female">
                <SexInputStyled
                  type="radio"
                  id="female"
                  name="sex"
                  alt="female"
                  value="female"
                />
                <SexIcon>
                  <svg>
                    <use href={`${icons}#female-icon`}></use>
                  </svg>
                </SexIcon>
                <SexText>Female</SexText>
              </SexLabel>
            </SexWrapper>
            <ErrorMessage
              name="sex"
              render={msg => <div style={{ color: 'red' }}>{msg}</div>}
            />

            <FieldWrapper>
              <Label htmlFor="location" type="text">
                Location*:
              </Label>
              <InputStyled
                name="location"
                id="location"
                placeholder="Type location"
              />
              <ErrorMessage
                name="location"
                render={msg => <div style={{ color: 'red' }}>{msg}</div>}
              />
            </FieldWrapper>

            {formData.category === 'sell' && (
              <FieldWrapper>
                <Label htmlFor="price" type="text">
                  Price*:
                </Label>
                <InputStyled name="price" id="price" placeholder="Type price" />
                <ErrorMessage
                  name="price"
                  render={msg => <div style={{ color: 'red' }}>{msg}</div>}
                />
              </FieldWrapper>
            )}

            <AvatarLabel htmlFor="image">Load the pet's image:</AvatarLabel>
            <AvatarWrapper>
              {fileInput ? (
                <AvatarImg
                  id="image"
                  // src={URL.createObjectURL(fileInput)}
                  alt={fileInput.name}
                />
              ) : (
                <AvatarIcon>
                  <use href={`${icons}#plusImg`}></use>
                </AvatarIcon>
              )}
              <AvatarInput
                type="file"
                id="image"
                name="image"
                // accept=".jpg,.png"
                onChange={e => selectFile(e, setFieldValue)}
                multiple={true}
              />
              <ErrorMessage
                name="image"
                render={msg => <div style={{ color: 'red' }}>{msg}</div>}
              />
            </AvatarWrapper>

            <FieldWrapper>
              <Label htmlFor="comments">Comments</Label>
              <InputTextareaStyled
                component="textarea"
                name="comments"
                id="comments"
                rows="3"
                placeholder="Type comment"
              />
              <ErrorMessage
                name="comments"
                render={msg => <div style={{ color: 'red' }}>{msg}</div>}
              />
            </FieldWrapper>

            <SubmitBtnWrapper>
              <SubmitBtn type="submit" onSubmit={onSubmit}>
                Done
              </SubmitBtn>
              <SubmitBtn type="button" onClick={() => prevStep()}>
                Back
              </SubmitBtn>
            </SubmitBtnWrapper>
          </FormStyled>
        )}
      </Formik>
    </div>
  );
};

export default ModalPage2;
