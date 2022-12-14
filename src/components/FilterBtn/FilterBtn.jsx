import React from 'react';
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
  return (
    <>
      <FilterList>
        {buttons.map(b => (
          <li>
            <Button to={b.link}>{b.btn}</Button>
          </li>
        ))}
      </FilterList>
    </>
  );
}

export default FilterBtn;
