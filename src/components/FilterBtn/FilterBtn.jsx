import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { v4 as uuidv4 } from 'uuid';

import { Button, FilterList, Item, Wrapper } from './FilterBtn.styled';
import { useLocation } from 'react-router-dom';
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

  const location = useLocation();
  const category = location.pathname.split('/')[2];

  return (
    <Wrapper>
      <FilterList>
        {buttons.map(b => (
          <Item key={uuidv4()}>
            <Button
              to={b.link === category ? '/notices' : b.link}
              name={b.link}
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
