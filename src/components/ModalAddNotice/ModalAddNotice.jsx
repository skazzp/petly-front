import { useState } from 'react';
import ModalPage1 from './ModalPage1';
import ModalPage2 from './ModalPage2';
import { Wrapper, Header } from './ModalAddNotice.styled';

const ModalAddNotice = ({ onClose }) => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    titleOfAd: '',
    namePet: '',
    breed: '',
    sex: '',
    location: '',
    price: '1$',
    category: '',
    comments: '',
    dateOfBirth: '',
    image: '',
  });

  const nextStep = () => {
    setStep(prev => (prev === 1 ? prev + 1 : 2));
  };
  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  switch (step) {
    case 1:
      return (
        <Wrapper>
          <Header>Add pet</Header>
          <ModalPage1
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            onClose={onClose}
          />
        </Wrapper>
      );
    case 2:
      return (
        <Wrapper>
          <Header>Add pet</Header>
          <ModalPage2
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            onClose={onClose}
          />
        </Wrapper>
      );
    default:
      return <div></div>;
  }
};

export default ModalAddNotice;
