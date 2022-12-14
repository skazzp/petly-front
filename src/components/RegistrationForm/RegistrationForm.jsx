import {
  Div,
  Title,
  Label,
  Input,
  Form,
  Button,
  Span,
  LinkRegistration,
} from './RegistrationForm.styled';
import { useFormik } from 'formik';
// import { useDispatch } from 'react-redux';
import { schema } from './Validation';
import { useState } from 'react';

const RegistrationForm = () => {
  //  const dispatch = useDispatch();
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

    onSubmit: values => {
      //   dispatch(logInUser(values));
    },
  });

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
              onChange={formik.handleChange}
              value={formik.values.email}
            ></Input>
          </Label>
          <Label>
            <Input
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            ></Input>
          </Label>
          <Label>
            <Input
              placeholder="Confirm password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            ></Input>
          </Label>

          <Button>Next</Button>
        </Form>
      ) : (
        <Form>
          <Label>
            <Input
              placeholder="Name"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
            ></Input>
          </Label>
          <Label>
            <Input
              placeholder="City"
              id="City"
              name="City"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            ></Input>
          </Label>
          <Label>
            <Input
              placeholder="Phone"
              id="phone"
              name="phone"
              type="phone"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            ></Input>
          </Label>

          <Button>Login</Button>
        </Form>
      )}

      <Span>
        Don't have an account? <LinkRegistration>Register</LinkRegistration>
      </Span>
    </Div>
  );
};

export default RegistrationForm;
