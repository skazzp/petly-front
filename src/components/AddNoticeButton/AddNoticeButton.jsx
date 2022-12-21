import { useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectToken } from '../../redux/auth/authSelectors';
import { useIsMobile } from '../../hooks/mediaQuery';
import ModalAddNotice from '../ModalAddNotice';
import icons from '../../assets/images/icons.svg';
import { BtnWrapper, AddBtn, Plus } from './AddNoticeButton.styled';

const AddNoticeButton = () => {
  const isMobile = useIsMobile();
  const text = 'Add pet';
  const isLoggedIn = useSelector(selectToken);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isLoggedIn) {
      toast.error('You must be logged in!');
      return;
    }
    setIsOpen(true);
  };

  return (
    <>
      {!isOpen && (
        <>
          <BtnWrapper onClick={handleClick}>
            {!isMobile && text}
            <AddBtn type="button">
              <Plus>
                <use href={`${icons}#plus-add-pet`}></use>
              </Plus>
              {isMobile && text}
            </AddBtn>
          </BtnWrapper>
        </>
      )}
      {isOpen && (
        <ModalAddNotice
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </>
  );
};

export default AddNoticeButton;
