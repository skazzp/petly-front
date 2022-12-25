import { NoPositionSpinner } from 'components/LoaderSpiner/NoPositionSpinner';
import UpdateAvatar from 'components/UpdateAvatar/UpdateAvatar';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, logOutUser } from 'redux/auth/authOperation';
import { selectAvatarLoading, selectUser } from 'redux/auth/authSelectors';
import { validationSchemaUserUpdate } from 'utility/validationSchema';
import icons from '../../assets/images/icons.svg';
import {
  Avatar,
  AvatarBox,
  Btn,
  BtnIcon,
  Container,
  Form,
  Input,
  Label,
  LabelText,
  LogoutBox,
  LogoutBtn,
  LogoutIcon,
} from './UserDataItem.styled';

const UserDataItem = () => {
  const INITIAL_DISABLED = {
    name: true,
    email: true,
    birthday: true,
    city: true,
    phone: true,
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [disabled, setDisabled] = useState(INITIAL_DISABLED);
  const isLoading = useSelector(selectAvatarLoading);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      birthday: '',
      city: '',
      phone: '',
    },
    validationSchema: validationSchemaUserUpdate,
    onSubmit: values => {
      dispatch(editUser(values));
      setDisabled({
        ...INITIAL_DISABLED,
      });
    },
  });
  const { setFieldValue } = formik;
  const avatarChange = selectedImage
    ? URL.createObjectURL(selectedImage)
    : `${user.avatarURL}`;
  useEffect(() => {
    if (!user.email) return;
    setFieldValue('name', user.name);
    setFieldValue('email', user.email);
    if (user.birthday) {
      setFieldValue(
        'birthday',
        new Date(user.birthday).toISOString().split('T')[0]
      );
    }
    setFieldValue('city', user.city);
    setFieldValue('phone', user.phone);
  }, [user, setFieldValue]);

  const handleEditInput = e => {
    setDisabled({
      ...INITIAL_DISABLED,
      [e.currentTarget.parentNode.htmlFor]: false,
    });
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setDisabled({
          name: true,
          email: true,
          birthday: true,
          city: true,
          phone: true,
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Container>
      <div>
        <AvatarBox>
          {isLoading ? (
            <NoPositionSpinner />
          ) : (
            <Avatar src={avatarChange} alt="avatar" />
          )}
        </AvatarBox>
        <UpdateAvatar
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      </div>
      <Form onSubmit={formik.handleSubmit}>
        <Label name="name" htmlFor="name">
          <LabelText>Name:</LabelText>
          <span>
            <Input
              id="name"
              name="name"
              type="text"
              disabled={disabled.name}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p>{formik.errors.name}</p>
            ) : null}
          </span>
          {disabled.name && (
            <Btn type="button" onClick={handleEditInput}>
              <BtnIcon>
                <use href={`${icons}#icon-edit_pencil`}></use>
              </BtnIcon>
            </Btn>
          )}
          {!disabled.name && (
            <Btn type="submit">
              <BtnIcon>
                <use href={`${icons}#icon-edit_check`}></use>
              </BtnIcon>
            </Btn>
          )}
        </Label>
        <Label name="email" htmlFor="email">
          <LabelText>Email:</LabelText>
          <span>
            <Input
              id="email"
              name="email"
              type="email"
              disabled={disabled.email}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
          </span>
          {disabled.email && (
            <Btn type="button" onClick={handleEditInput}>
              <BtnIcon>
                <use href={`${icons}#icon-edit_pencil`}></use>
              </BtnIcon>
            </Btn>
          )}
          {!disabled.email && (
            <Btn type="submit">
              <BtnIcon>
                <use href={`${icons}#icon-edit_check`}></use>
              </BtnIcon>
            </Btn>
          )}
        </Label>
        <Label htmlFor="birthday">
          <LabelText>Birthday:</LabelText>
          <span>
            <Input
              id="birthday"
              name="birthday"
              type="date"
              placeholder="00.00.0000"
              disabled={disabled.birthday}
              onChange={formik.handleChange}
              value={formik.values.birthday}
            />
            {formik.touched.birthday && formik.errors.birthday ? (
              <p>{formik.errors.birthday}</p>
            ) : null}
          </span>
          {disabled.birthday && (
            <Btn type="button" onClick={handleEditInput}>
              <BtnIcon>
                <use href={`${icons}#icon-edit_pencil`}></use>
              </BtnIcon>
            </Btn>
          )}
          {!disabled.birthday && (
            <Btn type="submit">
              <BtnIcon>
                <use href={`${icons}#icon-edit_check`}></use>
              </BtnIcon>
            </Btn>
          )}
        </Label>
        <Label htmlFor="phone">
          <LabelText>Phone:</LabelText>
          <span>
            <Input
              id="phone"
              name="phone"
              mask="+38(099)999-99-99"
              type="tel"
              disabled={disabled.phone}
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <p>{formik.errors.phone}</p>
            ) : null}
          </span>
          {disabled.phone && (
            <Btn type="button" onClick={handleEditInput}>
              <BtnIcon>
                <use href={`${icons}#icon-edit_pencil`}></use>
              </BtnIcon>
            </Btn>
          )}
          {!disabled.phone && (
            <Btn type="submit">
              <BtnIcon>
                <use href={`${icons}#icon-edit_check`}></use>
              </BtnIcon>
            </Btn>
          )}
        </Label>
        <Label htmlFor="city">
          <LabelText>City:</LabelText>
          <span>
            <Input
              id="city"
              name="city"
              type="text"
              disabled={disabled.city}
              onChange={formik.handleChange}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city ? (
              <p>{formik.errors.city}</p>
            ) : null}
          </span>
          {disabled.city && (
            <Btn type="button" onClick={handleEditInput}>
              <BtnIcon>
                <use href={`${icons}#icon-edit_pencil`}></use>
              </BtnIcon>
            </Btn>
          )}
          {!disabled.city && (
            <Btn type="submit">
              <BtnIcon>
                <use href={`${icons}#icon-edit_check`}></use>
              </BtnIcon>
            </Btn>
          )}
        </Label>
        <LogoutBox>
          <LogoutBtn
            type="button"
            onClick={() => {
              dispatch(logOutUser());
            }}
          >
            <LogoutIcon fill="red">
              <use href={icons + '#icon-logout'}></use>
            </LogoutIcon>
            Log Out
          </LogoutBtn>
        </LogoutBox>
      </Form>
    </Container>
  );
};

export default UserDataItem;
