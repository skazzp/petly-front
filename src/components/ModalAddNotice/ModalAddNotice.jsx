import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/authSelectors';
import { addUserPet } from '../../redux/pets/petsOperations';
import ModalPage1 from './ModalPage1';
import ModalPage2 from './ModalPage2';

export default function ModalAddNotice({ onClose }) {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    breed: '',
    image: '',
    comments: '',
  });
  const [page, setPage] = useState(0);
  const FormTitles = ['First page', 'Second page'];

  const makeRequest = form => {
    dispatch(addUserPet({ form, token }));
  };
  const handleNextStep = (newData, final = false) => {
    setFormData(prev => (prev = newData));
    setPage(prev => prev + 1);

    if (final) {
      makeRequest(newData);
      return;
    }
  };

  const handlePrevStep = newData => {
    setFormData(prev => ({ ...prev, ...newData }));
    setPage(prev => prev - 1);
  };

  const steps = [
    <ModalPage1
      onClose={onClose}
      next={handleNextStep}
      data={formData}
      setFormData={setFormData}
      title={FormTitles[page]}
    />,
    <ModalPage2
      prev={handlePrevStep}
      onClose={onClose}
      next={handleNextStep}
      data={formData}
      setFormData={setFormData}
      title={FormTitles[page]}
    />,
  ];

  return <>{steps[page]}</>;
}
