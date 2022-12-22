import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { getAllNotices, getByCategory } from 'redux/notice/noticeOperations';
import { v4 as uuidv4 } from 'uuid';

import { Button, FilterList, Item, Wrapper } from './FilterBtn.styled';
import {
  redirect,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { useEffect } from 'react';
import AddNoticeButton from '../AddNoticeButton/AddNoticeButton';
import { selectNotices } from 'redux/notice/noticeSelectors';
import { useState } from 'react';

const buttons = [
  {
    btn: 'lost/found',
    link: 'lost-found',
  },
  {
    btn: 'in good hands',
    link: 'for-free',
  },
  {
    btn: 'sell',
    link: 'sell',
  },
];

const authButtons = [
  {
    btn: 'favorite ads',
    link: 'favorites',
  },
  {
    btn: 'my ads',
    link: 'personal',
  },
];

function FilterBtn() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const [flag, setFlag] = useState(true);

  const [search] = useSearchParams();

  const page = search.get('page');

  const navigate = useNavigate();

  const location = useLocation();
  const category = location.pathname.split('/')[2];
  // const handleClick = e => {
  //   console.log(e.target.name, category);
  //   console.log(location);
  //   if (e.target.name === category) {
  //     return redirect('/friends/');

  //   }
  //   return dispatch(getByCategory({ category: e.target.name, page }));
  //   // if (flag) {
  //   //   setFlag(false);
  //   //   return dispatch(getByCategory({ category: e.target.name, page }));
  //   // }
  //   // setFlag(true);
  //   // // dispatch(getAllNotices(page));
  //   // return navigate('/notices');
  // };
  console.log(flag);

  useEffect(() => {
    if (category) {
      dispatch(getByCategory({ category: category, page }));
    }
  }, [category, dispatch, location.pathname, page]);
  const notices = useSelector(selectNotices);
  // console.log(notices[0]?.category, category);

  // const navigate = useNavigate();
  // const l = e => {
  //   if (notices[0]?.category === category) {
  //     console.log(navigate);
  //     return navigate('/notices');
  //     // dispatch(getAllNotices(page));
  //   }
  //   dispatch(getByCategory({ category: e.target.name, page }));
  // };

  return (
    <Wrapper>
      <FilterList>
        {buttons.map(b => (
          <Item key={uuidv4()}>
            <Button
              to={b.link === category ? '/notices' : b.link}
              name={b.link}
              // onClick={handleClick}
            >
              {b.btn}
            </Button>
          </Item>
        ))}
        {token &&
          authButtons.map(b => (
            <Item key={uuidv4()}>
              <Button
                to={b.link === category ? '/notices' : b.link}
                name={b.link}
                //  onClick={handleClick}
              >
                {b.btn}
              </Button>
            </Item>
          ))}
      </FilterList>
      <AddNoticeButton />
    </Wrapper>
  );
}

export default FilterBtn;
