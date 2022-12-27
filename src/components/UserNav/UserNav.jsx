import Chat from 'components/Chat/Chat';
import { useState } from 'react';
import icon from '../../assets/images/icons.svg';
import { Div, Link, UserSvg, ChatButton } from '../UserNav/UserNav.styled';

const UserNav = ({ closeMenu }) => {
  const [chatOpen, setChatOpene] = useState(true);
  return (
    <>
      <Div>
        <ChatButton onClick={e => setChatOpene(!chatOpen)}>
          <UserSvg>
            <use href={icon + `#chat`}></use>
          </UserSvg>
          <span>Chat</span>
        </ChatButton>
        <Link to="/user" onClick={closeMenu}>
          <UserSvg>
            <use href={icon + `#avatar-account`}></use>
          </UserSvg>
          <span>Account</span>
        </Link>
      </Div>
     { !chatOpen ? <Chat/> :null}
    </>
  );
};

//
//
export default UserNav;
