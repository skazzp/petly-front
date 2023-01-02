
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { logOutUser } from 'redux/auth/authOperation';

import {
  deleteNotices,
  getAllNotices,
  getByCategory,
} from 'redux/notice/noticeOperations';
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
  page,
}) => {
  const modalRoot = document.querySelector('#modal-root');
  const dispatch = useDispatch();
  const location = useLocation();
  const category = location.pathname.split('/')[2];

  const acceptModal = () => {
    if (isModalOpen) {
      return dispatch(logOutUser());
    }
    if (isModalDeleteAccept) {
      dispatch(deleteUserPet(pet._id));
      return setIsModalDeleteAccept(false);
    }
    if (
      isAcceptDeleteOwner &&
      (location.pathname === '/notices' || location.pathname === '/notices/')
    ) {
      dispatch(deleteNotices(id));
      dispatch(getAllNotices(page));
      return setIsAcceptDeleteOwner(false);
    }
    if (isAcceptDeleteOwner && location.pathname === `/notices/${category}`) {
      dispatch(deleteNotices(id));
      dispatch(getByCategory({ category: category, page }));
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
     return setIsModalDeleteAccept(false)
     
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
