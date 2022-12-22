import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { getByCategory } from 'redux/notice/noticeOperations';
import { v4 as uuidv4 } from 'uuid';

import { Button, FilterList, Item, Wrapper } from './FilterBtn.styled';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import AddNoticeButton from '../AddNoticeButton/AddNoticeButton';

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

  const [search, setSearch] = useSearchParams();
  // const [totalPage, setTotalPage] = useState(1);
  const page = search.get('page');

  const handleClick = e => {
    dispatch(getByCategory({ category: e.target.name, page }));
  };
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const category = location.pathname.split('/')[2];
    if (category) {
      dispatch(getByCategory({ category: category, page }));
    }
  }, [dispatch, location.pathname, page]);

  return (
    <Wrapper>
      <FilterList>
        {buttons.map(b => (
          <Item key={uuidv4()}>
            <Button to={b.link} name={b.link} onClick={handleClick}>
              {b.btn}
            </Button>
          </Item>
        ))}
        {token &&
          authButtons.map(b => (
            <Item key={uuidv4()}>
              <Button to={b.link} name={b.link} onClick={handleClick}>
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
