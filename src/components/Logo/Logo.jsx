import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/modal/modalSlice';
import { LogoNormal, LogoAccent, LogoLink } from './Logo.styled';

export const Logo = () => {
  const dispatch = useDispatch();
  const modalClosed = () => dispatch(closeModal());
  return (
    <div>
      <LogoLink to="/" onClick={modalClosed}>
        <LogoNormal>
          pe<LogoAccent>t</LogoAccent>ly
        </LogoNormal>
      </LogoLink>
    </div>
  );
};
