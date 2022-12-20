import React from 'react';
import { Outlet } from 'react-router-dom';

import FilterBtn from 'components/FilterBtn/FilterBtn';
import NoticeCategoryList from 'components/NoticeCategoryList/NoticeCategoryList';

function NoticesPage() {
  return (
    <>
      <div>
        <FilterBtn />
      </div>
      <NoticeCategoryList />
      <Outlet />
    </>
  );
}

export default NoticesPage;
