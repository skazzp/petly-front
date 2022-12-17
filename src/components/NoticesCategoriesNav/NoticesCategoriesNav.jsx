import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/authSelectors';
import AddNoticeButton from '../AddNoticeButton';
import { Wrapper, LinkStyled, BtnStyled } from './NoticesCategoriesNav.styled';

const buttonText = [
  { id: 'sell', text: 'sell', active: false },
  { id: 'lost-found', text: 'lost/found', active: false },
  { id: 'for-free', text: 'in good hands', active: false },
];
const authBtnText = [
  { id: 'favorite', text: 'Favorite ads', active: false },
  { id: 'own', text: 'My ads', active: false },
];

const NoticesCategoriesNav = () => {
  const isLoggedIn = useSelector(selectToken);
  const [btnList, setBtnList] = useState(
    isLoggedIn ? [...buttonText, ...authBtnText] : buttonText
  );
  const location = useLocation();

  useEffect(() => {
    const locationArr = location.pathname.split('/');
    let newBtnList;
    if (isLoggedIn) {
      newBtnList = [...buttonText, ...authBtnText].map(item => {
        return { ...item, active: locationArr[2] === item.id ? true : false };
      });
    } else {
      newBtnList = btnList.map(item => {
        return { ...item, active: locationArr[2] === item.id ? true : false };
      });
    }
    setBtnList(newBtnList);
  }, [location, isLoggedIn, btnList]);

  return (
    <Wrapper>
      {btnList.map(({ id, text, active }) => (
        <LinkStyled key={id} to={`/notices/${id}`}>
          <BtnStyled active={active}>{text}</BtnStyled>
        </LinkStyled>
      ))}
      <AddNoticeButton />
    </Wrapper>
  );
};

export default NoticesCategoriesNav;
