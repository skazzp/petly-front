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
import { useState } from 'react';
import { registerUser } from 'redux/auth/authOperation';
import { selectToken } from 'redux/auth/authSelectors';
import { useWindowSize } from '@react-hook/window-size';
import Confetti from 'react-confetti';
import Data from '../../assets/City.json';
import ErrorModal from './ErrorModal';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [formChenge, SetFormChenge] = useState(false);
  const token = useSelector(selectToken);
  const { width, height } = useWindowSize();
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
      !formik.errors.email &&
      !formik.errors.password &&
      !formik.errors.confirmPassword
    )
      SetFormChenge(true);
  };
  const Selectoptions = Data.map(i => ({
    value: `${i.City},${i.District}`,
    label: `${i.City}, ${i.District}`,
  }));

  return (
    <Div>
      <Title>Registration</Title>
      {!formChenge ? (
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
            {formik.errors.email && formik.touched.email ? (
              <Validation>{formik.errors.email}</Validation>
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
            <Input
              placeholder="Phone"
              id="phone"
              name="phone"
              type="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
            ></Input>
            {formik.errors.phone && formik.touched.phone ? (
              <Validation>{formik.errors.phone}</Validation>
            ) : null}
          </Label>
          <ErrorModal />
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
        Don't have an account? <LinkRegistration>Register</LinkRegistration>
      </Span>
    </Div>
  );
};

export default RegistrationForm;
