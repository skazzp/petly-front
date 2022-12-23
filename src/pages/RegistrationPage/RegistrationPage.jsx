import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { Div, GlobalStyleRegistration } from './RegistrationPage.styled';
// import img from '../../assets/images/bg/bgSvg.svg';
const RegistrationPage = () => {
 
  return (
    <Div>
      <GlobalStyleRegistration/>
      <RegistrationForm />
    </Div>
  );
};

export default RegistrationPage;
