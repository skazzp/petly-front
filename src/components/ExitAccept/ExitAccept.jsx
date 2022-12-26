import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/authOperation';
import { deleteNotices } from 'redux/notice/noticeOperations';
import { deleteUserPet } from 'redux/pets/petsOperations';
import {
  Box,
  Button,
  Div,
  List,
  Text,
  Title,
  Wrapper,
} from './ExitAccept.styled';

const ExitAccept = ({
  isModalDeleteAccept,
  setIsModalDeleteAccept,
  pet,
  isModalOpen,
  setIsModalOpen,
  isAcceptDeleteOwner,
  setIsAcceptDeleteOwner,
  id,
}) => {
  const modalRoot = document.querySelector('#modal-root');
  //   const [closePopup, setClosePopup] = useState(true);
  const dispatch = useDispatch();
  const acceptModal = () => {
    if (isModalOpen) {
      return dispatch(logOutUser());
    }
    if (isModalDeleteAccept) {
      dispatch(deleteUserPet(pet._id));
      return setIsModalDeleteAccept(false);
    }
    if (isAcceptDeleteOwner) {
      dispatch(deleteNotices(id));
      return setIsAcceptDeleteOwner(false);
    }
    return null;
  };
  const logOutText = 'Do you really want to log out?';
  const deleteText = 'Are you sure you want to delete?';
  const closeModal = () => {
    if (isModalOpen) {
      return setIsModalOpen(false);
    }
    if (isModalDeleteAccept) {
      return setIsModalDeleteAccept(false);
    }
    if (isAcceptDeleteOwner) {
      return setIsAcceptDeleteOwner(false);
    }
  };
  return createPortal(
    <Div>
      <Wrapper>
        <Box>
          <Title>
            {(isModalOpen && logOutText) ||
              (isModalDeleteAccept && deleteText) ||
              (isAcceptDeleteOwner && deleteText)}
          </Title>
        </Box>
        <List>
          <li>
            <Button onClick={acceptModal}>
              <Text>Yes</Text>
            </Button>
          </li>
          <li>
            <Button onClick={closeModal}>
              <Text>No</Text>
            </Button>
          </li>
        </List>
      </Wrapper>
    </Div>,
    modalRoot
  );
};

export default ExitAccept;
