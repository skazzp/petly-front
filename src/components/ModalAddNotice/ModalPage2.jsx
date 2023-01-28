import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import ReactImageGallery from 'react-image-gallery';
import { useEffect } from 'react';

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
  ErrorText,
  // AvatarImg,
  AvatarIcon,
  AvatarInput,
  ValidationFormik,
  InputDiv,
} from './ModalAddNotice.styled';
import { MAX_FILE_SIZE } from '../../utility/constants';

// const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

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
  image: yup.mixed().required('Image is required! (jpg, jpeg, png)'),
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
  const [errorMsg, setErrorMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const selectFile = (e, setFieldValue) => {
    const file = e.target.files;
    if (file) {
      setFileInput(file);
      setFieldValue('image', file);
      setFormData(values => ({ ...values, image: file }));
     

for(let i = 0; i < file.length; i++) {
      if (file[i].size > MAX_FILE_SIZE) {
        setErrorMsg('File size is greater than maximum limit');
        setIsSuccess(false);
       
        return;
      }}

      setErrorMsg('');
      setIsSuccess(true);
    }
  };

  function checkImg() {
    let previewData = [];
    for (let element of fileInput) {
    
      previewData.push({
        original: URL.createObjectURL(element),
        thumbnail: URL.createObjectURL(element),
      });
    }
    return previewData;
  }
  const [fileSrc, setFileSrc] = useState([]);

  useEffect(() => {
    if (fileInput) {
      const arr = checkImg();
      setFileSrc([...arr]);
    }
    // eslint-disable-next-line
  }, [fileInput, setFileSrc]);

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
              render={msg => <ValidationFormik>{msg}</ValidationFormik>}
            />

            <FieldWrapper>
              <Label htmlFor="location" type="text">
                Location*:
              </Label>
             <InputDiv><InputStyled
                name="location"
                id="location"
                placeholder="Type location"
              />
              <ErrorMessage
                name="location"
                render={msg => <ValidationFormik>{msg}</ValidationFormik>}
              /></InputDiv>
              
            </FieldWrapper>

            {formData.category === 'sell' && (
              <FieldWrapper>
                <Label htmlFor="price" type="text">
                  Price*:
                </Label>
                <InputStyled name="price" id="price" placeholder="Type price" />
                <ErrorMessage
                  name="price"
                  render={msg => <ValidationFormik>{msg}</ValidationFormik>}
                />
              </FieldWrapper>
            )}

            <AvatarLabel htmlFor="image">Load the pet's image:</AvatarLabel>
            <AvatarWrapper>
              {fileInput ? (
                // <AvatarImg
                //   id="image"
                //   src={URL.createObjectURL(fileInput[0])}
                //   alt={fileInput.name}
                // />
                <ReactImageGallery
                  items={fileSrc}
                  showBullets={false}
                  showIndex={true}
                  showThumbnails={false}
                  lazyLoad={true}
                  showPlayButton={false}
                  showFullscreenButton={false}
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
                accept=".jpg,.png"
                onChange={e => selectFile(e, setFieldValue)}
                multiple={true}
              />
              <ErrorMessage
                name="image"
                render={msg => <ValidationFormik>{msg} </ValidationFormik>}
              />
              {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
            </AvatarWrapper>

            <FieldWrapper>
              <Label htmlFor="comments">Comments</Label>
              <InputDiv><InputTextareaStyled
                component="textarea"
                name="comments"
                id="comments"
                rows="3"
                placeholder="Type comment"
              /><ErrorMessage
                name="comments"
                render={msg => <ValidationFormik>{msg}</ValidationFormik>}
              /></InputDiv>
              
            </FieldWrapper>

            <SubmitBtnWrapper>
              <SubmitBtn
                disabled={!isSuccess}
                type="submit"
                onSubmit={onSubmit}
              >
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
