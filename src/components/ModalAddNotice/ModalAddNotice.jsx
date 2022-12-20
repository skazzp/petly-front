import { useState, useEffect } from 'react';
import icons from '../../assets/images/icons.svg';
import ModalPage1 from './ModalPage1';
import ModalPage2 from './ModalPage2';
import {
  Overlay,
  Wrapper,
  Header,
  CloseBtn,
  Svg,
} from './ModalAddNotice.styled';

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

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onModalClose = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onModalClose);
    return () => {
      window.removeEventListener('keydown', onModalClose);
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <Overlay onClick={onBackdropClick}>
      <Wrapper>
        <Header>Add pet</Header>
        <CloseBtn type="button" onClick={onClose}>
          <Svg>
            <use href={`${icons}#close-small-modal-mobile`}></use>
          </Svg>
        </CloseBtn>
        {step === 1 ? (
          <ModalPage1
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            onClose={onClose}
          />
        ) : (
          <ModalPage2
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            onClose={onClose}
          />
        )}
      </Wrapper>
    </Overlay>
  );
};

export default ModalAddNotice;
