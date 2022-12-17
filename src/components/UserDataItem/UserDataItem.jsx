import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { editUser, loginUser, logOutUser } from 'redux/auth/authOperation';
import { selectUser } from 'redux/auth/authSelectors';
// import { changeUserData } from 'redux/auth/authSlice';
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
    favorites: [],
  };
  const [disabled, setDisabled] = useState(INITIAL_DISABLED);
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

  useEffect(() => {
    if (!user.email) return;
    setFieldValue('name', user.name);
    setFieldValue('email', user.email);
    setFieldValue(
      'birthday',
      new Date(user.birthday).toISOString().split('T')[0]
    );
    setFieldValue('city', user.city);
    setFieldValue('phone', user.phone);
  }, [user, setFieldValue]);

  const handleEditInput = e => {
    console.log(e.target);
    // console.log(user);
    console.log(e.target.parentNode.htmlFor);
    // console.log(formik.values);
    console.log(e.currentTarget);
    setDisabled({
      ...INITIAL_DISABLED,
      [e.currentTarget.parentNode.htmlFor]: false,
    });
  };

  return (
    <Container>
      <button
        type="click"
        onClick={() =>
          dispatch(
            loginUser({
              email: 'yatomat2@gmail.com',
              password: '1231234',
            })
          )
        }
      ></button>
      <AvatarBox>
        <Avatar src={`http:${user.avatarURL}`} alt="avatar" />
      </AvatarBox>

      <Form onSubmit={formik.handleSubmit}>
        {/* test login func */}

        <Label name="name" htmlFor="name">
          <LabelText>Name</LabelText>
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
          <LabelText>Email</LabelText>
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
          <LabelText>Birthday</LabelText>
          <Input
            id="birthday"
            name="birthday"
            type="date"
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
          <LabelText>Phone</LabelText>
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
          <LabelText>City</LabelText>
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
            <LogoutIcon>
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
