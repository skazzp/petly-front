import styled from 'styled-components';

export const Div = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding-top: 42px;

  @media screen and (min-width: 768px) {
    padding-top: 204px;
    padding-bottom: 299px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 80px;
    padding-bottom: 147px;
  }
`;
