import icon from '../../assets/images/icons.svg';
import {Div, Link, UserSvg } from '../UserNav/UserNav.styled';

export const UserNav = ({ closeMenu}) => {
  return (
    <Div>
      <Link to="/chat" onClick={closeMenu}>
        <UserSvg>
          <use href={icon + `#chat`}></use>
        </UserSvg>
        <span>Chat</span>
      </Link>
      <Link to="/user" onClick={closeMenu}>
        <UserSvg>
          <use href={icon + `#avatar-account`}></use>
        </UserSvg>
        <span>Account</span>
      </Link>
    </Div>
  );
};
