import React from 'react';
import { Outlet } from 'react-router-dom';

import FilterBtn from 'components/FilterBtn/FilterBtn';
import NoticeCategoryList from 'components/NoticeCategoryList/NoticeCategoryList';
import { Searchbar } from 'components/Searchbar';
import { Box, GlobalBox, Title, Wrapper } from './NoticesPage.styled';
import { useDispatch } from 'react-redux';
import { getByQuery } from 'redux/notice/noticeOperations';

function NoticesPage() {
  const dispatch = useDispatch();

  const searchPets = query => {
    dispatch(getByQuery(query));
  };

  return (
    <GlobalBox>
      <Wrapper>
        <Box>
          <Title>Find your favorite pet</Title>
          <Searchbar submitForm={searchPets} />
          <FilterBtn />
        </Box>

        <NoticeCategoryList />
      </Wrapper>
      <Outlet />
    </GlobalBox>
  );
}

export default NoticesPage;
