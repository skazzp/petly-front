import {
  Div,
  Title,
  Input,
  Form,
  Button,
  Span,
  LinkRegistration,
} from './LoginForm.styled';
import { useFormik } from 'formik';
// import { useDispatch } from 'react-redux';
import { schema } from './Valodation';


const LoginForm = () => {
  //  const dispatch = useDispatch();
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,

    onSubmit: values => {
      //   dispatch(logInUser(values));
    },
  });

  return (
    <Div>
      <Title>Login</Title>
      <Form>
        <Input  placeholder="E-mail"
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}></Input>
        <Input
          placeholder="Password"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
        ></Input>
        <Button>Login</Button>
      </Form>
      <Span>
        Don't have an account? <LinkRegistration>Register</LinkRegistration>
      </Span>
    </Div>
  );
};

export default LoginForm;