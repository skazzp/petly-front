import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { Div } from './RegistrationPage.styled';
// import img from '../../assets/images/bg/bgSvg.svg';
const RegistrationPage = () => {
  // console.log(img);
  return (
    <Div>
      <RegistrationForm />
      <svg>
        <use href='../../assets/images/bg/bgSvg.svg'></use>
      </svg>
    </Div>
  );
};

export default RegistrationPage;
