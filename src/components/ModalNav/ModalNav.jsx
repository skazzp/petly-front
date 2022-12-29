import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { ModalContainer } from './ModalNav.styled';

const modalRoot = document.querySelector('#modal-root');
export const ModalNav = ({ children, header }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });
  return createPortal(
    <ModalContainer header={header}>{children}</ModalContainer>,
    modalRoot
  );
};
