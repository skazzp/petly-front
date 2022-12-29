import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LoaderSpinner } from 'components/LoaderSpinner/LoaderSpinner';
import { Header } from 'components/Header';
import { GlobalContainer } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
   
      <GlobalContainer>
        <Header />
        <Suspense fallback={<LoaderSpinner />}>
          <Outlet />
        </Suspense>
      </GlobalContainer>
   
  );
};
