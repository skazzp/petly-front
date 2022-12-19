import {
  Div,
  Title,
  Label,
  Input,
  Form,
  Button,
  Span,
  LinkRegistration,
  ButtonBack,
  ButtonRegister,
  Validation,
  SelectContainer,
} from './RegistrationForm.styled';
import { selectStyles } from './selectStyles';
import Select from 'react-select';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { schema } from './Validation';
import { useEffect, useState } from 'react';
import { registerUser } from 'redux/auth/authOperation';
import { selectError, selectToken } from 'redux/auth/authSelectors';
import { useWindowSize } from '@react-hook/window-size';
import Confetti from 'react-confetti';
import Data from '../../assets/City.json';
import InputMask from 'react-input-mask';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [formChenge, SetFormChenge] = useState(false);
  const [emailErrorMassege, setEmailErrorMassege] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailErrorFixed, setEmailErrorFixed] = useState(false);

  const token = useSelector(selectToken);
  const { width, height } = useWindowSize();
  const errorDB = useSelector(selectError);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      city: '',
      phone: '',
    },
    validationSchema: schema,

    onSubmit: async values => {
      const user = {
        email: values.email,
        password: values.password,
        name: values.name,
        city: values.city,
        phone: values.phone,
      };
      await dispatch(registerUser(user));
    },
  });
  const city = formik.values.city;
  const setCity = city => {
    formik.setValues(prev => ({
      ...prev,
      city: city,
    }));
  };

  const onClickNext = e => {
    e.preventDefault();
    if (
      !formik.values.email &&
      !formik.values.password &&
      !formik.values.confirmPassword
    )
      return;
    if (
      formik.errors.email ||
      formik.errors.password ||
      formik.errors.confirmPassword
    )
      return;
    if (emailError !== formik.values.email) {
      setEmailErrorFixed(false);
    }
    SetFormChenge(true);
  };
  const Selectoptions = Data.map(i => ({
    value: `${i.City},${i.District}`,
    label: `${i.City}, ${i.District}`,
  }));

  useEffect(() => {
    if (errorDB === 'Email in use') {
      setEmailErrorMassege('Email in use');
      setEmailError(formik.values.email);
      setEmailErrorFixed(true);
    }
    if (errorDB === '"email" must be a valid email') {
      setEmailErrorMassege('Email must be a valid');
      setEmailError(formik.values.email);
      setEmailErrorFixed(true);
    }
    if (!errorDB) {
      setEmailErrorMassege('');
      setEmailError('');
      setEmailErrorFixed('');
    }
  }, [errorDB, formik.values.email]);


  return (
    <Div>
      <Title>Registration</Title>
      {!formChenge || emailErrorFixed ? (
        <Form>
          <Label>
            <Input
              placeholder="E-mail"
              id="email"
              name="email"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
            ></Input>
            {(formik.errors.email && formik.touched.email) || emailError ? (
              <Validation>
                {formik.errors.email || emailErrorMassege}
              </Validation>
            ) : null}
          </Label>
          <Label>
            <Input
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
            ></Input>
            {formik.errors.password && formik.touched.password ? (
              <Validation>{formik.errors.password}</Validation>
            ) : null}
          </Label>
          <Label>
            <Input
              placeholder="Confirm password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            ></Input>
            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <Validation>{formik.errors.confirmPassword}</Validation>
            ) : null}
          </Label>
          <Button onClick={e => onClickNext(e)}>Next</Button>
        </Form>
      ) : (
        <Form onSubmit={formik.handleSubmit}>
          <Label>
            <Input
              placeholder="Name"
              id="name"
              name="name"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            ></Input>
            {formik.errors.name && formik.touched.name ? (
              <Validation>{formik.errors.name}</Validation>
            ) : null}
          </Label>
          <Label>
            <SelectContainer>
              <Select
                placeholder="City"
                defaultValue={city}
                id="city"
                name="city"
                styles={selectStyles()}
                options={Selectoptions}
                onChange={e => setCity(e.value)}
                defaultInputValue={city}
              ></Select>
            </SelectContainer>

            {formik.errors.city && formik.touched.city ? (
              <Validation>{formik.errors.city}</Validation>
            ) : null}
          </Label>
            <Label>
              <InputMask
              placeholder="Phone"
              name="phone"
              id="phone"
              mask="+38(099)999-99-99"
              style={{
                background: 'none',
                border: 0,
                width: '100%',
                height: '100%',
                fontFamily: 'Manrope',
                fontWeight: 400,
                 outline: "none",
                fontSize: 18,
                lineHeight: 25,
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.errors.phone && formik.touched.phone ? (
              <Validation>{formik.errors.phone}</Validation>
            ) : null}
          </Label>
          <ButtonRegister type="submit">Registration</ButtonRegister>
          <ButtonBack
            onClick={e => {
              e.preventDefault();
              SetFormChenge(false);
            }}
          >
            Back
          </ButtonBack>

          {token ? (
            <Confetti recycle={false} width={width} height={height} />
          ) : null}
        </Form>
      )}

      <Span>
        Don't have an account? <LinkRegistration type="button" to="/login" >Login</LinkRegistration>
      </Span>
    </Div>
  );
};

export default RegistrationForm;
