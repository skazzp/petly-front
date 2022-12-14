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
} from './RegistrationForm.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { schema } from './Validation';
import { useState } from 'react';
import { registerUser } from 'redux/auth/authOperation';


const RegistrationForm = () => {
   const dispatch = useDispatch();
  const [formChenge, SetFormChenge] = useState(false);

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

    onSubmit: async values  => {
      const user = {
        email: values.email,
        password: values.password,
        name: values.name,
        city: values.city,
        phone: values.phone,
      }
      const res = await dispatch(registerUser(user));
      console.log(res);
    },
  });
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
            <Input
              placeholder="City"
              id="city"
              name="city"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.city}
              ></Input>
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
          <ButtonRegister type="submit">Registration</ButtonRegister>
          <ButtonBack
            onClick={e => {
              e.preventDefault();
              SetFormChenge(false);
            }}
          >
            Back
          </ButtonBack>
        </Form>
      )}

      <Span>
        Don't have an account? <LinkRegistration>Register</LinkRegistration>
      </Span>
    </Div>
  );
};

export default RegistrationForm;
