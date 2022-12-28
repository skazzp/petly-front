import ExitAccept from 'components/ExitAccept/ExitAccept';
import { NoPositionSpinner } from 'components/LoaderSpiner/NoPositionSpinner';
import UpdateAvatar from 'components/UpdateAvatar/UpdateAvatar';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from 'redux/auth/authOperation';
import { selectAvatarLoading, selectUser } from 'redux/auth/authSelectors';
import { validationSchemaUserUpdate } from 'utility/validationSchema';
import icons from '../../assets/images/icons.svg';
import {
  Avatar,
  AvatarBox,
  Btn,
  BtnIcon,
  Container,
  Error,
  Form,
  Input,
  InputBox,
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
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      console.log(values, user);
      if (
        values.name === user.name &&
        values.email === user.email &&
        values.birthday === user.birthday &&
        values.city === user.city &&
        values.phone === user.phone
      ) {
        setDisabled({
          ...INITIAL_DISABLED,
        });
        return;
      }
      dispatch(editUser(values));
      setDisabled({
        ...INITIAL_DISABLED,
      });
    },
  });
  const logoutAccept = () => {
    setIsModalOpen(true);
  };
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
          <InputBox>
            <Input
              id="name"
              name="name"
              type="text"
              disabled={disabled.name}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <Error>{formik.errors.name}</Error>
            ) : null}
          </InputBox>
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
          <InputBox>
            <Input
              id="email"
              name="email"
              type="text"
              disabled={disabled.email}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Error>{formik.errors.email}</Error>
            ) : null}
          </InputBox>
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
          <InputBox>
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
              <Error>{formik.errors.birthday}</Error>
            ) : null}
          </InputBox>
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
          <InputBox>
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
              <Error>{formik.errors.phone}</Error>
            ) : null}
          </InputBox>
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
          <InputBox>
            <Input
              id="city"
              name="city"
              type="text"
              disabled={disabled.city}
              onChange={formik.handleChange}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city ? (
              <Error>{formik.errors.city}</Error>
            ) : null}
          </InputBox>
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
        {isModalOpen && (
          <ExitAccept
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        <LogoutBox>
          <LogoutBtn type="button" onClick={logoutAccept}>
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
