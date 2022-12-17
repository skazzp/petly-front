import styled from 'styled-components';

export const Wrapper = styled.div`
  /* width: 320px; */
  margin-left: auto;
  margin-right: auto;

  /* @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1248px;
  } */
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
    width: 768px;
    flex-wrap: wrap;
    /* justify-content: center; */
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    width: 1248px;
  }
`;
