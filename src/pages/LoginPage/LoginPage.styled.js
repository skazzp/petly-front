import styled from 'styled-components';

export const Div = styled.div`
  padding-bottom: auto;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  background: #fdf7f2;
  padding-top: 42px;

  @media screen and (min-width: 768px) {
    padding-top: 204px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 80px;
  }
`;
