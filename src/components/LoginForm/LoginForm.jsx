import {
  Div,
  Title,
  Label,
  Input,
  Form,
  Button,
  Span,
  LinkRegistration,
  ButtonGoogle,
  GoogleIcon,
} from './LoginForm.styled';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { schema } from './Valodation';
import { loginUser } from 'redux/auth/authOperation';
import { useEffect, useState } from 'react';
import { selectError, selectToken } from 'redux/auth/authSelectors';
import { useWindowSize } from '@react-hook/window-size';
import Confetti from 'react-confetti';
import { Validation } from 'utility/validationStyle';
import icons from '../../assets/images/icons.svg';

const LoginForm = () => {
  const dispatch = useDispatch();
  const DbError = useSelector(selectError);
  const [errorMassege, setErrorMassege] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorFixed, setErrorFixed] = useState(false);
  const token = useSelector(selectToken);
  const { width, height } = useWindowSize();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,

    onSubmit: values => {
      if (errorFixed) {
        return;
      }
      if (
        emailError === formik.values.email ||
        passwordError === formik.values.password
      ) {
      }
      dispatch(loginUser(formik.values));
      setErrorMassege('');
      setEmailError('');
      setPasswordError('');
    },
  });

  console.log(emailError);
  console.log(formik.values.email);

  useEffect(() => {
    if (DbError) {
      setErrorMassege(DbError);
      setEmailError(formik.values.email);
      setPasswordError(formik.values.password);
      setErrorFixed(true);
    }
    // eslint-disable-next-line
  }, [DbError]);

  useEffect(() => {
    if (errorFixed) {
      if (
        emailError !== formik.values.email ||
        passwordError !== formik.values.password
      ) {
        setErrorMassege('');
        setEmailError('');
        setPasswordError('');
        setErrorFixed(false);
      }
    }
    // eslint-disable-next-line
  }, [errorFixed, formik.values.email, formik.values.password]);

  return (
    <Div>
      <Title>Login</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Label>
          <Input
            placeholder="E-mail"
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          ></Input>
          {(formik.errors.email && formik.touched.email) || errorMassege ? (
            <Validation>{formik.errors.email || errorMassege}</Validation>
          ) : null}
        </Label>
        <Label>
          <Input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          ></Input>
          {formik.errors.password && formik.touched.password ? (
            <Validation>{formik.errors.password}</Validation>
          ) : null}
        </Label>
        <Button type="submit">Login</Button>
        <ButtonGoogle href="http://localhost:3030/auth/google">
          <p>Login with </p>
          <GoogleIcon>
            <use href={icons + '#icon-google-logo'}></use>
          </GoogleIcon>
          <p>Google</p>
        </ButtonGoogle>
      </Form>
      <Span>
        Don't have an account?{' '}
        <LinkRegistration type="button" to="/register">
          Register
        </LinkRegistration>
      </Span>
      {token ? (
        <Confetti recycle={false} width={width} height={height} />
      ) : null}
    </Div>
  );
};

export default LoginForm;
