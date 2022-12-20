import React from 'react';
import { Outlet } from 'react-router-dom';

import FilterBtn from 'components/FilterBtn/FilterBtn';
import NoticeCategoryList from 'components/NoticeCategoryList/NoticeCategoryList';
import { Searchbar } from 'components/Searchbar';
import { Box, Title, Wrapper } from './NoticesPage.styled';

function NoticesPage() {
  // const submitForm = () => {};

  return (
    <>
      <Wrapper>
        <Box>
          <Title>Find your favorite pet</Title>
          <Searchbar />
          <FilterBtn />
        </Box>

        <NoticeCategoryList />
      </Wrapper>
      <Outlet />
    </>
  );
}

export default NoticesPage;
