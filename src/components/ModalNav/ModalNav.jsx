import { ModalContainer } from './ModalNav.styled';
import { createPortal } from "react-dom";
import { useEffect } from 'react';
const modalRoot = document.querySelector('#modal-root');

export const ModalNav = ({children}) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        console.log(document.body.children)
        return () => {
            document.body.style.overflow = 'auto'
        }
    })

    return createPortal(
    <ModalContainer>
        {children}
    </ModalContainer>, modalRoot)
    
}