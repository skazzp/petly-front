import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { GlobalContainer } from './SharedLayout.styled';
import { Suspense } from 'react';
import { LoaderSpiner } from 'components/LoaderSpiner/LoaderSpiner';

export const SharedLayout = () => {
  return (
   
      <GlobalContainer>
        <Header />
        <Suspense fallback={<LoaderSpiner />}>
          <Outlet />
        </Suspense>
      </GlobalContainer>
   
  );
};
