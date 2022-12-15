import { ModalContainer } from './ModalNav.styled';
import { createPortal } from "react-dom";
const modalRoot = document.querySelector('#modal-root');

export const ModalNav = ({children}) => {
    return createPortal(
    <ModalContainer>
        {children}
    </ModalContainer>, modalRoot)
    
}