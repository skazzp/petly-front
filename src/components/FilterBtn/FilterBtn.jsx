import React from 'react';
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
    link: 'favorite',
  },
  {
    btn: 'my ads',
    link: 'own',
  },
];

function FilterBtn() {
  const auth = true;
  return (
    <>
      <FilterList>
        {buttons.map(b => (
          <li key={uuidv4()}>
            <Button to={b.link}>{b.btn}</Button>
          </li>
        ))}
        {auth &&
          authButtons.map(b => (
            <li key={uuidv4()}>
              <Button to={b.link}>{b.btn}</Button>
            </li>
          ))}
      </FilterList>
    </>
  );
}

export default FilterBtn;
