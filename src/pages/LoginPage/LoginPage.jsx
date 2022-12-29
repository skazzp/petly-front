import LoginForm from 'components/LoginForm/LoginForm';
import { GlobalStyleRegistration } from 'pages/RegistrationPage/RegistrationPage.styled';
import { Div } from './LoginPage.styled';

export const LoginPage = () => {
  return (
    <Div>
      <GlobalStyleRegistration />
      <LoginForm />
    </Div>
  );
};
