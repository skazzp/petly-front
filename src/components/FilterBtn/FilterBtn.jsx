import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { getByCategory } from 'redux/notice/noticeOperations';
import { v4 as uuidv4 } from 'uuid';
import { Button, FilterList } from './FilterBtn.styled';

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

  const handleClick = e => {
    dispatch(getByCategory(e.target.name));
  };

  return (
    <>
      <FilterList>
        {buttons.map(b => (
          <li key={uuidv4()}>
            <Button to={b.link} name={b.link} onClick={handleClick}>
              {b.btn}
            </Button>
          </li>
        ))}
        {token &&
          authButtons.map(b => (
            <li key={uuidv4()}>
              <Button to={b.link} name={b.link} onClick={handleClick}>
                {b.btn}
              </Button>
            </li>
          ))}
      </FilterList>
    </>
  );
}

export default FilterBtn;
