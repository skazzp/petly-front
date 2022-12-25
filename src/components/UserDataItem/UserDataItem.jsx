import { NoPositionSpinner } from 'components/LoaderSpiner/NoPositionSpinner';
import UpdateAvatar from 'components/UpdateAvatar/UpdateAvatar';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, logOutUser } from 'redux/auth/authOperation';
import { selectAvatarLoading, selectUser } from 'redux/auth/authSelectors';
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
          <Input
            id="name"
            name="name"
            type="text"
            disabled={disabled.name}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
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
          <Input
            id="email"
            name="email"
            type="text"
            disabled={disabled.email}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
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
          <Input
            id="birthday"
            name="birthday"
            type="date"
            placeholder="00.00.0000"
            disabled={disabled.birthday}
            onChange={formik.handleChange}
            value={formik.values.birthday}
          />
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
          <Input
            id="phone"
            name="phone"
            type="tel"
            disabled={disabled.phone}
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
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
          <Input
            id="city"
            name="city"
            type="text"
            disabled={disabled.city}
            onChange={formik.handleChange}
            value={formik.values.city}
          />
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
