import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectToken } from 'redux/auth/authSelectors';
import { Spin as Hamburger } from 'hamburger-react';
import { isModalOpen } from 'redux/modal/modalSelectors';
import { toggleModal, closeModal } from 'redux/modal/modalSlice';
import {
  useIsDesktop,
  useIsMobile,
  useIsMobileOrTablet,
  useIsTablet,
} from '../../hooks/mediaQuery';
import { AuthNav } from 'components/AuthNav';
import { ModalNav } from 'components/ModalNav';
import { Nav } from 'components/Nav';
import UserNav from 'components/UserNav/UserNav';
import { Container, Box } from './Navigation.styled';
import { IconButton } from 'components/IconButton/IconButton';
import icon from '../../assets/images/icons.svg';

export const Navigation = ({ header }) => {
  const [chatOpen, setChatOpen] = useState(false);
  let isLoggedIn = useSelector(selectToken);
  const modalOpen = useSelector(isModalOpen);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  const isMobileOrTablet = useIsMobileOrTablet();
  const dispatch = useDispatch();
  const modalClosed = () => dispatch(closeModal());
  const modalToggled = () => dispatch(toggleModal());
  const openChat = () => {
    setChatOpen(prevState => !prevState);
  };
  return (
    <Container>
      {isDesktop && (
        <>
          <Nav />
          {isLoggedIn ? <UserNav /> : <AuthNav />}
        </>
      )}
      {isTablet && (
        <>
          {isLoggedIn ? (
            <UserNav closeMenu={modalClosed} />
          ) : (
            <AuthNav closeMenu={modalClosed} />
          )}
          <Hamburger
            toggled={modalOpen}
            toggle={modalToggled}
            size={30}
            color="#212121"
          />
        </>
      )}
      {isMobile && (
        <>
          <IconButton handlerFunction={openChat} iconRoute={icon + `#chat`} />
          <Hamburger
            toggled={modalOpen}
            toggle={modalToggled}
            size={30}
            color="#212121"
          />
        </>
      )}
      {modalOpen && isMobileOrTablet && (
        <ModalNav header={header}>
          <Box>
            {isMobile && (
              <>
                {isLoggedIn ? (
                  <UserNav closeMenu={modalClosed} />
                ) : (
                  <AuthNav closeMenu={modalClosed} />
                )}
              </>
            )}
            <Nav closeMenu={modalClosed} />
          </Box>
        </ModalNav>
      )}
    </Container>
  );
};
