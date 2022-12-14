import React from 'react';
import { Outlet } from 'react-router-dom';

import FilterBtn from 'components/FilterBtn/FilterBtn';

function NoticesPage() {
  return (
    <>
      <div>NoticesPage</div>
      <FilterBtn />
      <Outlet />
    </>
  );
}

export default NoticesPage;
