import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { PaginationNotice } from './PaginationNotice.styled';

const PaginationNotices = ({ page, totalPages, setSearch }) => {
  // const location = useLocation();
  // console.log(location);
  // const f = loc => {
  //   if (location.pathname === '/notices') {
  //     return totalPages;
  //   }
  //   return null;
  // };
  // const t = f(location);
  return (
    <PaginationNotice
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '40px',
        marginBottom: '40px',
      }}
      count={totalPages}
      page={Number(page)}
      onChange={(e, value) => {
        setSearch({ page: value });
      }}
      boundaryCount={1}
      // showFirstButton
      // showLastButton
      // size="large"
    />
  );
};

export default PaginationNotices;
